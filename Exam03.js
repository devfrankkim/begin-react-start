import React, {Component} from 'react';
import Subject from './Components/Subject.js';
import Navigation from './Components/Navigation.js';
import Article from './Components/Article.js';

class Exam03 extends Component{
    
    render(){
        return(
            <>
                <Subject title='WEB' sub='World Wide Webㅋㅋㅋ'></Subject>
                <br></br>
                <hr></hr>
                <br></br>
                <Subject title="React" sub="UI" />
                <hr></hr>
                <br></br>
                <Navigation></Navigation>
                <br></br>
                <hr></hr>
                <br></br>
                <Article title='Article' sub="What is HTML?" page="HTML is HyperText MarkUp language!!!!"></Article>
            </>
             )
        }
}

export default Exam03; 