import Carousel from "../app/components/Carousel.js";

import Footer from "../app/components/Footer.js";

export default function () {
  return (
    <>
      <Carousel>
        <h1 className="font-bold text-blue-300 text-center">/</h1>
      </Carousel>
      <div className="container-fluid py-5 mx-auto">
        <div className="row">
          <div className="col-md-4">
            <div className="card"><br></br>
              <img src="/img/1.png" className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">การเขียนเว็บไฃต์เบื้องต้น</h5>
                <p className="card-text">เรียนรู้วิธีการในการเขียนเว็บไชต์เบื้องต้น</p>
                <a href="./website-creation" className="btn btn-primary">ดูรายละเอียด</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card"><br></br>
              <img src="/img/css2.png" className="card-img-top" alt=""></img>
              <div className="card-body"> 
                <h5 className="card-title">เรียนรู้การใช้ css </h5>
                <p className="card-text">เรียนรู้ในการ css ในการตกเเต่งเว็บไชต์</p>
                <a href="./css-learning" className="btn btn-primary">ดูรายละเอียด</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card"><br></br>
              <img src="/img/ดีไซน์ที่ยังไม่ได้ตั้งชื่อ.png" className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">การใช้ภาษา python</h5>
                <p className="card-text">เรียนรู้ในการใฃ้ภาษา python เบื้องต้น</p>
                <a href="./python-learning" className="btn btn-primary">ดูรายละเอียด</a>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
}

