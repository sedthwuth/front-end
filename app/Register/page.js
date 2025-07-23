// app/Register/page.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-inter">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-sm">สมัครสมาชิก</h1>
        <form onSubmit={handleSubmit}>
          {/* ชื่อผู้ใช้ (text) */}
          <div className="mb-5">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              ชื่อผู้ใช้:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400 text-gray-800"
              placeholder="ป้อนชื่อผู้ใช้"
              required
            />
          </div>

          {/* รหัสผ่าน (password) */}
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              รหัสผ่าน:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400 text-gray-800"
              placeholder="ป้อนรหัสผ่าน"
              required
            />
          </div>

          {/* คำนำหน้าชื่อ (select) */}
          <div className="mb-5">
            <label htmlFor="prefix" className="block text-gray-700 text-sm font-semibold mb-2">
              คำนำหน้าชื่อ:
            </label>
            <select
              id="prefix"
              name="prefix"
              value={formData.prefix}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out text-gray-800"
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
          <div className="mb-5">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-semibold mb-2">
              ชื่อ:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400 text-gray-800"
              placeholder="ป้อนชื่อ"
              required
            />
          </div>

          {/* นามสกุล (text) */}
          <div className="mb-5">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-semibold mb-2">
              นามสกุล:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400 text-gray-800"
              placeholder="ป้อนนามสกุล"
              required
            />
          </div>

          {/* ที่อยู่ (textarea) */}
          <div className="mb-5">
            <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">
              ที่อยู่:
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out placeholder-gray-400 text-gray-800 resize-y"
              placeholder="ป้อนที่อยู่ของคุณ"
              required
            ></textarea>
          </div>

          {/* เพศ (radio) */}
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              เพศ:
            </label>
            <div className="flex items-center space-x-6">
              <label htmlFor="male" className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                  required
                />
                ชาย
              </label>

              <label htmlFor="female" className="flex items-center text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2 h-5 w-5 text-pink-500 focus:ring-pink-500 border-gray-300 rounded-full"
                />
                หญิง
              </label>
            </div>
          </div>

          {/* วันเกิด (date) */}
          <div className="mb-6">
            <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-2">
              วันเกิด:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out text-gray-800"
              required
            />
          </div>

          {/* Checkbox ยอมรับเงื่อนไข (checkbox) */}
          <div className="mb-8 flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-3 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              ฉันยอมรับ <Link href="/terms" className="text-blue-600 hover:text-blue-800 font-bold underline transition duration-200 ease-in-out">เงื่อนไขการให้บริการ</Link>
            </label>
          </div>

          {/* ปุ่ม Register (button) */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-extrabold text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              ลงทะเบียน
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}