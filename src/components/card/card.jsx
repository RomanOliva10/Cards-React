import React from "react";
import "./card.css";

export default function Card({ text, color, setT, setC }) {
  const fnDelete = (txt) => {
    setT((cache) => cache.filter((el) => el !== txt));
    setC((cache) => cache.filter((el) => el !== color));
  };
  return (
    <div className="card" style={{ background: color }}>
      <i
        onClick={() => {
          fnDelete(text);
        }}
        className="fas fa-times"
      ></i>
      <i className="fas fa-bolt"></i>
      <p>{text}</p>
      <a>
        Appply Now<i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}
