import React from 'react';
// css파일을 사용하고 싶은 경우 설정 방법
import './App.css';

function Ex03(){

    const name = '김경현';
    const home = 'Seoul'
        return(
        <>
         <div align="center">
         <span className='react'> {name} </span>
         <div className='lol'> {home}</div>
         </div>
        </>
    )
}

export default Ex03;

// 스타일 지정.css