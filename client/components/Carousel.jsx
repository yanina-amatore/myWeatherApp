import React from 'react'

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-mdb-interval="900">
          <img src="../img/undefined.png" alt="undefined weather" />
        </div>
        <div className="carousel-item" data-mdb-interval="900">
          <img src="../img/01d.png" alt="sunny weather" />
        </div>

        <div className="carousel-item" data-mdb-interval="900">
          <img src="../img/03d.png" alt="partially sunny" />
        </div>
        <div className="carousel-item" data-mdb-interval="900">
          <img src="../img/04d.png" alt="cloudy wetaher" />
        </div>
        <div className="carousel-item" data-mdb-interval="900">
          <img src="../img/09d.png" alt="rainy weather" />
        </div>
        <div className="carousel-item" data-mdb-interval="900">
          <img src="../img/11d.png" alt="stormy weather" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
