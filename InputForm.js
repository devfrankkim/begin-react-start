import React, {useState} from 'react';

function InputForm(){
    const[text, setText] = useState('');
    
    const onChange = (e) =>{
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return(
        <>
            <input onChange={onChange} value={text}></input>
            <button onClick={onReset}>초기화</button>
            <div>   
                <b>값: {text} </b>
            </div>
        </>
    )
}

export default InputForm;


// 리턴되는 값 배열!!!! => useState 
// e.target.value