import { useState } from "react";

let RatingSelector = (props) => {
    let [ratings, setRating] = useState([1, 2, 3, 4, 5]);
    let rateIcon = 'rating-stars-icon-3.jpg'
    let handleRating = (rating) => {
        console.log(rating);
        props.passRatingToParent(rating);
    }
    return (
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">Rating Selector</div>
                    <div className="card-body">
                        <h3>Select Rating</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="btn-group me-2" role="group" aria-label="Basic mixed styles example">
                                {
                                    ratings.map(r =>

                                        <button className="btn btn-outline-primary"
                                            type="button"
                                            onClick={() => handleRating(r)}
                                            key={r}
                                        >
                                            <img src={rateIcon}
                                                width="50px" height="50px"
                                            />
                                            {r}
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="card-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default RatingSelector;