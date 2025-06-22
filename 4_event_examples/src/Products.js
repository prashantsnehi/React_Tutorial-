import {useState} from 'react';

let Products = () => {
    let [products, setProducts] = useState([
        { id: 1, name: 'Television', price: '500', quantity: '10', image: 'https://dummyimage.com/600x400/000/fff.png&text=Television' },
        { id: 2, name: 'Refrigerator', price: '800', quantity: '5', image: 'https://dummyimage.com/600x400/000/fff.png&text=Refrigerator' },
        { id: 3, name: 'Washing Machine', price: '600', quantity: '8', image: 'https://dummyimage.com/600x400/000/fff.png&text=Washing+Machine'},
        { id: 4, name: 'Microwave Oven', price: '200', quantity: '15', image: 'https://dummyimage.com/600x400/000/fff.png&text=Microwave+Oven'},
        { id: 5, name: 'Air Conditioner', price: '1200', quantity: '3', image: 'https://dummyimage.com/600x400/000/fff.png&text=Air+Conditioner' }
    ]);
    let [product, setProduct] = useState({
        id: 0,
        name: '',
        price: '',
        quantity: '',
        image: ''
    });
    let [id, setId] = useState(products.length + 1);
    let addProduct = () => {
        setId(id + 1);
        setProducts([...products, product]);
        console.log(product);
        setProduct({name: '', price: '', quantity: ''});
    }

    let deleteProduct = (e) => {
        let id = e.target.id;
        setProducts(products.filter(prod => prod.id != id));
        console.log(e.target.id);
    }

    return (
        <div>
            <h1>Products</h1>
            <form>
                <input type="hidden" value={product.id = id} />
                <label>Name: </label>
                <input type="text" value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} />
                <label>Price: </label>
                <input type="text" value={product.price} onChange={(e) => setProduct({...product, price: e.target.value})} />
                <label>Quantity: </label>
                <input type="text" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})} />
                {/* <label>Image URL: </label> */}
                <input type="hidden" value={product.image = `https://dummyimage.com/600x400/000/fff.png&text=${product.name}`} onChange={(e) => setProduct({...product, image: e.target.value})} />
                <br />
                <br />
                <button type="button" onClick={addProduct}>Add Product</button>
            </form>
            <h3>Product List</h3>
            <table border="1" width="90%" cellPadding="10" style={{ margin: 'auto' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td><img src={prod.image} alt={prod.name} style={{ width: '150px', height: '50px' }} /></td>
                                <td>{prod.name}</td>
                                <td>${prod.price}</td>
                                <td>{prod.quantity}</td>
                                <td>
                                    <input type="button"
                                        value="Delete"
                                        id={prod.id}
                                        onClick={deleteProduct} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Products;