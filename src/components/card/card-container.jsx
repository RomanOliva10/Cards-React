import React, { useState } from "react";
import "./card.css";
import Card from "./card";
import loremMocks from "./mocks/lorem_mocks";
import Colors from "./mocks/color_mocks";

export default function CardContainer() {
  const [text, setText] = useState(loremMocks);
  const [color, setColor] = useState(Colors);
  return (
    <div className="card-container">
      {text.map((texts, index) => (
        <Card
          key={index}
          text={texts}
          setT={setText}
          setC={setColor}
          color={color[index]}
        />
      ))}
    </div>
  );
}
