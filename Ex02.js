import React from 'react';

function Ex02(){
    const name = "김경현";
    
    return(
        <>
            <h1>{name === '김경현'? (<h2>{name} 맞습니다.</h2>):(<h2>{name} 아니에요</h2>)}</h1>
        </>
    )
}

export default Ex02;

// 조건 비교 삼합 연산자 사용 한다.