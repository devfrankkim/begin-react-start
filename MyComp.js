import React from 'react';

// =================================

/*function MyComp(){
    return(
        <div>멋진 React 컴포넌트</div>
    )
}*/

// =================================

// 화살표 함수 문법. 
// const MyComp = () =>{
//     return(
//         <div>React 컴포넌트 ㅋㅋㅋ</div>
//     )
// }

// =================================

const MyComp = (props) =>{
    return <div> 안녕하세요 ㅋㅋㅋ {props.name} ㅎㅎㅎ how old are you?{props.age}</div>
}


export default MyComp;