// app/login/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function LoginPage() {
  // กำหนด State สำหรับเก็บข้อมูลฟอร์ม
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงค่าใน Input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // ฟังก์ชันสำหรับจัดการการส่งฟอร์ม
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data Submitted:', formData);
    // Logic to submit login data to API
    // ตัวอย่าง: fetch('/api/login', { method: 'POST', body: JSON.stringify(formData) });

    // แสดง SweetAlert2 เมื่อเข้าสู่ระบบสำเร็จ
    Swal.fire({
      icon: 'success',
      title: 'เข้าสู่ระบบสำเร็จ!',
      text: 'ยินดีต้อนรับกลับมาครับ/ค่ะ',
      confirmButtonText: 'ตกลง'
    });
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
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-4">
      <style jsx global>{`
        body {
          background-color: #f8f9fa; /* สีพื้นหลังอ่อนๆ */
        }
        .login-card {
          max-width: 450px; /* ขนาดสูงสุดของกล่อง Login */
          width: 100%;
          padding: 30px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .login-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .form-control:focus, .form-check-input:focus {
          border-color: #80bdff; /* สีฟ้าอ่อนเมื่อ focus */
          box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
        }
        .btn-primary {
          background-image: linear-gradient(to right, #007bff, #6f42c1); /* Gradient สำหรับปุ่ม */
          border: none;
          transition: all 0.3s ease-in-out;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          opacity: 0.9;
        }
      `}</style>
      
      <div className="login-card">
        <h2 className="text-center mb-4 text-primary fw-bold">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit}>
          
          {/* ช่องสำหรับกรอกชื่อผู้ใช้ */}
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3 form-check">
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
          <div className="d-grid gap-2">
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
            <Link href="/register" className="text-decoration-none text-primary fw-bold">ลงทะเบียน</Link>
          </div>
        </form>
      </div>
    </div>
  );
}