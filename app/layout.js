// app/layout.js
'use client'; // ต้องมี 'use client' เนื่องจากเราจะใช้ hook 'usePathname'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // สำหรับ Bootstrap Icons
// นำเข้า Font ที่คุณใช้
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Global CSS ของโปรเจกต์ (ถ้ามี)

// นำเข้าคอมโพเนนต์ต่างๆ
import NavigationBar from "./components/NavigationBar"; // ตรวจสอบพาธให้ถูกต้อง
// import Footer from "./components/Footer"; // ลบการนำเข้า Footer ออกไป

// นำเข้า usePathname สำหรับการตรวจสอบเส้นทาง
import { usePathname } from 'next/navigation'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // ดึง path ปัจจุบัน

  // กำหนด path ที่ไม่ต้องการให้แสดง Navigation Bar
  // เพิ่ม path ของหน้า Login, Register, Forgot Password, Sign In ที่นี่
  const noNavbarPaths = ['/login', '/signin', '/forgot-password', '/register'];

  // ตรวจสอบว่า path ปัจจุบันอยู่ในรายการที่ซ่อน Navbar หรือไม่
  const shouldShowNavbar = !noNavbarPaths.includes(pathname);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased d-flex flex-column min-vh-100`}>
        {/* แสดง NavigationBar ก็ต่อเมื่อ shouldShowNavbar เป็น true */}
        {shouldShowNavbar && <NavigationBar />}
        
        {children} {/* นี่คือส่วนที่หน้า page.js ของคุณจะถูกเรนเดอร์ */}
        
        {/* ลบ Footer ออกไป */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}