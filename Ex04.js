// 함수형 컴포넌트 작성 시 react 선언하는 방법  

// import React from 'react';

import React, {Component} from 'react';
import './App.css';

// react 라이브러리에서 Component 라는 클래스를 로딩한다는 의미.
// 컴포넌트를 선언하는 2가지 방식 
// 1) 함수형 컴포넌트 선언
// 장점 : - 클래스형 컴포넌트보다 선언하기가 간편한다.
/*        - 메모리 자원도 클래스형 컴포넌트보다 덜 사용한다. => 용량이 작다.
          - 프로젝트 환성 후 배포할 때도 결과물의 파일 크기가 작다.
          


   단점 : - state를 사용할 수 없다.
          - 라이프사이클(생명주기) API 를 사용할 수 없다.
          -
          -
          -

*/

// 2) 클래스형 컴포넌트 선언

class Ex04 extends Component{
    render(){       
        const name = '김경현ㅋㅋㅋㅋㅋㅋ'
        return(
            <div className="react">{name}</div>
        )
    }
}

export default Ex04;

//render() return을 통해 보여준다.