import React from 'react';
import { useRef } from 'react';

function Form() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${inputRef1.current.value}`);
        alert(`Email-address: ${inputRef2.current.value}`);
        alert(`Country: ${inputRef3.current.value}`);
        alert(`Phone: ${inputRef4.current.value}`);
        alert(`Password: ${inputRef5.current.value}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <center>
               <h1>Registration Form</h1>
                
                <input type="text" ref={inputRef1} placeholder='Name'/>
            <br />
                <input type="email" ref={inputRef2} placeholder='Email address'/>
            <br />
                <input type="text" ref={inputRef3} placeholder='Country'/>
            <br />
                <input type="tel" ref={inputRef4} placeholder='Phone'/>
            <br />
                <input type="password" ref={inputRef5} placeholder='Password'/>
            <br />
            <input type="submit" value="CREATE ACCOUNT"  className='btn'/>
               </center>
            </form>
        </div>
    );
}

export default Form;
