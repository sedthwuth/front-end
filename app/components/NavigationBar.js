// NavigationBar.js
'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function NavigationBar() {
  const router = useRouter();
  const [tokenState, setTokenState] = useState(null);

  useEffect(() => {
    // ต้องโหลด Bootstrap JS เพื่อให้ Navbar Toggler ทำงาน
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // สามารถเข้าถึง Bootstrap objects ได้ที่นี่ ถ้าจำเป็น
        })
        .catch((err) => console.error("Failed to load Bootstrap JS", err));
    }

    // อ่าน token จาก localStorage เมื่อ Component ถูก Mount
    // หรือเมื่อ router.asPath เปลี่ยนแปลง (เช่น เมื่อผู้ใช้ Login และถูก Redirect)
    const token = localStorage.getItem("token");
    setTokenState(token); // Set token to state
  }, [router.asPath]); // เพิ่ม router.asPath ใน dependency array

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setTokenState(null);
    router.push("/login"); // Redirect ไปหน้า Login
  };

  return (
    <>
      <style jsx global>{`
        /* Custom styles for NavigationBar */
        .navbar {
          background-color: #343a40 !important; /* Dark background for Navbar */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
          padding: 1rem 1.5rem; /* More vertical padding */
        }

        .navbar-brand {
          font-weight: 700; /* Bolder brand text */
          font-size: 1.5rem; /* Larger brand text */
          color: #ffffff !important; /* White color for brand */
          transition: color 0.3s ease;
        }
        .navbar-brand:hover {
          color: #e9ecef !important; /* Slightly lighter on hover */
        }
        .navbar-brand img {
          margin-right: 0.75rem; /* Spacing between logo and text */
        }

        .navbar-nav .nav-link {
          color: #dee2e6 !important; /* Light grey for nav links */
          font-weight: 500;
          margin-right: 1.2rem; /* Spacing between nav items */
          position: relative;
          transition: color 0.3s ease, transform 0.2s ease;
        }
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #ffffff !important; /* White on hover/active */
          transform: translateY(-2px);
        }
        /* Underline effect for nav links */
        .navbar-nav .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #007bff; /* Blue underline */
          transition: width 0.3s ease-out;
        }
        .navbar-nav .nav-link:hover::after,
        .navbar-nav .nav-link.active::after {
          width: 100%;
        }

        /* Dropdown specific styles */
        .navbar-nav .dropdown-menu {
          background-color: #495057; /* Darker background for dropdown */
          border-radius: 8px;
          border: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        .navbar-nav .dropdown-item {
          color: #dee2e6;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .navbar-nav .dropdown-item:hover {
          background-color: #6c757d; /* Lighter grey on hover */
          color: #ffffff;
          border-radius: 5px;
        }

        /* Buttons in Navbar */
        .navbar .btn {
          font-weight: 600;
          border-radius: 8px; /* Rounded buttons */
          padding: 0.5rem 1.2rem;
          margin-left: 0.5rem; /* Spacing between buttons */
          transition: all 0.3s ease-in-out;
        }
        .navbar .btn-outline-primary {
          border-color: #007bff;
          color: #007bff;
        }
        .navbar .btn-outline-primary:hover {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 3px 10px rgba(0, 123, 255, 0.3);
        }
        .navbar .btn-outline-danger {
          border-color: #dc3545;
          color: #dc3545;
        }
        .navbar .btn-outline-danger:hover {
          background-color: #dc3545;
          color: #ffffff;
          box-shadow: 0 3px 10px rgba(220, 53, 69, 0.3);
        }

        /* Responsive adjustments for Navbar Toggler */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: #343a40; /* Dark background for collapsed menu */
            margin-top: 1rem;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.25);
          }
          .navbar-nav .nav-link {
            margin-right: 0; /* Remove horizontal margin */
            padding: 0.75rem 1rem; /* Adjust padding for stacked links */
          }
          .navbar-nav .nav-link::after {
            display: none; /* Hide underline on mobile */
          }
          .navbar-nav .nav-item:last-child .nav-link {
            margin-bottom: 0;
          }
          .navbar .d-flex {
            flex-direction: column; /* Stack buttons on mobile */
            width: 100%;
            margin-top: 1rem;
          }
          .navbar .d-flex .btn {
            width: 100%;
            margin-left: 0 !important;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <nav className="navbar navbar-expand-lg"> {/* Removed bg-body-tertiary as we're using custom bg */}
        <div className="container-fluid">
          <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
            <img src="https://www.educathai.com/storage/posts/Vt2OaB7l6cHXLMh1IKU8CeA9C7yETGd2rsjSXMhN.jpeg" alt="" width={30} height={24} className="d-inline-block align-text-top" />
            เว็บไซต์การเรียนรู้
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/about">เกี่ยวกับเรา</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  บริการของเรา
                </Link>
                {/* Dropdown menu example */}
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/service/web-development">พัฒนาเว็บไซต์</Link></li>
                  <li><Link className="dropdown-item" href="/service/mobile-app">พัฒนา Mobile App</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="/service/consulting">ที่ปรึกษา</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">ติดต่อเรา</Link> {/* Changed href to /contact for consistency */}
              </li>
              {tokenState && ( // แสดงลิงก์ Users List เมื่อล็อกอินอยู่เท่านั้น
                <li className="nav-item">
                    <Link href="/admin/users" className="nav-link">จัดการผู้ใช้</Link>
                </li>
              )}
            </ul>

            <form className="d-flex" role="search">
              {tokenState ? (
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-outline-danger"
                >
                  <i className="bi bi-box-arrow-right me-2"></i> {/* Added margin to icon */}
                  ออกจากระบบ
                </button>
              ) : (
                <Link href="/login" className="btn btn-outline-primary"> {/* Changed to /login for consistency */}
                  <i className="bi bi-box-arrow-in-right me-2"></i> {/* Added margin to icon */}
                  เข้าสู่ระบบ
                </Link>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}