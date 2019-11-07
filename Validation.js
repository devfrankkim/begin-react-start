import React, {Component} from 'react';
import './validate.css'

class Validation extends Component{
    input = React.createRef()

    state = {
        password : '',
        clicked : false,
        validated : false
    }

    handleChange = (e) => {
        this.setState({password : e.target.value});
    }

    handleButtonClick = () => {
        // 버튼을 클릭 했을 때
        this.setState({
            clicked : true,
            validated : this.state.password === '0000'
        })
        this.input.focus();
    }

    render(){
        return(
            <>
             <input 
                ref = {ref => (this.input = ref)}
                type="password" value={this.state.password} 
                onChange = {this.handleChange} 
                className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />   
             <button onClick={this.handleButtonClick}>검증하기</button>
            </>
        )
    }
}

export default Validation;

// ref는 직접 DOM을 건드려야 할 때.