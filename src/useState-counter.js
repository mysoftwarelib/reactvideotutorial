import React, { useState } from 'react';

const UseStateCounter = () => {

    const [value, setValue] = useState(0);

    return (
        <>
            <section style={{ margin: '4rem 0' }}>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    increase
                </button><br/>
                <h2>Count:{value}</h2>
                <button className='btn' onClick={() => setValue(value - 1)}>
                    decrease
                </button><br/><br/>

                <button className='btn' onClick={() => setValue(0)}>
                    reset
                </button>
            </section>
        </>
    );
};

export default UseStateCounter;