import React from 'react';
import ReactDom from 'react-dom';

const AmazonElectronic =() => {
    return (
        <div className='booklist'>
            <p className='book'>
                <img src="https://m.media-amazon.com/images/I/411y5UdVmvL._AC_UL480_QL65_.jpg" alt=''/>
            </p>
            <p className='book'>
                <img src="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UL480_QL65_.jpg" alt=''/>

            </p>
        </div>
    );
}

ReactDom.render(</>, document.getElementById('root'));