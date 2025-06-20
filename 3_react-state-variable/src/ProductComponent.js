import { useState } from 'react';

let ProductComponent = () => {
    let [products, setProducts] = useState([
        { id: 1, name: "Laptop", brandName: "Apple", price: 999.99, inStock: true, image: "https://i.ytimg.com/vi/rHBOG5HDr9I/maxresdefault.jpg" },
        { id: 2, name: "Smartphone", brandName: "Apple", price: 499.99, inStock: false, image: "https://m.media-amazon.com/images/I/31aeb1TCQZL._UF1000,1000_QL80_.jpg" },
        { id: 3, name: "Tablet", brandName: "Apple", price: 299.99, inStock: true, image: "https://m.media-amazon.com/images/I/715Dsu2jxWL.jpg" },
        { id: 4, name: "Smartwatch", brandName: "Apple", price: 199.99, inStock: true, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLN3ref_VW_34FR+watch-case-42-aluminum-rosegold-nc-s10_VW_34FR+watch-face-42-aluminum-rosegold-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=UVJuZDErT1V3TUlNcnk2Rnd0N1k2cDNqbENGcEFFTlJVaXJwL2VzdGxEM3hoaFEySTlrZSsrbEhqczIxajV3MzBnRnJNVU50TjZtbUN3ZjYvVksrL1FtTHNhRmRKQkE2OXJHRVEvRTFWdXRGd1ZOdUM2RkNJOUpIeklzU1JHbVNWNEM0ZHZzMzMzajJiOGZuamRiTE9uZmdHMUt6VFlqa3BpV2VBOUNycGdrcDIxSk5peW5HTWQ0c004MmJwMkNtdGl6SHg4ZE5NYmlWSVQ5akRTdGpCWGo0cDJ2RWhLbmY4Y0ZlZnhUVFNVNA" },
        { id: 5, name: "Headphones", brandName: "Apple", price: 149.99, inStock: true, image: "data:image/jpeg;base64,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" },
        { id: 6, name: "Smart Speaker", brandName: "Apple", price: 99.99, inStock: false, image: "https://www.apple.com/newsroom/images/product/homepod/standard/Apple_homepod-mini-white-10132020_big.jpg.large.jpg" },
        { id: 7, name: "Wireless Charger", brandName: "Apple", price: 49.99, inStock: true, image: "https://m.media-amazon.com/images/I/61rsvJSlQ-L._AC_UF1000,1000_QL80_.jpg" },
        { id: 8, name: "Bluetooth Speaker", brandName: "Apple", price: 79.99, inStock: true, image: "https://rukminim2.flixcart.com/image/750/900/xif0q/speaker/mobile-tablet-speaker/e/p/t/3d-sound-apple-shape-bluetooth-speaker-with-rgb-light-super-bass-original-imah5yybfxsfq7uh.jpeg?q=90&crop=false" },
        { id: 9, name: "Smart TV", brandName: "LG", price: 1299.99, inStock: true, image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/television/n/n/q/55uq9000psd-55uq9000psd-lg-original-imaggczykg3mdzq5.jpeg?q=90&crop=false" },
        { id: 10, name: "Gaming Console", brandName: "Neon Retro", price: 499.99, inStock: false, image: "https://media.wired.com/photos/67e72a6a018e6c159f995308/16:9/w_2000,h_1125,c_limit/Evercade%20VS%20R%20Retro%20Gaming%20Console%20Abstract%20Background%20032025%20SOURCE%20Evercade.jpg" },
        { id: 11, name: "Smartwatch", brandName: "Samsung", price: 199.99, inStock: true, image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24435058/2023/8/14/5e0fb72d-aa26-4de7-999a-199e01ed1df21691985473864SamsungGalaxyWatch6LTE44mmSilverCompatiblewithAndroidonly1.jpg" },
        { id: 12, name: "Smartphone", brandName: "Samsung", price: 899.99, inStock: true, image: "https://m.media-amazon.com/images/I/61cInRWmClL.jpg" },
        { id: 13, name: "Smartphone", brandName: "Google", price: 799.99, inStock: true, image: "https://media.wired.com/photos/6453efc6daed59ebbf4608a7/master/pass/Google-Pixel-Fold-News-Gear.jpg" },
        { id: 14, name: "Smartphone", brandName: "OnePlus", price: 699.99, inStock: true, image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691050276/Croma%20Assets/Communication/Mobiles/Images/275686_qmnwi6.png?tr=w-600" },
        { id: 15, name: "Smartphone", brandName: "Xiaomi", price: 599.99, inStock: true, image: "https://i02.appmifile.com/675_operatorx_operatorx_opx/26/09/2024/f81bba823d0ac2abe8c07ce09e2eb11f.png" },
        { id: 16, name: "Smartphone", brandName: "Huawei", price: 499.99, inStock: true, image: "https://cdn.kalvo.com/uploads/img/gallery/59785-huawei-nova-12i-1.jpg" },
        { id: 17, name: "Smartphone", brandName: "Oppo", price: 399.99, inStock: true, image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno13-series/list-page/reno13-5g/white.png" },
        { id: 18, name: "Smartphone", brandName: "Vivo", price: 299.99, inStock: true, image: "https://www.myg.in/images/detailed/92/image-removebg-preview_-_2024-11-01T120246.193.png" },
        { id: 19, name: "Smartphone", brandName: "Realme", price: 199.99, inStock: true, image: "https://img-prd-pim.poorvika.com/product/Realme-13-5g-speed-green-256gb-8gb-ram-Front-Back-View.png" },
    ]);

let [selectedProduct, setSelectedProduct] = useState(products);
let [options, setOptions] = useState(["All", ...new Set(products.map(product => product.brandName))]);
let [value, setValue] = useState("All");
const handleChange = (e) => {
    const selectedValue = e.target.value;
    setValue(selectedValue);
    selectedValue === "All"
        ? setSelectedProduct(products)
        : setSelectedProduct(products.filter(product => product.brandName === selectedValue));
};

    return (
        <div>
            <h3>Product List</h3>
            <select onChange={handleChange} value={value} style={{ margin: "20px", padding: "10px", fontSize: "16px" }}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option} onClick={handleChange}>{option}</option>
                    ))
                }
            </select>
            <table border="1" cellPadding="10" cellSpacing="5" style={{ width: "80%", textAlign: "center", margin: "auto" }}>
                <thead>
                    <tr style={{ backgroundColor: "blue", color: "white" }}>
                        <th style={{ width: "10%" }}>ID</th>
                        <th>Image</th>
                        <th>Brand Name</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedProduct.map((product) => (
                            // <tr key={product.id}  style={product.inStock ? {backgroundColor: "green", color: "white"} : {backgroundColor: "red", color:"white"}}>
                            <tr key={product.id} style={{ backgroundColor: product.inStock ? "green" : "red", color: "white" }}>
                                <td style={{ textAlign: "right" }}>{product.id}</td>
                                <td>
                                    <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px", borderRadius: "10%" }} />
                                </td>
                                <td>{product.brandName}</td>
                                <td>{product.name}</td>
                                <td style={{ textAlign: "right" }}>${product.price.toFixed(2)}</td>
                                <td>{product.inStock ? "Yes" : "No"}</td>
                            </tr>
                        ))
                    }
                    <tr style={{ backgroundColor: "blue", color: "white" }}>
                        <td><strong>Total Products: {products.length}</strong></td>
                        <td></td>
                        <td><strong>In Stock Products: {products.filter(product => product.inStock).length}</strong></td>
                        <td></td>
                        <td style={{ textAlign: "right" }}><strong>Total: ${products.reduce((total, products) => total + products.price, 0).toFixed(2)}</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductComponent;