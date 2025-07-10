import { useState } from "react";
import RatingSelector from "./RatingSelector";
import RatingSummary from "./RatingSummary";

let RatingApp = () => {
    let [rating, setRating] = useState(0);
    let getRating = (rate)  => {
        setRating(rate);
    }
    return (
        <div className="row d-flex justify-content-center align-content-center">
            <div className="col-md-6">
                <RatingSelector passRatingToParent={getRating}/>
            </div>
            <div className="col-md-6">
                <RatingSummary rating={rating} />
            </div>
        </div>
    )
}

export default RatingApp;