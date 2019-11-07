import React from 'react'; // React 를 불러와야 쓸 수 있다.
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <>
      <h1>React 스타트!!!</h1>
      <h2>동작 OK</h2>
      <h3>ㅋㅋggㅋㅋ</h3>
    </>
  );
}
//리액트 바벨(탑재)?
export default App;
// index.js에서 App()을 호출함 => App() 호출 받은것이 return 하여 export로 App()을 내보내준다. => src/index.js APP을 받고  => public/index.html 

// JSX코드, XML 파일. 바벨을 통해서 자바스크립트로 바꿔준다. 
// https://babeljs.io/ try it out 할 수 있음.

// 바벨이 자바스크립트로 바꿔줘서 UI에서 보여준다. 
// 컴포넌트 단위로 나눠준다. 


// 함수 형태, class 형태로 나타나는 방법이 있다. 




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> ㅋㅋㅋㅋ
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>