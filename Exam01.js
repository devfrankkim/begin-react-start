import React from 'react';

function Subject(){
    return(
        <header>
            <h1>Subject</h1>
            WORLDDDD WIDEEEE WEBBBB yehey
            ㅋㅋㅋㅋㅋㅋㅋㅋㅋ
        </header>

    );
}

function Navigation(){
    return(
        <div>
        <header>
         <h1>Navigation</h1>
             WORLDDDD WIDEEEE WEBBBB
        </header>
        <nav>
            <li><a href="a.html">HTML</a></li>
            <li><a href="b.html">JavaScript!!</a></li>
            <li><a href="c.html">CSS</a></li>
            <li><a href="a.html">React!!</a></li>  
        </nav>     

        </div>
    )
}

function Article(){
    return(
        <article>
            <h1>Article</h1>
            <h2>What is HTML?</h2>
            <p>HTML is HyperText MarkUp language!!!!</p>
        </article>  
    )
}

function Exam01(){
    return(
        <div>
            <Subject></Subject>
            <br/><br/><br/>
            <Navigation></Navigation>
            <br/><br/><br/>
            <Article></Article>
        </div>
    );
}

export default Exam01;