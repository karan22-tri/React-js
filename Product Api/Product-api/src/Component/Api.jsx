import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Api() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetched = async () => {
            try {
                let response = await axios.get('https://fake-coffee-api.vercel.app/api');
                let jsonData = response.data;
                console.log(jsonData);
                setData(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        dataFetched();
    }, []);
    function rating(rate) {
        let stars = [];
        for (var i = 1; i <= rate; i++) {
            stars = [...stars, 1]
        }
        if (rate - Math.floor(rate) >= 0.5) {
            stars = [...stars, 0.5]
        }
        for (var j = stars.length; j < 5; j++) {
            stars = [...stars, 0]
        }
        return stars;
    }
    return (
        <>
            <div className='container'>
                <h1 style={{marginTop:'20px',color:'yellow'}}>Best Seller Product</h1>
                <div className='row'>
                    {data.map((el, index) => (
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 py-5' key={index}>
                            <div className='Card'>
                                <img src={el.image_url} alt={el.name} />
                                <h4>{el.name}</h4>
                                <p>
                                    {el.description}
                                </p>
                                <h5 className={(index + 1) % 4 === 0 ? "color-red" : ((index + 1) % 4 === 1 ? "color-green" : (index + 1) % 4 === 2 ? "color-blue" : "color-purple")}>
                                    {el.price}$
                                </h5>
                                <div className='reting'>
                                    {rating(el.roast_level).map((el, ind) => {
                                        return el === 1 ? <i className="fa-solid fa-star"></i> : (el === 0 ? <i className="fa-regular fa-star"></i> : <i className="fa-solid fa-star-half-stroke"></i>);
                                    })}
                                </div>
                                <button className={(index + 1) % 4 === 0 ? "background-red" : ((index + 1) % 4 === 1 ? "background-green" : (index + 1) % 4 === 2 ? "background-blue" : "background-purple")}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
