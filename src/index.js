import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const firstBook = {
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8144Vic9C5L._AC_UL320_.jpg',
    title: 'I love you to the Moon and Back',
    author: 'Amelia Hepworth',
}

const secondBook = {
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71aLultW5EL._AC_UY218_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
}

function BookList() {
    return (
        <section className='booklist'>
           <Book
            img={firstBook.img}
            title={firstBook.title}
            author={firstBook.author}
           />
            <Book
                img={secondBook.img}
                title={secondBook.title}
                author={secondBook.author}
            />
        </section>
    );
}

const Book = ({img, title, author}) => {
    return (
        <article className='book'>
            <img src={img} alt='' />
                <h1>{title}</h1>
                <h4>{author}</h4>
        </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'));