'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import useRouter
import Head from 'next/head'; // Import Head component
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function PasswordPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  // useEffect for loading Bootstrap JS when Component is Mounted
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          // Bootstrap JS loaded
        })
        .catch((err) => console.error("Failed to load Bootstrap JS", err));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email) {
      Swal.fire({
        icon: 'warning',
        title: '<h3>โปรดระบุอีเมล!</h3>',
        text: 'กรุณากรอกอีเมลของคุณเพื่อดำเนินการต่อ',
        confirmButtonText: 'ตกลง',
        customClass: {
          popup: 'swal2-responsive-popup'
        }
      });
      return;
    }

    // You would typically call an API here to send a password reset email
    // For demonstration, we'll simulate an API call
    try {
      // Simulate API call
      // Replace this with your actual API endpoint for sending reset emails
      const res = await new Promise(resolve => setTimeout(() => {
        // Simulate success or failure
        const success = Math.random() > 0.3; // 70% chance of success
        if (success) {
          resolve({ ok: true, json: () => Promise.resolve({ message: 'Password reset link sent to your email.' }) });
        } else {
          resolve({ ok: false, status: 400, statusText: 'Bad Request', json: () => Promise.resolve({ message: 'Email not found or error sending link.' }) });
        }
      }, 1500)); // Simulate network delay

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<h3>ส่งลิงก์รีเซ็ตสำเร็จ!</h3>',
          html: '<p>เราได้ส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว</p><p>โปรดตรวจสอบกล่องจดหมาย (รวมถึงโฟลเดอร์ Junk/Spam) และทำตามคำแนะนำ</p>',
          showConfirmButton: true,
          confirmButtonText: 'ตกลง',
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        }).then(() => {
          router.push('/login'); // Redirect to login page after sending link
        });
      } else {
        const errorData = await res.json().catch(() => ({}));
        Swal.fire({
          icon: 'error',
          title: '<h3>เกิดข้อผิดพลาด!</h3>',
          text: errorData.message || 'ไม่สามารถส่งลิงก์รีเซ็ตรหัสผ่านได้ โปรดลองอีกครั้ง',
          customClass: {
            popup: 'swal2-responsive-popup'
          }
        });
      }
    } catch (error) {
      console.error('Forgot Password Error:', error);
      Swal.fire({
        icon: 'error',
        title: '<h3>Network Error!</h3>',
        text: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ โปรดลองอีกครั้งในภายหลัง',
        customClass: {
          popup: 'swal2-responsive-popup'
        }
      });
    }
  };

  return (
    <>
      <Head>
        <title>ลืมรหัสผ่าน - [ชื่อเว็บไซต์ของคุณ]</title>
        <meta name="description" content="หน้าสำหรับกู้คืนรหัสผ่าน" />
      </Head>

      <div className="forgot-password-page-wrapper">
        <style jsx global>{`
          /* Custom font import (if not already in layout.js) */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

          body {
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            background: linear-gradient(135deg, #a8c0ff 0%, #3a47d5 100%); /* Consistent background with Login/Register */
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
          }
          .forgot-password-page-wrapper {
            /* Styles applied to body */
          }
          .forgot-password-card {
            max-width: 450px; /* Similar width to Login page */
            width: 100%;
            padding: 40px;
            background-color: rgba(255, 255, 255, 0.98);
            border-radius: 20px;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.5);
            animation: fadeIn 0.8s ease-out;
            text-align: center; /* Center content inside the card */
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .forgot-password-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.3);
            border-color: rgba(255, 255, 255, 0.8);
          }
          h2.text-primary {
            color: #3a47d5 !important;
            margin-bottom: 2rem !important;
            font-size: 2.5rem;
            font-weight: 700;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.1);
          }
          p.text-muted {
            margin-bottom: 2.5rem; /* Spacing for instruction text */
            color: #6c757d !important;
          }
          .form-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 0.5rem;
          }
          .form-control {
            border-radius: 10px;
            padding: 0.85rem 1.2rem;
            border: 1px solid #cce5ff;
            transition: all 0.3s ease-in-out;
            background-color: #f8faff;
          }
          .form-control:focus, .input-group-text:focus-within {
            border-color: #3a47d5;
            box-shadow: 0 0 0 0.3rem rgba(58, 71, 213, 0.3);
            background-color: #ffffff;
          }
          .input-group-text {
            border-radius: 10px 0 0 10px !important;
            background-color: #e6f2ff;
            border: 1px solid #cce5ff;
            border-right: none;
            color: #0056b3;
          }
          .btn-primary {
            background-image: linear-gradient(45deg, #3a47d5 0%, #007bff 100%);
            border: none;
            border-radius: 10px;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: 700;
            box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
            transition: all 0.3s ease-in-out;
          }
          .btn-primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 123, 255, 0.5);
            opacity: 1;
            background-position: right center;
          }
          a.text-primary.fw-bold {
            color: #3a47d5 !important;
            transition: color 0.2s ease-in-out;
          }
          a.text-primary.fw-bold:hover {
            color: #2a3390 !important;
            text-decoration: underline !important;
          }
          /* SweetAlert2 Responsive Adjustments */
          .swal2-responsive-popup {
            width: 90% !important;
            max-width: 450px;
          }
          @media (min-width: 576px) {
            .swal2-responsive-popup {
              width: 550px !important;
            }
          }
        `}</style>
        
        <div className="forgot-password-card">
          <h2 className="text-primary fw-bold">ลืมรหัสผ่าน?</h2>
          <p className="text-muted mb-4">
            ไม่ต้องกังวล! เราจะส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมลของคุณ
          </p>
          <form onSubmit={handleSubmit}>
            
            {/* Email field */}
            <div className="mb-4">
              <label htmlFor="email" className="form-label">อีเมล</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="ป้อนอีเมลของคุณ"
                  required
                />
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="d-grid mb-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                ส่งลิงก์รีเซ็ต
              </button>
            </div>
          </form>

          {/* Link back to Login */}
          <div className="mt-3 text-center">
            <Link href="/login" className="text-decoration-none text-primary fw-bold">กลับสู่หน้าเข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
    </>
  );
}