import React from 'react';

const ExamArray01 = () => {
    const names = ['홍길동', '이순신', '유관순', '김유신', '김연아'];
    
    const nameList = names.map( (name, id) => <li key={id}> {name}  </li> );
    
    return(
        <>
         <ul>{nameList}</ul>
        </>
    )

}

export default ExamArray01;

// map() 함수는 파라미터로 전달된 함수를 사용해서 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 
// 그 결과로 새로운 배열을 생성 생성함.

// React, key 라는 개념 => 컴포넌트 배열을 렌더링할 때, 어떤 원소에 변동이 있었는지 알아내려고 사용.