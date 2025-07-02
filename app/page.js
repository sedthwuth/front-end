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
          <div className="col">
            <div className="card" style={{ width: '20rem' }}>
              <img src="/img/(1).png" className="card-img-top" alt="(weight 90 px) (height 350 px)"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col"><br></br>
            <div className="card" style={{ width: '20rem' }}>
              <img src="/img/(2).jpg" className="card-img-top" alt="{weight 100px }{height 350 px}"></img>
              <div className="card-body"> 
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col"><br></br>
            <div className="card" style={{ width: '20rem' }}>
              <img src="/img/(3).jpg" className="card-img-top" alt="{eight 100px} {height 350[x]}"></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

