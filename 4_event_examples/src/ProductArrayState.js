import { useState } from 'react';

let ProductArrayState = () => {
    let [products, setProducts] = useState([]);
    let [product, setProduct] = useState({ id: 0, name: '', price: 0 });
    let [id, setId] = useState(0);
    let addProduct = () => {
        setId(id + 1);
        product.id = id + 1; // Assigning a new ID to the product
        setProducts([...products, product]);
        setProduct({ id: 0, name: '', price: 0 }); // Reset the input fields after adding
    }

    let deleteProduct = (e) => {
        let id = e.target.id;
        setProducts(products.filter(pro => pro.id != id));
        console.log(e.target.id);
    }

    return(
        <div>
            <form>
                <label>Product Name: </label>
                <input type="text" name="name" value={product.name} onChange={(event) => setProduct({ ...product, 'name': event.target.value })} placeholder='Product Name' />
                <br />
                <label>Product Price: </label>
                <input type="number" name="price" value={product.price} onChange={(event) => setProduct({ ...product, 'price': event.target.value })} placeholder='Product Price' />
                <br />
                <input type="button" value="Add Product" onClick={addProduct} />
            </form>
            <h3>Product List</h3>
            <h5>Total Products: {products.length}</h5>
            <table border="1" width="90%" cellPadding="10" style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <th width="10%">ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((pro, index) => {
                            return <tr key={index}>
                                <td>{pro.id}</td>
                                <td>{pro.name}</td>
                                <td>{pro.price}</td>
                                <td>
                                    <input type="button" 
                                        value="Delete" 
                                        name="delete"
                                        id={pro.id}
                                        onClick={deleteProduct}/>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductArrayState;