"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Loader2,
  UserPlus,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      return setError("รหัสผ่านไม่ตรงกัน");
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      router.push("/login");
    } catch (err) {
      setError(err.message || "ไม่สามารถสมัครสมาชิกได้");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top,_#1e3a8a,_#020617)] px-4">
      <div className="relative w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
        <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 text-white">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg mb-4">
              <UserPlus size={30} />
            </div>
            <h1 className="text-3xl font-bold tracking-wide">Create Account</h1>
            <p className="text-gray-400 text-sm mt-2">
              สมัครสมาชิกเพื่อเข้าใช้งานระบบ
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 bg-red-500/20 border border-red-500/30 text-red-300 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Input Template */}
            {[
              {
                label: "Username",
                icon: <User size={18} />,
                type: "text",
                value: formData.username,
                placeholder: "ชื่อผู้ใช้",
                onChange: (v) => setFormData({ ...formData, username: v }),
              },
              {
                label: "Email",
                icon: <Mail size={18} />,
                type: "email",
                value: formData.email,
                placeholder: "example@email.com",
                onChange: (v) => setFormData({ ...formData, email: v }),
              },
            ].map((field, i) => (
              <div key={i}>
                <label className="text-sm text-gray-300">{field.label}</label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {field.icon}
                  </span>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder={field.placeholder}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
              </div>
            ))}

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="อย่างน้อย 6 ตัวอักษร"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm */}
            <div>
              <label className="text-sm text-gray-300">Confirm Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  placeholder="ยืนยันรหัสผ่าน"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition-all py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
            </button>

            {/* Link */}
            <p className="text-center text-sm text-gray-400 mt-4">
              มีบัญชีอยู่แล้ว?{" "}
              <span
                onClick={() => router.push("/login")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                เข้าสู่ระบบ
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

