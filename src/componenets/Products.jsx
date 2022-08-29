import { useState, useEffect } from 'react'
import axios from 'axios';

const baseURL = 'https://dummyjson.com/products'


const Products = ({categoryName}) => {
    
    console.log({categoryName});
    console.log(categoryName);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        
        axios.get(baseURL).then((response) => {
            console.log(response);
            setProducts(response.data.products);

        });
        
        
    }, []);

    var filteredProducts = products.filter(function (product) {
        return product.category === categoryName;
    })
    console.log(filteredProducts);

    return (
        <div>
            {
                filteredProducts.map((product) => (
                    <div className='col-lg-3 pt-3' key={product.id}>
                        <p>{product.title}</p>

                    </div>
                ))
            }
        </div>
    )
}

export default Products