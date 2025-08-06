// app/Register/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'; // Import SweetAlert2

export default function RegisterPage() {
  // กำหนด State สำหรับเก็บข้อมูลฟอร์มทั้งหมด
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    prefix: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    dob: '',
    terms: false,
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
    console.log('Form Data Submitted:', formData);
    // Logic to submit formData to API
    // ตัวอย่าง: fetch('/api/register', { method: 'POST', body: JSON.stringify(formData) });

    // แสดง SweetAlert2 เมื่อลงทะเบียนสำเร็จ
    Swal.fire({
      icon: 'success',
      title: 'ลงทะเบียนสำเร็จ!',
      text: 'คุณสามารถเข้าสู่ระบบได้แล้ว',
      confirmButtonText: 'ตกลง'
    });
  };

  // useEffect สำหรับโหลด Bootstrap JS เมื่อ Component ถูก Mount
  // สำคัญสำหรับ Bootstrap components เช่น Modal, Navbar Toggler
  useEffect(() => {
    // ตรวจสอบว่า window และ document มีอยู่ (สำหรับ Next.js client-side rendering)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // สามารถเข้าถึง Bootstrap objects ได้ที่นี่ ถ้าจำเป็น
          // เช่น new bootstrap.Modal(document.getElementById('termsModal'));
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
        .register-card {
          max-width: 600px;
          width: 100%;
          padding: 30px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .register-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        .form-control:focus, .form-select:focus, .form-check-input:focus {
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
      
      {/* ปรับโครงสร้างเพื่อจัดให้อยู่กึ่งกลางโดยตรง */}
      <div className="register-card">
        <h2 className="text-center mb-4 text-primary fw-bold">สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit}>
          
          {/* ชื่อผู้ใช้ (text) */}
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

          {/* รหัสผ่าน (password) */}
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

          {/* คำนำหน้าชื่อ (select) */}
          <div className="mb-3">
            <label htmlFor="prefix" className="form-label">คำนำหน้าชื่อ</label>
            <select
              id="prefix"
              name="prefix"
              value={formData.prefix}
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

          {/* ชื่อ (text) */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">ชื่อ</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              placeholder="ป้อนชื่อ"
              required
            />
          </div>

          {/* นามสกุล (text) */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">นามสกุล</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              placeholder="ป้อนนามสกุล"
              required
            />
          </div>

          {/* ที่อยู่ (textarea) */}
          <div className="mb-3">
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

          {/* เพศ (radio) */}
          <div className="mb-3">
            <label className="form-label d-block">เพศ</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
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
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
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
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label htmlFor="other" className="form-check-label">อื่นๆ</label>
            </div>
          </div>

          {/* วันเกิด (date) */}
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">วันเกิด</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          {/* Checkbox ยอมรับเงื่อนไข (checkbox) */}
          <div className="mb-4 form-check">
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

          {/* ปุ่ม Register (button) */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              ลงทะเบียน
            </button>
          </div>
        </form>
      </div>

      {/* Modal สำหรับเงื่อนไขการใช้งาน */}
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
  );
}