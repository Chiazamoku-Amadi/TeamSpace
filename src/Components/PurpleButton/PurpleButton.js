import React from "react";
import "./PurpleButton.css";
import { FaChevronCircleRight } from "react-icons/fa";

function PurpleButton({ text }) {
  return (
    <>
      <span>
        <button className="purple-btn">
          {text}
          <span>
            <FaChevronCircleRight />
          </span>
        </button>
      </span>
    </>
  );
}

export default PurpleButton;
