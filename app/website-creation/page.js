// app/website-creation/page.js
'use client'; // This component will run on the client side for Bootstrap JS functionality

import React, { useEffect } from 'react';
import Head from 'next/head'; // สำหรับจัดการ title และ meta tags ของหน้า

export default function websitecreationlearningPage() {
  // useEffect สำหรับโหลด Bootstrap JS เมื่อ Component ถูก Mount
  // นี่เป็นสิ่งจำเป็นสำหรับ Bootstrap components ที่มี JavaScript (เช่น Collapse, Dropdown, Modal)
  useEffect(() => {
    // ตรวจสอบว่า window และ document มีอยู่ (สำหรับ Next.js client-side rendering)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // สามารถเข้าถึง Bootstrap objects ได้ที่นี่ ถ้าจำเป็น
        })
        .catch((err) => console.error("Failed to load Bootstrap JS", err));
    }
  }, []);

  return (
    <>
      <Head>
        <title>เรียนรู้การสร้างเว็บไซต์ - [ชื่อเว็บไซต์ของคุณ]</title>
        <meta name="description" content="คู่มือเบื้องต้นสำหรับการเรียนรู้ขั้นตอนการสร้างเว็บไซต์ ตั้งแต่การวางแผน การออกแบบ การพัฒนา ไปจนถึงการดูแล" />
      </Head>

      {/* Global CSS styles for the page, adapted for JSX */}
      <style jsx global>{`
        body {
            background-color: #000000ff; /* สีพื้นหลังอ่อนๆ */
            font-family: 'Inter', sans-serif; /* ใช้ฟอนต์ Inter เพื่อให้อ่านง่ายขึ้น */
            font-weight: 500; /* ทำให้ตัวอักษรทั่วไปเข้มขึ้น */
        }
        .header-section {
            background-color: #6f42c1; /* Bootstrap purple */
            color: white;
            padding: 40px 0;
            margin-bottom: 30px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        .content-section {
            background-color: #ffffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #6f42c1; /* Bootstrap purple for headings */
            margin-bottom: 15px;
        }
        pre {
            background-color: #000000ff; /* สีเทาอ่อนสำหรับบล็อกโค้ด */
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto; /* เปิดใช้งานการเลื่อนแนวนอนสำหรับโค้ดที่ยาว */
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            color: #333;
        }
        table {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            border-collapse: collapse;
        }
        th, td {
            padding: 12px;
            border: 1px solid #000000ff; /* ขอบตารางสีอ่อน */
            text-align: left;
        }
        th {
            background-color: #ffffffff; /* พื้นหลังสีเข้มเล็กน้อยสำหรับส่วนหัวตาราง */
            font-weight: bold;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        a {
            color: #000000ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .highlight-text {
            color: #000000ff; /* Bootstrap orange (Warning) for emphasized text */
            font-weight: bold;
        }
      `}</style>

      {/* Header Section */}
      <header className="header-section text-center">
        <div className="container">
          <h1 className="display-4">เรียนรู้เกี่ยวกับการสร้างเว็บไซต์</h1>
          <p className="lead">
            คู่มือฉบับย่อสำหรับทำความเข้าใจกระบวนการและองค์ประกอบสำคัญในการสร้างเว็บไซต์
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1: การสร้างเว็บไซต์คืออะไร? */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">1. การสร้างเว็บไซต์คืออะไร?</h5>
                <p className="card-text">
                  การสร้างเว็บไซต์คือกระบวนการออกแบบ, พัฒนา และบำรุงรักษาพื้นที่ออนไลน์
                  เพื่อให้ข้อมูล, บริการ, หรือสินค้าสามารถเข้าถึงได้ผ่านอินเทอร์เน็ต
                  เป็นการผสมผสานทักษะด้านการออกแบบกราฟิก, การเขียนโปรแกรม และการจัดการเนื้อหา
                </p>
                <h6>องค์ประกอบหลัก:</h6>
                <ul>
                  <li><strong>Frontend</strong>: ส่วนที่ผู้ใช้มองเห็นและโต้ตอบด้วย</li>
                  <li><strong>Backend</strong>: ส่วนการทำงานเบื้องหลัง เช่น ฐานข้อมูล, เซิร์ฟเวอร์</li>
                  <li><strong>Hosting</strong>: พื้นที่สำหรับเก็บไฟล์เว็บไซต์</li>
                  <li><strong>Domain Name</strong>: ชื่อที่ใช้ระบุเว็บไซต์บนอินเทอร์เน็ต</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: ขั้นตอนสำคัญในการสร้างเว็บไซต์ */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-success content-section">
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">2. ขั้นตอนสำคัญ</h5>
                <p className="card-text">
                  การสร้างเว็บไซต์ที่ดีต้องผ่านกระบวนการที่เป็นระบบ นี่คือขั้นตอนหลัก:
                </p>
                <ul>
                  <li><strong>การวางแผน (Planning)</strong>: กำหนดเป้าหมาย, กลุ่มเป้าหมาย, โครงสร้างเนื้อหา</li>
                  <li><strong>การออกแบบ (Design)</strong>: สร้าง Wireframe, Mockup, เลือกโทนสี, UI/UX</li>
                  <li><strong>การพัฒนา (Development)</strong>: เขียนโค้ดเพื่อสร้างเว็บไซต์</li>
                  <li><strong>การทดสอบ (Testing)</strong>: ตรวจสอบฟังก์ชัน, การแสดงผลบนอุปกรณ์ต่างๆ</li>
                  <li><strong>การนำขึ้นระบบ (Deployment)</strong>: ทำให้เว็บไซต์ออนไลน์</li>
                  <li><strong>การบำรุงรักษา (Maintenance)</strong>: อัปเดต, แก้ไข, เพิ่มประสิทธิภาพ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: ภาษาและเทคโนโลยีหลัก */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-warning content-section">
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">3. ภาษาและเทคโนโลยีหลัก</h5>
                <p className="card-text">
                  ภาษาและเครื่องมือพื้นฐานที่คุณจะต้องเรียนรู้:
                </p>
                <ul>
                  <li><strong>HTML</strong>: (HyperText Markup Language) โครงสร้างเนื้อหา</li>
                  <li><strong>CSS</strong>: (Cascading Style Sheets) ตกแต่งและจัดรูปแบบ</li>
                  <li><strong>JavaScript</strong>: เพิ่มลูกเล่นและฟังก์ชันการโต้ตอบ</li>
                  <li><strong>Frameworks/Libraries (Frontend)</strong>: React, Next.js, Vue, Angular (ช่วยให้พัฒนาได้เร็วขึ้น)</li>
                  <li><strong>Frameworks (Backend)</strong>: Node.js (Express), Python (Django/Flask), PHP (Laravel)</li>
                  <li><strong>Databases</strong>: SQL (MySQL, PostgreSQL), NoSQL (MongoDB)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 4: Frontend Development */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-info content-section">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">4. Frontend Development</h5>
                <p className="card-text">
                  คือส่วนที่ผู้ใช้งานมองเห็นและโต้ตอบด้วยโดยตรง (Client-side)
                  เน้นประสบการณ์ผู้ใช้ (UX) และส่วนติดต่อผู้ใช้ (UI)
                </p>
                <h6>เครื่องมือและเทคนิค:</h6>
                <ul>
                  <li>**HTML**: กำหนดโครงสร้าง (headings, paragraphs, images, links)</li>
                  <li>**CSS**: จัดรูปแบบ (สี, ฟอนต์, ขนาด, การจัดวาง)</li>
                  <li>**Bootstrap**: CSS Framework ยอดนิยมเพื่อความรวดเร็วและ Responsive</li>
                  <li>**JavaScript**: เพิ่มการโต้ตอบ (animations, form validations, dynamic content)</li>
                  <li>**Responsive Design**: ทำให้เว็บไซต์แสดงผลได้ดีบนทุกอุปกรณ์</li>
                </ul>
                <p className="highlight-text">
                  เป้าหมายคือสร้างหน้าเว็บที่สวยงาม, ใช้งานง่าย และตอบสนองต่อทุกขนาดหน้าจอ
                </p>
              </div>
            </div>
          </div>

          {/* Card 5: Backend Development */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-danger content-section">
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">5. Backend Development</h5>
                <p className="card-text">
                  คือส่วนการทำงานเบื้องหลังเว็บไซต์ (Server-side) ที่ผู้ใช้ไม่เห็นโดยตรง
                  แต่มีความสำคัญต่อฟังก์ชันการทำงานหลัก เช่น การจัดการข้อมูล
                </p>
                <h6>บทบาทหลัก:</h6>
                <ul>
                  <li>**การจัดการฐานข้อมูล**: เก็บ, ดึง, แก้ไข, ลบข้อมูล</li>
                  <li>**API (Application Programming Interface)**: เป็นช่องทางให้ Frontend สื่อสารกับ Backend</li>
                  <li>**การจัดการผู้ใช้**: ลงทะเบียน, เข้าสู่ระบบ, การตรวจสอบสิทธิ์</li>
                  <li>**Logic ทางธุรกิจ**: การคำนวณ, การประมวลผลคำสั่งซื้อ, การสร้างรายงาน</li>
                </ul>
                <p className="highlight-text">
                  ภาษาและ Frameworks ที่พบบ่อย: Python (Django, Flask), Node.js (Express), PHP (Laravel), Ruby (Rails), Java (Spring)
                </p>
              </div>
            </div>
          </div>

          {/* Card 6: การทำให้เว็บไซต์ออนไลน์ (Deployment) */}
          <div className="col-12 mt-4">
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">6. การทำให้เว็บไซต์ออนไลน์ (Deployment)</h5>
                <p className="card-text">
                  หลังจากพัฒนาเสร็จสิ้น เว็บไซต์ต้องถูกนำขึ้นไปอยู่บน Server
                  เพื่อให้ทุกคนสามารถเข้าถึงได้ผ่านอินเทอร์เน็ต
                </p>
                <h6>สิ่งที่คุณต้องมี:</h6>
                <ul>
                  <li><strong>Web Hosting</strong>: บริการที่เก็บไฟล์เว็บไซต์ของคุณ (เช่น Shared Hosting, VPS, Cloud Hosting)</li>
                  <li><strong>Domain Name</strong>: ชื่อที่อยู่ของเว็บไซต์ของคุณ (เช่น mywebsite.com)</li>
                  <li><strong>DNS (Domain Name System)</strong>: ระบบที่แปลงชื่อโดเมนเป็น IP Address</li>
                </ul>
                <p className="highlight-text">
                  แพลตฟอร์ม Cloud Hosting ยอดนิยม: Vercel (สำหรับ Next.js), Netlify, AWS, Google Cloud, Heroku
                </p>
              </div>
            </div>
          </div>
        </div> {/* End of row g-4 */}

        {/* เคล็ดลับเพิ่มเติม */}
        <div className="mt-5 content-section border-secondary">
    
          <h4 className="card-title text-primary fw-bold">💡 เคล็ดลับเพิ่มเติมสำหรับการสร้างเว็บไซต์</h4>
          <ul>
            <li>**Mobile-First Design**: ออกแบบสำหรับมือถือก่อน แล้วค่อยขยายไปยังหน้าจอที่ใหญ่ขึ้น</li>
            <li>**ความเร็วในการโหลด**: ทำให้เว็บไซต์โหลดเร็วที่สุดเท่าที่จะทำได้</li>
            <li>**SEO Friendly**: ทำให้ Search Engine ค้นหาเว็บไซต์ของคุณเจอได้ง่าย</li>
            <li>**Security**: ปกป้องข้อมูลผู้ใช้และเว็บไซต์จากการโจมตี</li>
            <li>**Accessibility**: ทำให้เว็บไซต์ใช้งานง่ายสำหรับทุกคน รวมถึงผู้พิการ</li>
            <li>**Content is King**: เนื้อหาที่มีคุณภาพคือหัวใจสำคัญของเว็บไซต์</li>
          
          </ul>
        </div>
      </div>
    </>
  );
}
