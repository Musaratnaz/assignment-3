import React from "react";
import cssStyle from "./service.module.css";

console.log(cssStyle, "CSS-Style");

const ServicePage = () => {
  return (
    <div>
      <h2 className={cssStyle.black}>This is our Service Page</h2>
      <p className={cssStyle.blue}>
        Our team specializes in creating visually stunning and highly functional
        user interfaces. We use the latest technologies like Garnative Ai
        ,Next.js
      </p>
      <ul className={cssStyle.green}>
        <li>
          <b>Ui Web Design</b> - Tailored interfaces that match your brand and
          provide a seamless user experience.
        </li>
        
      </ul>
    </div>
  );
};

export default ServicePage;
