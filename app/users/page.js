"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // เพิ่ม router สำหรับเปลี่ยนหน้า

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({ username: "", email: "", role: "" });

  // ฟังก์ชันดึง Token จาก LocalStorage
  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` // ส่ง Token ไปใน Header
    };
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users", {
        headers: getAuthHeader() // เพิ่ม headers
      });

      if (response.status === 401 || response.status === 403) {
        router.push("/login"); // ถ้า Token หมดอายุหรือไม่มี ให้เด้งไป login
        return;
      }

      const data = await response.json();
      if (response.ok) setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { 
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // เช็คตั้งแต่โหลดหน้าแรก
    } else {
      fetchUsers(); 
    }
  }, []);

  // --- ฟังก์ชันลบ (เพิ่ม Token) ---
  const handleDelete = async (id, username) => {
    if (window.confirm(`ยืนยันการลบผู้ใช้: ${username}?`)) {
      const response = await fetch(`http://localhost:5000/api/users/${id}`, { 
        method: "DELETE",
        headers: getAuthHeader() // เพิ่ม headers
      });
      
      if (response.ok) {
        setUsers(users.filter((u) => u.users_id !== id));
      } else {
        alert("ไม่สามารถลบได้ (คุณอาจไม่มีสิทธิ์)");
      }
    }
  };

  // --- ฟังก์ชัน Logout ---
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  // ... (ฟังก์ชัน startEdit และ handleUpdate เหมือนเดิม แต่ handleUpdate ต้องเพิ่ม headers: getAuthHeader()) ...
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/${editingUser}`, {
        method: "PUT",
        headers: getAuthHeader(), // ใช้ headers ที่มี Token
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        alert("อัปเดตข้อมูลสำเร็จ");
        setEditingUser(null);
        fetchUsers();
      }
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการอัปเดต");
    }
  };

  if (loading) return <p className="p-10 text-center text-gray-500">กำลังโหลด...</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">จัดการรายชื่อผู้ใช้งาน</h1>
        <button 
          onClick={handleLogout}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm transition"
        >
          ออกจากระบบ
        </button>
      </div>

      {/* ... ส่วนของตาราง และ Modal เหมือนเดิมที่คุณเขียนไว้ ... */}
      {/* (โค้ดตารางและ Modal ของคุณเขียนมาดีอยู่แล้วครับ ใช้งานต่อได้เลย) */}
    </div>
  );
}