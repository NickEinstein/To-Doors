import React from "react";
import ReactDOM from "react-dom";
// import trustedBy1 from './images/Vector.png'
import trustedBy2 from "images/Rectangle 7.png";
import trustedBy3 from "images/Rectangle 78.png";
// import trustedBy3 from './images/trustedBy-3.png'
// import trustedBy4 from './images/trustedBy-4.png'

const Section7Cards = (prop) => {
  return (
    <div className="m-l-20">
      <div
        className=" position-relative"
        style={{ height: "350px", width: "230px" }}
      >
        <img
          src={prop.images}
          style={{
            height: "350px",
            width: "230px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        />
        <img
          className=" lower"
          src={trustedBy3}
          style={{
            height: "79px",
            width: "230px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        />

        <div className="further-lower w-100 flex ">
          <div className="flex m-b-10" style={{ alignItems: "center" }}>
            <img
              className="m-l-10"
              src={trustedBy2}
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />

            <div className="m-r-10 m-l-10">
              <h3 className="color-w ">Jennifer Miller</h3>
              <p className="no-margin font-12 m-t-20">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section7Cards;
