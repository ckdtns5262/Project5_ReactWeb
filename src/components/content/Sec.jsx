import imgHtml from "../../images/html.png";
import imgCss from "../../images/css.png";
import imgJs from "../../images/js.png";
import imgRea from "../../images/react.png";

function Sec(props) {
  console.log(props) 
  
  // props에 따라 if문 사용한 경우
  let imgName = null;
  
  if(props.h1 === 'HTML') imgName = imgHtml
  else if(props.h1 === 'CSS') imgName = imgCss
  else if(props.h1 === 'JavaScript') imgName = imgJs
  else if(props.h1 === 'React') imgName = imgRea
  
  // props에 따라 object로 구분
  const pContent = {
    "HTML" : "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용.",
    "CSS" : "Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어",
    "JavaScript" : "웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time컴파일 프로그래밍 언어로, 일급 함수를 지원",
    "React" : "사용자 인터페이스를 만들기 위한 JavaScript 라이브러리",
  }

  return (
    <section>
      <div className="Html" />
      <img src={imgName} alt={props.h1} />
      <div>
        <h1>{props.h1}</h1>
        <p>
        {pContent[props.h1]}
        </p>
      </div>
    </section>
    
  );
}

export default Sec;
