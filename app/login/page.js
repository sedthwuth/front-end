"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock } from "lucide-react";
import "./login.css";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      router.push("/users");
    } catch (err) {
      alert(err.message || "เข้าสู่ระบบไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h1 className="login-title">เข้าสู่ระบบ</h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <label>ชื่อผู้ใช้</label>
          <div className="input-group">
            <span className="icon">
              <User size={18} />
            </span>
            <input
              type="text"
              placeholder="ป้อนชื่อผู้ใช้"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <label>รหัสผ่าน</label>
          <div className="input-group">
            <span className="icon">
              <Lock size={18} />
            </span>
            <input
              type="password"
              placeholder="ป้อนรหัสผ่าน"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          {/* Remember */}
          <div className="remember">
            <input
              type="checkbox"
              checked={formData.remember}
              onChange={(e) =>
                setFormData({ ...formData, remember: e.target.checked })
              }
            />
            <span>จดจำฉันไว้</span>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>
        </form>

        <div className="login-footer">
          <span>ลืมรหัสผ่าน?</span>
          <span onClick={() => router.push("/Register")}>
            ลงทะเบียน
          </span>
        </div>
      </div>
    </div>
  );
}
