import React from "react";

function ImageSlideshow(props) {
  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 5</div>
          <img src="#" alt="Placeholder" style={{ width: "100%" }} />

          <div className="numbertext">2 / 5</div>
          <img src="#" alt="Placeholder" style={{ width: "100%" }} />

          <div className="numbertext">3 / 5</div>
          <img src="#" alt="Placeholder" style={{ width: "100%" }} />

          <div className="numbertext">4 / 5</div>
          <img src="#" alt="Placeholder" style={{ width: "100%" }} />

          <div className="numbertext">5 / 5</div>
          <img src="#" alt="Placeholder" style={{ width: "100%" }} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <span className="dot" onclick="currentSlide(1)" />
          <span className="dot" onclick="currentSlide(2)" />
          <span className="dot" onclick="currentSlide(3)" />
          <span className="dot" onclick="currentSlide(4)" />
          <span className="dot" onclick="currentSlide(5)" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlideshow;
