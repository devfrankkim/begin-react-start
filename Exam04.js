import React, {Component} from 'react';
import Subject from './Components/Subject.js';
import Navigation from './Components/Navigation.js';
import Article from './Components/Article.js';

class Exam04 extends Component{
    constructor(props){
        super(props);
        this.state ={
            mode: 'read',
            welcome: {title: 'welcome', desc: 'Hello REAAACT'},
            subject: {title: 'WEBBB', desc: ' ㅋㅋㅋ'},
            navigation: [
                {id:1, title:'HTML!', desc:'What is HTML??!!'},
                {id:2, title:'JavaScript~~', desc:'Javascript is nice'},
                {id:3, title:'CSS~~', desc:'CSS is OOKK'},
                {id:4, title:'REACT~~', desc:'REACT is COOOOL'},
            ]   
            // list가 많을 때는 배열을 쓴다.
        }
    }

    render() {
        // react.js 의 JSX 내부에서는 if문을 사용할 수 없다.
        // 하지만, 조건에 따라서 다른 내용을 렌더링 해야하는 경우는 
        // JSX 외부에서 if문을 사용해서 사전에 값을 설정할 수 있음. 
        var _title, _desc = null;

        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            _title = this.state.navigation[0].title;
            _desc = this.state.navigation[0].desc;
        }

        return(
            <>  
                <header>
                <h1><a href='/' onClick={function (e) {
                    e.preventDefault(); // 기본적인 동작 방법을 중지시키는 명령어
                    this.setState({
                    mode: 'read'});
                      }.bind(this)}>
                    {this.state.subject.title}
                     </a>
                </h1>
                    {this.state.subject.sub}
                </header>
                <Subject title='WEB' sub='World Wide Webㅋㅋㅋ'/>
                <br></br>
                <hr></hr>
                <br></br>
                <Navigation data={this.state.navigation}/>
                <br></br>
                <hr></hr>
                <br></br>
                <Article title={_title} desc={_desc}/>
            </>
             )
        }
}

export default Exam04; 