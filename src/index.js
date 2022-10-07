import React from 'react';
import ReactDom from 'react-dom';
import UseStateCounter from './useState-counter'
import './index.css'



function BookList() {
    return (
        <section className='booklist'>
            <UseStateCounter/>
        </section>
    );
}


ReactDom.render(<BookList />, document.getElementById('root'));