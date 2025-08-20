// app/login/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import Head from 'next/head'; // Import Head component
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function LoginPage() {
  // กำหนด State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });
  const router = useRouter(); // Initialize useRouter

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงค่าใน Input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // ฟังก์ชันสำหรับจัดการการส่งฟอร์มและเรียก API
  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();

    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: formData.username, password: formData.password }), // Use formData values
      });

      const data = await res.json();

      if (res.ok && data.token) { // Check res.ok for successful HTTP status
        localStorage.setItem('token', data.token); // Save token to localStorage
        Swal.fire({
          icon: 'success',
          title: '<h3>เข้าสู่ระบบสำเร็จ!</h3>',
          text: 'ยินดีต้อนรับกลับมาครับ/ค่ะ',
          showConfirmButton: false,
          timer: 2000,
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        }).then(() => {
          router.push('/admin/users'); // Redirect to admin/users page on success
        });
      } else {
        // Handle specific error messages from API if available
        const errorMessage = data.message || 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!';
        Swal.fire({
          icon: 'warning',
          title: '<h3>เข้าสู่ระบบไม่สำเร็จ!</h3>',
          text: errorMessage,
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        });
        // No redirect on failed login, user stays on the page to try again
      }
    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({
        icon: 'error',
        title: '<h3>ข้อผิดพลาดเซิร์ฟเวอร์!</h3>',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ โปรดลองอีกครั้งในภายหลัง',
        customClass: {
          popup: 'swal2-responsive-popup'
        }
      });
    }
  };

  // useEffect สำหรับโหลด Bootstrap JS เมื่อ Component ถูก Mount
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // สามารถเข้าถึง Bootstrap objects ได้ที่นี่ ถ้าจำเป็น
        })
        .catch((err) => console.error("Failed to load Bootstrap JS", err));
    }
  }, []);

  return (
    <>
      <Head>
        <title>เข้าสู่ระบบ - [ชื่อเว็บไซต์ของคุณ]</title>
        <meta name="description" content="หน้าเข้าสู่ระบบสำหรับผู้ใช้งาน" />
      </Head>

      <div className="login-page-wrapper">
        <style jsx global>{`
          /* Custom font import (if not already in layout.js) */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

          body {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            background: linear-gradient(135deg, #a5ebc8ff 0%, #b3e7ebff 50%, #e5c0eeff 100%); /* Enhanced gradient background */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px; /* Add some padding for smaller screens */
          }
          .login-page-wrapper {
            /* This wrapper is essentially the entire viewport now, its styles are applied to body */
            /* The container-fluid was removed to give full control to body for background */
          }
          .login-card { 
            max-width: 480px; /* Increased max-width for better form presentation */
            width: 100%;
            padding: 40px; /* More padding for spacious feel */
            background-color: rgba(255, 255, 255, 0.95); /* Slightly transparent white background */
            border-radius: 15px; /* More rounded corners */
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Stronger, softer shadow */
            backdrop-filter: blur(5px); /* Subtle blur effect behind the card */
            border: 1px solid rgba(255, 255, 255, 0.3); /* Light border for modern look */
            animation: fadeIn 0.8s ease-out; /* Fade-in animation for the card */
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .login-card:hover {
            transform: translateY(-8px); /* More pronounced lift on hover */
            box-shadow: 0 15px 40px rgba(0,0,0,0.25); /* Stronger shadow on hover */
            border-color: rgba(255, 255, 255, 0.6);
          }
          h2.text-primary {
            color: #6f42c1 !important; /* Ensure primary color for heading matches button */
            margin-bottom: 2rem !important; /* More spacing below heading */
            font-size: 2.2rem;
            font-weight: 700; /* Bolder heading */
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }
          .form-label {
            font-weight: 600; /* Bolder labels */
            color: #343a40; /* Darker label color */
            margin-bottom: 0.5rem;
          }
          .form-control {
            border-radius: 8px; /* Rounded inputs */
            padding: 0.75rem 1rem; /* More padding inside inputs */
            border: 1px solid #ced4da;
            transition: all 0.2s ease-in-out;
          }
          .form-control:focus, .input-group-text:focus-within {
            border-color: #6f42c1; /* Purple border on focus */
            box-shadow: 0 0 0 0.25rem rgba(111, 66, 193, 0.25); /* Purple shadow on focus */
            background-color: #f0f8ff; /* Light blue tint on focus */
          }
          .input-group-text {
            border-radius: 8px 0 0 8px !important; /* Match input border-radius */
            background-color: #e9ecef; /* Light background for icons */
            border: 1px solid #ced4da;
            border-right: none;
            color: #495057;
          }
          .btn-primary {
            background-image: linear-gradient(45deg, #6f42c1 0%, #007bff 100%); /* Deep gradient for button */
            border: none;
            border-radius: 8px; /* Rounded button */
            padding: 0.8rem 1.5rem; /* Larger padding */
            font-size: 1.1rem;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
            transition: all 0.3s ease-in-out;
          }
          .btn-primary:hover {
            transform: translateY(-3px); /* More lift on hover */
            box-shadow: 0 8px 25px rgba(0, 123, 255, 0.4);
            opacity: 1; /* Ensure full opacity */
            background-position: right center; /* Subtle shift in gradient */
          }
          .form-check-label {
            color: #555;
            font-weight: 400;
          }
          .text-muted {
            color: #6c757d !important;
          }
          a.text-primary.fw-bold {
            color: #6f42c1 !important; /* Ensure primary color for links */
            transition: color 0.2s ease-in-out;
          }
          a.text-primary.fw-bold:hover {
            color: #5a359d !important; /* Darker shade on hover */
            text-decoration: underline !important;
          }

          /* SweetAlert2 Responsive Adjustments */
          .swal2-responsive-popup {
            width: 90% !important;
            max-width: 400px;
          }
          @media (min-width: 576px) {
            .swal2-responsive-popup {
              width: 500px !important;
            }
          }
        `}</style>
        
        <div className="login-card">
          <h2 className="text-center mb-4 text-primary fw-bold">เข้าสู่ระบบ</h2>
          <form onSubmit={handleSubmit}>
            
            {/* ช่องสำหรับกรอกชื่อผู้ใช้ */}
            <div className="mb-4"> {/* Increased margin-bottom for better spacing */}
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

            {/* ช่องสำหรับกรอกรหัสผ่าน */}
            <div className="mb-4"> {/* Increased margin-bottom for better spacing */}
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
            
            {/* Checkbox จดจำฉันไว้ */}
            <div className="mb-4 form-check"> {/* Increased margin-bottom for better spacing */}
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="form-check-input"
              />
              <label htmlFor="rememberMe" className="form-check-label">จดจำฉันไว้</label>
            </div>
            
            {/* ปุ่มเข้าสู่ระบบ */}
            <div className="d-grid gap-2 mb-4"> {/* Added margin-bottom to button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                เข้าสู่ระบบ
              </button>
            </div>

            {/* ลิงก์สำหรับลืมรหัสผ่านและลงทะเบียน */}
            <div className="mt-3 text-center">
              <Link href="/forgot-password" className="text-decoration-none text-primary fw-bold">ลืมรหัสผ่าน?</Link>
              <span className="mx-2 text-muted">|</span>
              <Link href="/register" className="text-decoration-none text-primary fw-bold">ลงทะเบียน</Link> {/* Changed to /signin for consistency */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
