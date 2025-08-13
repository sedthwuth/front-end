'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">ติดต่อเรา</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">ชื่อ</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="กรอกชื่อของคุณ"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">อีเมล</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="กรอกอีเมลของคุณ"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">ข้อความ</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="พิมพ์ข้อความของคุณ..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
