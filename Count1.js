import React, {useState} from 'react';

// React.js에서 Hooks 라는 개념은 v16.8 버전부터 기능이 추가되었음.
// Hooks란 함수형 컴포넌트에서도 상태 관리를 할 수 있는 {useState},
// 렌더링 이후 작업을 설정하는 {useEffect} 등의 기능을 제공하여
// 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줌.

function Count(){
    
    const[number,setNumber] = useState(0);  
    
    // // + 버튼
    // const onIncrease = () => {
    //     setNumber(number + 1);
    // }
    
    // // - 버튼
    // const onDecrease = () => {
    //     setNumber(number - 1);
    // }
        return(
            <>
                <h3>현재 카운터의 값은 {number} 입니다.</h3>
                <button onClick={() => setNumber(number + 1)}> +1 증가 </button>
                <button onClick={() => setNumber(number - 1)}> -1 감소</button>
            </>
        )
}

export default Count;
/*
    
const[number,setNumber] = useState(0);  
    
    함수 호출하게 되면, 리턴 값은 배열로 리턴.
    첫번째 원소인 number에는 useState()에서 넘겨준 값이 존재
    두번째 원소는 상태(값)을 바꾸어 주는 함수. 세터함수라고 하기도 함.

*/ 

