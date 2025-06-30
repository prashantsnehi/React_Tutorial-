import { useState, useEffect } from 'react';

let Contact = () => {
    let [msg, setMsg] = useState('');
    useEffect(() => {
        setMsg('Contact component loaded...');

        return (() => console.log('Contact component unmounted/ destroyed'));
    },[]);
    return (
        <div className="row m-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Contact Component</div>
                    <div className="card-body">
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;