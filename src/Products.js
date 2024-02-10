import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products');
                setItems(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        getItems();
    }, []);

    if (loading) return <div className='load'><h1>Please wait the page is loading</h1></div>;
    if (error) return <div>Error: {error}</div>;
    console.log(items)
    return (
        <div id='home'>
            <div className='cardHolder'>
                {items.map(item => (
                    <div className='card' key={item.id}>
                        <div>
                        <img src={item.images} alt='' />
                        </div>
                        <div className='cardContent'>
                        <h3 style={{color: "blue"}}>{item.title}</h3>
                        <h3 style={{color: "blue"}}> Price : &#x20B9; {item.price} </h3>
                        <button style={{backgroundColor: "yellow"}}  type = "button" className='buy'>Buy now</button>
                        
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
