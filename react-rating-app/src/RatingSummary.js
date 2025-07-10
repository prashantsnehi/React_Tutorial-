import { useEffect, useState } from "react";

let RatingSummary = (props) => {
    let [rating, setRating] = useState(0);
    useEffect(() => {
        setRating(props.rating);
    }, [props.rating]);

    let rateIcon = 'rating-stars-icon-3.jpg';

    return (
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Rating Summary</div>
                    <div className="card-body">
                        <h4>Your rating is as follows</h4>
                        {
                            // props.rating > 0 ? `you have received ${props.rating} rating` : `No Rating given yet`
                            props.rating < 1
                                ? `No Rating given yet`
                                :
                                <div className="btn-group me-2" role="group" aria-label="Basic mixed styles example">
                                    {
                                        // Array.from({ length: rating }, (_, i) => (
                                        //     <img
                                        //         key={i}
                                        //         src={rateIcon}
                                        //         alt="star"
                                        //         style={{ width: "50px", height: "50px", margin: "auto" }}
                                        //     />
                                        // ))
                                        [...Array(rating)].map((i) => (
                                                <img
                                                key={i}
                                                src={rateIcon}
                                                alt="star"
                                                style={{ width: "50px", height: "50px", margin: "auto" }}
                                            />
                                        ))
                                    }
                                </div>
                        }
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default RatingSummary;