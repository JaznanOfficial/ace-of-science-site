import React, { useRef } from "react";
import Rating from "react-rating";
import "./Review.css";
import review from "./review.svg";

const Review = () => {
    const form = useRef();
    return (
        <div className="review">
            <div className="d-lg-flex flex-row justify-content-around align-items-center my-5">
                <div className="review-img">
                    <img src={review} alt="img not found" width="400px" />
                </div>
                <div>
                    <div class="column right w-100 mx-3">
                        <h1 class="text">Message us</h1>
                        <form action="#" ref={form}>
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Name" name="name" required />
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="Email" name="email" required />
                                </div>
                            </div>

                            <div class="field textarea">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Review"
                                    name="review"
                                    required
                                ></textarea>
                            </div>
                            <div className="field rating text-start">
                                <Rating
                                    stop={6}
                                    emptySymbol={[
                                        "fa fa-star-o fa-2x low",
                                        "fa fa-star-o fa-2x low",
                                        "fa fa-star-o fa-2x low",
                                        "fa fa-star-o fa-2x low",
                                        "fa fa-star-o fa-2x low",
                                        
                                    ]}
                                    fullSymbol={[
                                        "fa fa-star fa-2x low",
                                        "fa fa-star fa-2x low",
                                        "fa fa-star fa-2x low",
                                        "fa fa-star fa-2x low",
                                        "fa fa-star fa-2x low",
                                        
                                    ]}
                                />
                            </div>
                            <div class="button-area">
                                <button type="submit">Give us Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
