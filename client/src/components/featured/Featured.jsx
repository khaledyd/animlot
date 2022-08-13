import React from "react";
import "./featured.css";

export default function Featured(props) {
  return (
    <div className="Featured">
      <div className="Featured-card">
        <div className="Featured-card-elemts">
          <div className="Featured-card-img-time">
            <img className="Featured-card-img" src={props.fimgs} alt="" />
            <div className="card-time">14:20</div>
          </div>

          <div className="Featured-card-items">
            <p className="Featured-card-title">what is life ?</p>
            <div className="views">
              <p className="views-number">10k</p>
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
