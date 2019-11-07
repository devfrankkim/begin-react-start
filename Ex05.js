import React from 'react';
import MyComp from './MyComp';

// function Ex05(){
//     return(
//         <MyComp/>
//     )
// }


// const Ex05 = () =>{
//     return(
//         <MyComp/>
//     )
// }



// props 개념
// properties 약자.
// 컴포넌트의 속성을 설정할 때 사용하는 요소
// 값을 전달 받을 때 사용.

function Ex05(){
    return (
        <MyComp name ='김경현zzz' age='100'/>
    )
}
// <MyComp> 에서 MyComp.js 호출 후 변수 값 => props로 전달 => 다시 Ex05에서 값을 빼내와서 => render()시켜줌 (index.js) 
export default Ex05;


