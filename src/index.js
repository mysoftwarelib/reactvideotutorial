import React from 'react';
import ReactDom from 'react-dom';
import UseStateCounter from './useState-counter'
import './index.css'



function App() {
    return (
        <section className='booklist'>
            <UseStateCounter/>
        </section>
    );
}


ReactDom.render(<App />, document.getElementById('root'));