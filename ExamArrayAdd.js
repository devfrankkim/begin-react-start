import React, {useState} from 'react';

const ExamArrayAdd = () => {
    const [names, setNames] = useState(
    [ 
        {id:1, text: 'kim'}, 
        {id:2, text: '이순신'}, 
        {id:3, text: '유관순'}, 
        {id:4, text: '김유신'}, 
        {id:5, text: '===='}
    ]);

    const namesList = names.map((name,index) => <li key={index}> {name.text} </li>)

    const [inputText, setInputText] = useState('');
     // 새로운 항목을 추가할 때 사용할 ID
    const [nextId, setNextId] = useState('');

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    return(
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}> 추가 </button>
            <ul>{namesList}</ul>
        </>
    )
};

export default ExamArrayAdd;

// 훅스는 배열로 리턴함.