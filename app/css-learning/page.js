// app/css-learning/page.js
'use client'; // This component will run on the client side for Bootstrap JS functionality

import React, { useEffect } from 'react';
import Head from 'next/head'; // สำหรับจัดการ title และ meta tags ของหน้า

export default function CssLearningPage() {
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
        <title>เรียนรู้ CSS และ Bootstrap - [ชื่อเว็บไซต์ของคุณ]</title>
        <meta name="description" content="คู่มือเบื้องต้นสำหรับการเรียนรู้ CSS และการใช้ Bootstrap เพื่อสร้างเว็บไซต์ที่สวยงามและตอบสนอง" />
      </Head>

      {/* Global CSS styles for the page, adapted for JSX */}
      <style jsx global>{`
        body {
            background-color: #000000ff; /* สีพื้นหลังอ่อนๆ */
            font-family: 'Inter', sans-serif; /* ใช้ฟอนต์ Inter เพื่อให้อ่านง่ายขึ้น */
            font-weight: 500; /* ทำให้ตัวอักษรทั่วไปเข้มขึ้น */
        }
        .header-section {
            background-color: #0d6efd; /* สีน้ำเงินหลักของ Bootstrap */
            color: white;
            padding: 40px 0;
            margin-bottom: 30px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        .content-section {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #0d6efd; /* สีน้ำเงินหลักของ Bootstrap สำหรับหัวข้อ */
            margin-bottom: 15px;
        }
        pre {
            background-color: #e9ecef; /* สีเทาอ่อนสำหรับบล็อกโค้ด */
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
            border: 1px solid #dee2e6; /* ขอบตารางสีอ่อน */
            text-align: left;
        }
        th {
            background-color: #e2e6ea; /* พื้นหลังสีเข้มเล็กน้อยสำหรับส่วนหัวตาราง */
            font-weight: bold;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        a {
            color: #0d6efd;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .highlight-text {
            color: #198754; /* สีเขียว (success) ของ Bootstrap */
            font-weight: bold;
        }
      `}</style>

      {/* Header Section */}
      <header className="header-section text-center">
        <div className="container">
          <h1 className="display-4">เรียนรู้ CSS และ Bootstrap</h1>
          <p className="lead">
            คู่มือฉบับย่อสำหรับการทำความเข้าใจและเริ่มต้นใช้งาน Cascading Style Sheets (CSS)
            รวมถึงเฟรมเวิร์กยอดนิยมอย่าง Bootstrap
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1: CSS คืออะไร? */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">1. CSS คืออะไร?</h5>
                <p className="card-text">
                  CSS (Cascading Style Sheets) คือภาษาที่ใช้สำหรับกำหนดรูปแบบการแสดงผลของเอกสาร HTML
                  ช่วยให้คุณสามารถควบคุมรูปลักษณ์ของเว็บไซต์ได้อย่างละเอียด เช่น สี, ฟอนต์,
                  ขนาดตัวอักษร, การจัดตำแหน่ง, ระยะห่าง, และอื่นๆ
                  การแยก CSS ออกจาก HTML ทำให้โค้ดสะอาดขึ้นและจัดการได้ง่าย
                </p>
                <h6>ตัวอย่างการเขียน CSS พื้นฐาน:</h6>
                <pre><code>{`body {
    background-color: #f0f8ff;
    font-family: 'Arial', sans-serif;
}
h1 {
    color: blue;
    text-align: center;
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* Card 2: หลักการพื้นฐานของ CSS */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-success content-section">
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">2. หลักการพื้นฐานของ CSS</h5>
                <p className="card-text">
                  CSS ทำงานบนพื้นฐานของกฎ (Rule) ที่ประกอบด้วย Selector, Property และ Value
                  เพื่อเลือกองค์ประกอบ HTML และกำหนดคุณสมบัติให้กับมัน
                </p>
                <ul>
                  <li><strong>Selector (ตัวเลือก)</strong>: ระบุองค์ประกอบ HTML ที่ต้องการปรับแต่ง (เช่น <code>p</code>, <code>#id-name</code>, <code>.class-name</code>)</li>
                  <li><strong>Property (คุณสมบัติ)</strong>: สิ่งที่ต้องการปรับแต่ง (เช่น <code>color</code>, <code>font-size</code>, <code>margin</code>)</li>
                  <li><strong>Value (ค่า)</strong>: ค่าที่คุณกำหนดให้กับคุณสมบัตินั้นๆ (เช่น <code>blue</code>, <code>16px</code>, <code>10px</code>)</li>
                </ul>
                <p className="highlight-text">
                  CSS ยังมีหลักการสำคัญ เช่น Cascade (การเรียงลำดับความสำคัญ), Specificity (ความเฉพาะเจาะจง)
                  และการ Inheritance (การสืบทอดคุณสมบัติ)
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: วิธีการนำ CSS ไปใช้ */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-warning content-section">
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">3. วิธีการนำ CSS ไปใช้ใน HTML</h5>
                <p className="card-text">มี 3 วิธีหลักในการเชื่อมโยง CSS กับเอกสาร HTML:</p>
                <ol>
                  <li><strong>External Stylesheets</strong>: (แนะนำ) เขียน CSS ในไฟล์ <code>.css</code> แยกต่างหาก แล้วลิงก์ใน <code>&lt;head&gt;</code> เช่น <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></li>
                  <li><strong>Internal Stylesheets</strong>: เขียน CSS ในแท็ก <code>&lt;style&gt;</code> ภายในส่วน <code>&lt;head&gt;</code> ของ HTML</li>
                  <li><strong>Inline Styles</strong>: เขียน CSS โดยตรงในแอตทริบิวต์ <code>style</code> ของแท็ก HTML (ไม่แนะนำสำหรับโค้ดจำนวนมาก)</li>
                </ol>
                <h6>ตัวอย่าง Inline Style:</h6>
                <pre><code>{`<p style="color: red; font-size: 18px;">ข้อความสีแดง</p>`}</code></pre>
              </div>
            </div>
          </div>

          {/* Card 4: CSS Properties ที่พบบ่อย */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-info content-section">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">4. CSS Properties ที่พบบ่อย</h5>
                <p className="card-text">นี่คือคุณสมบัติ CSS พื้นฐานที่คุณควรรู้:</p>
                <ul>
                  <li><strong>สีและพื้นหลัง</strong>: <code>color</code>, <code>background-color</code>, <code>background-image</code></li>
                  <li><strong>ตัวอักษร</strong>: <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>text-align</code></li>
                  <li><strong>โมเดลกล่อง (Box Model)</strong>: <code>width</code>, <code>height</code>, <code>padding</code>, <code>margin</code>, <code>border</code></li>
                  <li><strong>การจัดวาง (Layout)</strong>: <code>display</code> (เช่น <code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>), <code>position</code></li>
                  <li><strong>Transitions & Animations</strong>: สำหรับการสร้างการเคลื่อนไหวที่ราบรื่น</li>
                </ul>
                <h6>ตัวอย่าง Box Model:</h6>
                <pre><code>{`.box {
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 20px;
    border: 1px solid black;
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* Card 5: Responsive Design เบื้องต้น */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-danger content-section">
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">5. Responsive Design เบื้องต้น</h5>
                <p className="card-text">
                  Responsive Design คือการออกแบบเว็บไซต์ที่สามารถปรับเปลี่ยนหน้าตา
                  และการจัดวางได้อย่างเหมาะสมกับขนาดหน้าจอของอุปกรณ์ต่างๆ (มือถือ, แท็บเล็ต, เดสก์ท็อป)
                </p>
                <p>
                  หลักการสำคัญคือการใช้ **Media Queries** ใน CSS เพื่อกำหนดสไตล์เฉพาะสำหรับขนาดหน้าจอที่แตกต่างกัน
                </p>
                <h6>ตัวอย่าง Media Query:</h6>
                <pre><code>{`/* สไตล์สำหรับหน้าจอขนาดเล็กกว่า 600px */
@media screen and (max-width: 600px) {
    body {
        font-size: 14px;
    }
    .container {
        padding: 10px;
    }
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* Card 6: Bootstrap เพื่อ CSS ที่ง่ายขึ้น */}
          <div className="col-12 mt-4"> {/* Full width for this section */}
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">6. Bootstrap เพื่อ CSS ที่ง่ายขึ้น</h5>
                <p className="card-text">
                  Bootstrap คือ **CSS Framework** ที่ได้รับความนิยมมากที่สุด
                  มันมีชุดของคลาส CSS และส่วนประกอบ JavaScript ที่สร้างไว้ล่วงหน้า
                  ช่วยให้คุณสามารถสร้างเว็บไซต์ที่สวยงามและ Responsive ได้อย่างรวดเร็ว
                  โดยไม่ต้องเขียน CSS เองทั้งหมด
                </p>
                <h6>ตัวอย่างการใช้คลาส Bootstrap:</h6>
                <pre><code>{`<!-- ปุ่มสีน้ำเงินขนาดใหญ่ -->
<button className="btn btn-primary btn-lg">คลิกฉัน</button>

<!-- Grid layout -->
<div className="row">
    <div className="col-md-6">เนื้อหาฝั่งซ้าย</div>
    <div className="col-md-6">เนื้อหาฝั่งขวา</div>
</div>

<!-- Card Component -->
<div className="card">
    <div className="card-body">นี่คือเนื้อหาในการ์ด</div>
</div>`}</code></pre>
                <p className="highlight-text">
                  Bootstrap ช่วยประหยัดเวลา, ลดความซับซ้อนในการเขียน CSS
                  และทำให้เว็บไซต์ของคุณดูเป็นมืออาชีพและเข้ากันได้กับทุกอุปกรณ์
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
