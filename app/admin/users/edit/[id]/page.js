'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function EditUserPage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    firstname: '',
    lastname: '',
    address: '',
    sex: '',
    Birthday: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
        const data = await res.json();
        if (data.length > 0) {
          const user = data[0];
          setFormData({
            username: user.username || '',
            password: user.password || '',
            fullname: user.fullname || '',
            firstname: user.firstname || '',
            lastname: user.lastname || '',
            address: user.address || '',
            sex: user.sex || '',
            birthday: user.birthday || '',
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(' tp://itdev.cmtc.ac.th:3000/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData }),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'แก้ไขข้อมูลสำเร็จ',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          router.push('/admin/users');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถแก้ไขข้อมูลได้'
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาดเครือข่าย',
        text: err.message
      });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">แก้ไขข้อมูลผู้ใช้</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">ชื่อผู้ใช้</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">รหัสผ่าน</label>
          <input type="text" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">คำนำหน้า</label>
          <select name="firstname" value={formData.firstname} onChange={handleChange} className="form-select" required>
            <option value="">เลือก</option>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">ชื่อ</label>
          <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">นามสกุล</label>
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">ที่อยู่</label>
          <textarea name="address" value={formData.address} onChange={handleChange} className="form-control" rows="3" required />
        </div>
        <div className="mb-3">
          <label className="form-label">เพศ</label>
          <div>
            <input type="radio" name="sex" value="ชาย" checked={formData.sex === 'ชาย'} onChange={handleChange} /> ชาย &nbsp;
            <input type="radio" name="sex" value="หญิง" checked={formData.sex === 'หญิง'} onChange={handleChange} /> หญิง &nbsp;
            <input type="radio" name="sex" value="other" checked={formData.sex === 'other'} onChange={handleChange} /> อื่น ๆ
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label">วันเกิด</label>
          <input type="date" name="Birthday" value={formData.Birthday} onChange={handleChange} className="form-control" required />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">บันทึกการแก้ไข</button>
        </div>
      </form>
    </div>
  );
}
