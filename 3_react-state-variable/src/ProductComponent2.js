/* eslint-disable no-unused-vars */
import { useState } from "react";

let ProductComponent = () => {
    // const getInitialState = () => {
    //     const value = "All";
    //     return value;
    // }

    // const [value, setValue] = useState(getInitialState);

    // const handleChange = (e) => {
    //     setValue(e.target.value);    
    // }

    // if (value === "All") {
    //     products;
    // } else {
    //     setProducts(products.filter(x => x.productName === value));
    // }


    let [products, setProducts] = useState([
        { id: 1, productName: 'Smart TV', brandName: 'Samsung', price: 1000 },
        { id: 2, productName: 'Smart TV', brandName: 'LG', price: 970 },
        { id: 3, productName: 'Smart TV', brandName: 'Sony', price: 1020 },
        { id: 4, productName: 'Smart Phone', brandName: 'Samsung', price: 1500 },
        { id: 5, productName: 'Smart Phone', brandName: 'Apple', price: 1300 },
        { id: 6, productName: 'Teblet', brandName: 'Apple', price: 300 },
    ])

    let [selectedProduct, setSelectedProduct] = useState(products);

    let [options, setOptions] = useState([
        "All", "Smart TV", "Smart Phone", "Teblet"
    ])

    var [value, setValue] = useState("All");
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setValue(selectedValue);
        selectedValue === "All"
            ? setSelectedProduct(products)
            : setSelectedProduct(products.filter(f => f.productName === selectedValue));
    }

    return (
        <div>
            <h2>Products</h2>
            <p>List of products is as follows: </p>
            {/* <select id='productOption' value={value} onChange={handleChange}> */}
            <select id='productOption' value={value} onChange={handleChange}>
                {
                    options.map((option, index) => (
                        <option value={option}>{option}</option>                        
                    ))
                }
            </select>
            <button onClick={() => {
                value === "All"
                    ? setSelectedProduct(products)
                    : setSelectedProduct(products.filter(f => f.productName === value));
            }}>Filter</button>
            <br />
            <br />
            <table border="1" cellPadding="10" cellSpacing="5" style={{ margin: "auto", width: "80%" }}>
                <thead style={{ background: "black", color: "white" }}>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Brand Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedProduct.map((product, index) => (
                            <tr style={{ background: product.id % 2 === 0 ? "lightgrey" : {} }}>
                                <td width="10%">{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.brandName}</td>
                                <td style={{ textAlign: "right" }}>${product.price.toFixed(2)}</td>
                            </tr>
                        ))
                    }
                    <tr style={{ background: "black", color: "white" }}>
                        <td colSpan="2">Total Products: {products.length}</td>

                        <td colSpan={2} style={{ textAlign: "right" }}>Total Invantory Cost: ${products.reduce((total, product) => total + product.price, 0).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ProductComponent;