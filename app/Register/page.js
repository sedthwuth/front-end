// app/register/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import Head from 'next/head'; // Import Head component
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function RegisterPage() {
  // Define State to store all form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    firstname: '',
    lastname: '',
    address: '',
    sex: '',
    Birthday: '', // Use uppercase 'Birthday' for consistency with API body
    terms: false,
  });

  const router = useRouter(); // Initialize useRouter

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic check for "terms" checkbox
    if (!formData.terms) {
      Swal.fire({
        icon: 'warning',
        title: '<h3>Accept Terms!</h3>',
        text: 'Please accept the terms of service before registering',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'swal2-responsive-popup'
        }
      });
      return;
    }

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          fullname: formData.fullname,
          firstname: formData.firstname,
          lastname: formData.lastname,
          address: formData.address,
          sex: formData.sex,
          Birthday: formData.Birthday, // Use formData.Birthday
        }),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>Registration Successful!</h3>',
          text: 'You can now log in',
          showConfirmButton: false, // No need for confirmation button to redirect immediately
          timer: 2000,
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        }).then(() => {
          router.push('/login'); // Redirect to Login page after successful registration
        });
      } else {
        const errorData = await res.json();
        Swal.fire({
          icon: 'error',
          title: '<h3>An error occurred!</h3>',
          text: errorData.message || 'Unable to register', // Display error message from API
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        });
      }
    } catch (error) {
      console.error('Registration Error:', error);
      Swal.fire({
        icon: 'error',
        title: '<h3>An error occurred!</h3>',
        text: 'Could not connect to the server. Please try again later.',
        customClass: {
          popup: 'swal2-responsive-popup'
        }
      });
    }
  };

  // useEffect for loading Bootstrap JS when Component is Mounted
  // Essential for Bootstrap components like Modals, Navbar Toggler
  useEffect(() => {
    // Check if window and document exist (for Next.js client-side rendering)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // You can access Bootstrap objects here if needed
          // e.g., new bootstrap.Modal(document.getElementById('termsModal'));
        })
        .catch((err) => console.error("Failed to load Bootstrap JS", err));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Register - [Your Website Name]</title>
        <meta name="description" content="Page for new user registration" />
      </Head>

      <div className="register-page-wrapper">
        <style jsx global>{`
          /* Custom font import (if not already in layout.js) */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

          body {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            background: linear-gradient(135deg, #a8c0ff 0%, #3a47d5 100%); /* Enhanced gradient background for a modern look */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 15px; /* Reduced padding for smaller screens */
          }
          .register-page-wrapper {
            /* This wrapper is essentially the entire viewport now, its styles are applied to body */
          }
          .register-card {
            max-width: 650px; /* Increased max-width for better form presentation */
            width: 100%;
            padding: 30px; /* Reduced padding for more compact height */
            background-color: rgba(255, 255, 255, 0.98); /* Near-opaque white background */
            border-radius: 20px; /* More rounded corners */
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25); /* Stronger, softer shadow */
            backdrop-filter: blur(8px); /* More pronounced blur effect behind the card */
            border: 1px solid rgba(255, 255, 255, 0.5); /* Lighter border for modern look */
            animation: fadeIn 0.8s ease-out; /* Fade-in animation for the card */
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .register-card:hover {
            transform: translateY(-10px); /* More pronounced lift on hover */
            box-shadow: 0 20px 50px rgba(0,0,0,0.3); /* Stronger shadow on hover */
            border-color: rgba(255, 255, 255, 0.8);
          }
          h2.text-primary {
            color: #3a47d5 !important; /* Deep blue for heading */
            margin-bottom: 2rem !important; /* Slightly reduced spacing below heading */
            font-size: 2.5rem; /* Larger heading */
            font-weight: 700; /* Bolder heading */
            text-shadow: 2px 2px 5px rgba(0,0,0,0.1); /* More pronounced text shadow */
          }
          .form-label {
            font-weight: 600; /* Bolder labels */
            color: #495057; /* Darker label color */
            margin-bottom: 0.5rem; /* Slightly reduced spacing below label */
          }
          .form-control, .form-select {
            border-radius: 10px; /* More rounded inputs */
            padding: 0.75rem 1.2rem; /* Slightly reduced vertical padding inside inputs */
            border: 1px solid #cce5ff; /* Lighter, subtle border */
            transition: all 0.3s ease-in-out;
            background-color: #f8faff; /* Very light blue tint */
          }
          .form-control:focus, .form-select:focus, .input-group-text:focus-within, .form-check-input:focus {
            border-color: #3a47d5; /* Deep blue border on focus */
            box-shadow: 0 0 0 0.3rem rgba(58, 71, 213, 0.3); /* Deep blue shadow on focus */
            background-color: #ffffff; /* White background on focus */
          }
          .input-group-text {
            border-radius: 10px 0 0 10px !important; /* Match input border-radius */
            background-color: #e6f2ff; /* Light background for icons */
            border: 1px solid #cce5ff;
            border-right: none;
            color: #0056b3; /* Darker blue for icons */
          }
          .btn-primary {
            background-image: linear-gradient(45deg, #3a47d5 0%, #007bff 100%); /* Deep gradient from blue to purple-ish */
            border: none;
            border-radius: 10px; /* More rounded button */
            padding: 0.9rem 1.8rem; /* Slightly reduced padding */
            font-size: 1.1rem; /* Slightly reduced font size */
            font-weight: 700; /* Bolder button text */
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
            transition: all 0.3s ease-in-out;
          }
          .btn-primary:hover {
            transform: translateY(-5px); /* More lift on hover */
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.5);
            opacity: 1; /* Ensure full opacity */
            background-position: right center; /* Subtle shift in gradient */
          }
          .form-check-label {
            color: #6c757d;
            font-weight: 500;
          }
          .text-muted {
            color: #8892b0 !important; /* Slightly softer mute text */
          }
          a.text-primary.fw-bold {
            color: #3a47d5 !important; /* Deep blue for links */
            transition: color 0.2s ease-in-out;
          }
          a.text-primary.fw-bold:hover {
            color: #2a3390 !important; /* Darker shade on hover */
            text-decoration: underline !important;
          }

          /* SweetAlert2 Responsive Adjustments */
          .swal2-responsive-popup {
            width: 90% !important;
            max-width: 450px; /* Slightly larger max-width for modals */
          }
          @media (min-width: 576px) {
            .swal2-responsive-popup {
              width: 550px !important;
            }
          }
        `}</style>
        
        <div className="register-card">
          <h2 className="text-center mb-4 text-primary fw-bold">สมัครสมาชิก</h2>
          <form onSubmit={handleSubmit}>
            
            {/* Username field (text) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="username" className="form-label">ชื่อผู้ใช้</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-person"></i></span>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="ป้อนชื่อผู้ใช้"
                  required
                />
              </div>
            </div>

            {/* Password field (password) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="password" className="form-label">รหัสผ่าน</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-lock"></i></span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="ป้อนรหัสผ่าน"
                  required
                />
              </div>
            </div>

            {/* First Name Prefix (select) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="firstname" className="form-label">คำนำหน้าชื่อ</label>
              <select
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">เลือกคำนำหน้าชื่อ</option>
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
            </div>

            {/* Full Name field (text) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="fullname" className="form-label">ชื่อ</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="form-control"
                placeholder="ป้อนชื่อ"
                required
              />
            </div>

            {/* Last Name field (text) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="lastname" className="form-label">นามสกุล</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-control"
                placeholder="ป้อนนามสกุล"
                required
              />
            </div>

            {/* Address field (textarea) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="address" className="form-label">ที่อยู่</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                className="form-control"
                placeholder="ป้อนที่อยู่ของคุณ"
                required
              ></textarea>
            </div>

            {/* Gender field (radio) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label className="form-label d-block">เพศ</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="male"
                  name="sex"
                  value="ชาย"
                  checked={formData.sex === 'ชาย'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label htmlFor="male" className="form-check-label">ชาย</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="หญิง"
                  checked={formData.sex === 'หญิง'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label htmlFor="female" className="form-check-label">หญิง</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="other"
                  name="sex"
                  value="อื่นๆ" // Change value to 'อื่นๆ' for clarity
                  checked={formData.sex === 'อื่นๆ'}
                  onChange={handleChange}
                  className="form-check-input"
                  required
                />
                <label htmlFor="other" className="form-check-label">อื่นๆ</label>
              </div>
            </div>

            {/* Birthday field (date) */}
            <div className="mb-3"> {/* Reduced margin-bottom */}
              <label htmlFor="Birthday" className="form-label">วันเกิด</label>
              <input
                type="date"
                id="Birthday"
                name="Birthday"
                value={formData.Birthday}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            {/* Terms and Conditions Checkbox (checkbox) */}
            <div className="mb-4 form-check"> {/* Reduced margin-bottom */}
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="terms" className="form-check-label">
                ฉันยอมรับ <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal" className="text-decoration-none text-primary fw-bold">เงื่อนไขการให้บริการ</a>
              </label>
            </div>

            {/* Register Button (button) */}
            <div className="d-grid mb-3"> {/* Reduced margin-bottom */}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                ลงทะเบียน
              </button>
            </div>
          </form>

          {/* Link to Login Page */}
          <div className="mt-3 text-center"> {/* Reduced margin-top */}
            มีบัญชีอยู่แล้ว? <Link href="/login" className="text-decoration-none text-primary fw-bold">เข้าสู่ระบบที่นี่</Link>
          </div>
        </div>

        {/* Modal for Terms of Service */}
        <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="termsModalLabel">เงื่อนไขการใช้งาน</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>โปรดอ่านเงื่อนไขการใช้งานของเราอย่างละเอียด...</p>
                <p>เนื้อหาเงื่อนไขการใช้งานจะปรากฏที่นี่ คุณสามารถเพิ่มข้อความหรือ HTML ได้ตามต้องการ</p>
                <p>ตัวอย่างเช่น:</p>
                <ul>
                  <li>การเก็บข้อมูลส่วนบุคคล</li>
                  <li>นโยบายความเป็นส่วนตัว</li>
                  <li>ข้อกำหนดและเงื่อนไขการใช้งานบริการ</li>
                </ul>
                <p>การใช้งานเว็บไซต์นี้ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขทั้งหมด</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">ปิด</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}