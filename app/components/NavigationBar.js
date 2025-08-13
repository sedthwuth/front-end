// NavigationBar.js
'use client';
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <Link href="/" className="navbar-brand">
          {/* คุณสามารถใส่โลโก้หรือชื่อเว็บไซต์ที่นี่ */}
        </Link>

        {/* Navbar Toggler สำหรับ Mobile */}
        <button 
          className="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Collapse Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">เกี่ยวกับ</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link">บริการ</Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact" className="nav-link">ติดต่อเรา</Link>
            </li>
          </ul>

          {/* ปุ่ม Login และ Register */}
          <div className="d-flex">
            {/* ปุ่มเข้าสู่ระบบ */}
            <Link href="/login" className="btn btn-outline-light me-2">
              เข้าสู่ระบบ
            </Link>
            {/* ปุ่มลงทะเบียน */}
            <Link href="/Register" className="btn btn-primary">
              ลงทะเบียน
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}