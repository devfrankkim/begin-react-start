import React, {Component} from 'react';

class Event01 extends Component{
    state = {message: ""}
    render(){
        return(
            <> 
             <h1>이벤트 연습</h1>
             <input  type="text"   name="message"  placeholder="ㅋㅋㅋㅋㅋ" 
              onChange={(e) => this.setState({message: e.target.value})}
             />
             
             <button onClick = {(e) => {alert(this.state.message); }}> 
               확인 
             </button>
            
            </>
         );
    }
}

export default Event01;

// value 값 나오게 하기 위해선 =>  e.target.value
