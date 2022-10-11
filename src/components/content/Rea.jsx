import React from 'react';
import imgRea from "./images/Rea.png"
function Rea() {
  return ( 
    <section>
    <div className='Rea'>
      <img src={imgRea} alt="React" />
    </div>
    <div> 
      <h1>React</h1>
      <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
    </div>
  </section>
   );
}

export default Rea;