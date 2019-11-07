import React, {Component} from 'react';

class Counter extends Component{
   
    constructor(props){
        super(props);
        // state를 초기화하는 문장 this.state = {name: 0}
        this.state = {
            number: 0, 
            fixedNumber: 0
        }
    }
    render(){
        const {number, fixedNumber} = this.state;
        return(
            <>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 :  {fixedNumber}</h2>
                <button onClick ={() => {
                    this.setState({number: number+1})
                }}>
                    +

                </button>
            </>
        );
    }

}

export default Counter;    


// 컴포넌트의 state를 설정하기 위해서는 constructor 메서드를 작성해서 설정을 해야함.

// => 어떤 컴포넌트가 실행 될 때 render() 함수보다 먼저 실행시키고, 
// 해당 컴포넌트를 초기화 시키고 싶은 경우에는 constructor를 만들고 그 안에 코드를 작성한다.



// state : 컴포넌트 내부에서 바뀔 수 있는 값을 의미.
