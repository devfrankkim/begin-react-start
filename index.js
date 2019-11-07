import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ex14 from './Ex14';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); 
// 함수 호출 App() from src App.js  => return 후 root에다 함수를 집어 넣어라. => public/index.html (<div id="root"></div>)


ReactDOM.render(< Ex14 />, document.getElementById('root')); 

// render함수는 => 해당 함수 호출 하면서 리액트(바벨 통하여) JSX를 렌더해주면서 => 'root' 뿌려주면서 화면 UI에 보여준다. 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



