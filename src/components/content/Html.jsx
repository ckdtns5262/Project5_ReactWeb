import React from "react";
import imgHtml from "./images/html.png";

function Html() {
  return (
    <section>
      <div className="Html" />
      <img src={imgHtml} alt="HTML" />
      <div>
        <h1>HTML</h1>
        <p>
          HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성
          요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용
        </p>
      </div>
    </section>
  );
}

export default Html;
