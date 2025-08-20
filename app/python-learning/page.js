// app/python-learning/page.js
'use client'; // This component will run on the client side for Bootstrap JS functionality

import React, { useEffect } from 'react';
import Head from 'next/head'; // สำหรับจัดการ title และ meta tags ของหน้า

export default function pythonlearningPage() { // เปลี่ยนชื่อคอมโพเนนต์ให้สอดคล้อง
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
        <title>เรียนรู้ Python และ Bootstrap - [ชื่อเว็บไซต์ของคุณ]</title>
        <meta name="description" content="คู่มือเบื้องต้นสำหรับการเรียนรู้ภาษา Python และการประยุกต์ใช้ในการพัฒนาเว็บไซต์" />
      </Head>

      {/* Global CSS styles for the page, adapted for JSX */}
      <style jsx global>{`'
        body {
            background-color: #c8d38bbd; /* สีพื้นหลังอ่อนๆ */
            font-family: 'Inter', sans-serif; /* ใช้ฟอนต์ Inter เพื่อให้อ่านง่ายขึ้น */
            font-weight: 500; /* ทำให้ตัวอักษรทั่วไปเข้มขึ้น */
        }
        .header-section {
            background-color: #ffffffff; /* สีเหลืองของ Bootstrap (Warning) สำหรับหัวข้อ Python */
            color: #ffffffff; /* สีข้อความเข้ม */
            padding: 40px 0;
            margin-bottom: 30px;
            border-bottom-left-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        .header-section h1, .header-section p {
            color: #dae1e9ff; /* ตั้งค่าสีข้อความสำหรับ Header */
        }
        .content-section {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(224, 220, 220, 1);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #ffc107; /* สีเหลืองของ Bootstrap สำหรับหัวข้อ */
            margin-bottom: 15px;
        }
        pre {
            background-color: #e9ecef; /* สีเทาอ่อนสำหรับบล็อกโค้ด */
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto; /* เปิดใช้งานการเลื่อนแนวนอนสำหรับโค้ดที่ยาว */
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            color: #ffffffff;
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
            color: #ffc107; /* เปลี่ยนเป็นสีเหลืองเพื่อให้เข้ากับธีม Python */
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .highlight-text {
            color: #dc3545; /* สีแดงของ Bootstrap (Danger) สำหรับข้อความเน้น */
            font-weight: bold;
        }
      `}</style>

      {/* Header Section */}
      <header className="header-section text-center">
        <div className="container">
          <h1 className="display-4">เรียนรู้ภาษา Python</h1>
          <p className="lead">
            คู่มือฉบับย่อสำหรับการทำความเข้าใจและเริ่มต้นใช้งานภาษา Python
            เพื่อการเขียนโปรแกรมและการพัฒนาเว็บไซต์
          </p>
        </div>
      </header>

      <div className="container my-5">
        <div className="row g-4">
          {/* Card 1: Python คืออะไร? */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-warning content-section">
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">1. Python คืออะไร?</h5>
                <p className="card-text">
                  Python เป็นภาษาโปรแกรมระดับสูงที่อ่านและเข้าใจง่าย (High-level, Interpreted Language)
                  ได้รับความนิยมอย่างมากในปัจจุบัน เหมาะสำหรับผู้เริ่มต้น และสามารถนำไปประยุกต์ใช้ได้หลากหลายด้าน
                </p>
                <h6>การใช้งานหลัก:</h6>
                <ul>
                  <li>การพัฒนาเว็บ (Web Development - Backend)</li>
                  <li>วิทยาศาสตร์ข้อมูล (Data Science) และ AI/Machine Learning</li>
                  <li>การทำงานอัตโนมัติ (Automation) และ Scripting</li>
                  <li>การพัฒนาเกม และแอปพลิเคชันเดสก์ท็อป</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: ทำไมถึงควรเรียนรู้ Python? */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-info content-section">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">2. ทำไมถึงควรเรียนรู้ Python?</h5>
                <p className="card-text">
                  Python มีข้อดีหลายประการที่ทำให้เป็นภาษาที่น่าสนใจและเป็นที่ต้องการ:
                </p>
                <ul>
                  <li><strong>ง่ายต่อการเรียนรู้</strong>: มีไวยากรณ์ (Syntax) ที่เรียบง่ายและเป็นธรรมชาติ</li>
                  <li><strong>อเนกประสงค์</strong>: ใช้งานได้หลากหลาย ตั้งแต่เว็บไปจนถึง AI</li>
                  <li><strong>ชุมชนขนาดใหญ่</strong>: มีแหล่งความรู้และเครื่องมือมากมาย</li>
                  <li><strong>มีไลบรารีและเฟรมเวิร์กจำนวนมาก</strong>: ช่วยให้ทำงานได้เร็วขึ้น</li>
                  <li><strong>เป็นที่ต้องการในตลาดงาน</strong>: บริษัทหลายแห่งใช้ Python ในโครงการต่างๆ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3: การติดตั้งและเริ่มต้น Python */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-success content-section">
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">3. การติดตั้งและเริ่มต้น Python</h5>
                <p className="card-text">
                  คุณสามารถดาวน์โหลด Python ได้จากเว็บไซต์ทางการ: <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">python.org</a>
                </p>
                <h6>การรันโค้ดเบื้องต้น:</h6>
                <p>เปิด Terminal/Command Prompt แล้วพิมพ์ <code>python</code> หรือ <code>python3</code>:</p>
                <pre><code>{`>>> print("Hello, Python!")
Hello, Python!`}</code></pre>
                <p>หรือบันทึกเป็นไฟล์ <code>.py</code> (เช่น <code>my_script.py</code>) แล้วรันด้วย <code>python my_script.py</code></p>
              </div>
            </div>
          </div>

          {/* Card 4: ตัวแปรและชนิดข้อมูล */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">4. ตัวแปรและชนิดข้อมูล</h5>
                <p className="card-text">Python มีชนิดข้อมูลพื้นฐานหลายประเภท และไม่จำเป็นต้องระบุชนิดข้อมูลเมื่อประกาศตัวแปร</p>
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>ชนิดข้อมูล</th>
                        <th>ตัวอย่าง</th>
                        <th>คำอธิบาย</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><code>int</code></td><td><code>age = 30</code></td><td>จำนวนเต็ม</td></tr>
                      <tr><td><code>float</code></td><td><code>price = 99.99</code></td><td>จำนวนทศนิยม</td></tr>
                      <tr><td><code>str</code></td><td><code>name = "Alice"</code></td><td>ข้อความ</td></tr>
                      <tr><td><code>bool</code></td><td><code>is_valid = True</code></td><td>จริง/เท็จ</td></tr>
                      <tr><td><code>list</code></td><td><code>items = [1, 2, 3]</code></td><td>ลำดับที่เปลี่ยนแปลงได้</td></tr>
                      <tr><td><code>tuple</code></td><td><code>coords = (10, 20)</code></td><td>ลำดับที่ไม่เปลี่ยนแปลง</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: โครงสร้างควบคุมการทำงาน (Control Flow) */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-danger content-section">
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">5. โครงสร้างควบคุมการทำงาน</h5>
                <p className="card-text">
                  Python ใช้การเว้นวรรค (indentation) เพื่อกำหนดบล็อกโค้ด
                </p>
                <h6>คำสั่งเงื่อนไข (`if`, `elif`, `else`):</h6>
                <pre><code>{`score = 85
if score >= 90:
    print("Grade A")
elif score >= 70:
    print("Grade B")
else:
    print("Grade C")`}</code></pre>
                <h6>ลูป (`for`, `while`):</h6>
                <pre><code>{`# For loop
for i in range(3): # 0, 1, 2
    print(i)

# While loop
count = 0
while count < 2:
    print("Looping...")
    count += 1`}</code></pre>
              </div>
            </div>
          </div>

          {/* Card 6: ฟังก์ชัน (Functions) */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-warning content-section">
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">6. ฟังก์ชัน (Functions)</h5>
                <p className="card-text">
                  ฟังก์ชันคือบล็อกของโค้ดที่สามารถนำมาใช้ซ้ำได้ ช่วยให้โค้ดเป็นระเบียบและอ่านง่าย
                </p>
                <pre><code>{`def greet(name):
    return f"สวัสดี, {name}!"

message = greet("ผู้เรียน")
print(message)

def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3) # result จะเป็น 8
print(result)`}</code></pre>
              </div>
            </div>
          </div>
          
          {/* Card 7: Python สำหรับ Web Development (Backend) */}
          <div className="col-md-6 col-lg-6">
            <div className="card h-100 shadow-sm border-info content-section">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">7. Python สำหรับ Web Development (Backend)</h5>
                <p className="card-text">
                  Python เป็นภาษาหลักสำหรับพัฒนา Backend ของเว็บไซต์ โดยมี Framework ยอดนิยมเช่น:
                </p>
                <ul>
                  <li><strong>Django</strong>: เฟรมเวิร์กขนาดใหญ่ที่มาพร้อมทุกอย่าง ( batteries-included) เหมาะสำหรับโปรเจกต์ขนาดใหญ่</li>
                  <li><strong>Flask</strong>: เฟรมเวิร์กขนาดเล็ก (micro-framework) ที่ยืดหยุ่น เหมาะสำหรับโปรเจกต์ขนาดเล็กถึงปานกลาง หรือ API</li>
                </ul>
                <p>
                  <span className="highlight-text">บทบาทของ Python (Backend)</span> คือการจัดการข้อมูล,
                  การเชื่อมต่อฐานข้อมูล, การประมวลผล Logic ทางธุรกิจ, และการส่งข้อมูล (เช่น JSON)
                  หรือหน้า HTML ที่สร้างขึ้นแบบไดนามิกไปยัง Frontend
                </p>
              </div>
            </div>
          </div>

          {/* Card 8: Python และ Bootstrap ทำงานร่วมกันอย่างไร? */}
          <div className="col-12 mt-4"> {/* Full width for this section */}
            <div className="card h-100 shadow-sm border-primary content-section">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">8. Python และ Bootstrap ทำงานร่วมกันอย่างไร?</h5>
                <p className="card-text">
                  <span className="highlight-text">Python เป็นภาษาฝั่ง Server (Backend)</span> ในขณะที่
                  <span className="highlight-text">Bootstrap เป็นไลบรารี CSS/JS ฝั่ง Client (Frontend)</span>
                  พวกมันทำงานเสริมกัน:
                </p>
                <ol>
                  <li>ผู้ใช้เข้าถึงหน้าเว็บ (ที่ใช้ Bootstrap ตกแต่ง)</li>
                  <li>เบราว์เซอร์ส่งคำขอไปยัง Server ที่รันด้วย Python (เช่น Django/Flask)</li>
                  <li>Python ประมวลผลคำขอ (เช่น ดึงข้อมูลจากฐานข้อมูล, ทำการคำนวณ)</li>
                  <li>Python ส่งข้อมูลหรือสร้างหน้า HTML แบบไดนามิก (โดยอาจใช้ Template Engine เพื่อใส่ข้อมูลลงในโครงสร้าง HTML ที่มีคลาส Bootstrap)</li>
                  <li>หน้า HTML ที่มี Bootstrap จะถูกส่งกลับไปที่เบราว์เซอร์ เพื่อแสดงผลเป็นหน้าเว็บที่สวยงามและ Responsive</li>
                </ol>
                <p className="highlight-text">
                  สรุปคือ Python จัดการ "สมอง" และ "ข้อมูล" ของเว็บไซต์ ส่วน Bootstrap จัดการ "รูปลักษณ์" และ "การนำเสนอ" ให้กับผู้ใช้ครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}