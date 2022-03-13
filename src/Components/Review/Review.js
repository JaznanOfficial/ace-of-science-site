import React, { useRef } from "react";
import Rating from "react-rating";
import "./Review.css";
import review from "./review.svg";

const Review = () => {
    const form = useRef();
    return (
        <div className="review">
            <div className="container d-lg-flex flex-row justify-content-between align-items-center my-5">
                <div className="review-img">
                    <img src={review} alt="img not found" width="380px" />
                </div>
                <div>
                    <div className="column right w-100 my-5">
                        <h1 className="text">Review us</h1>
                        <form action="#" ref={form}>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Name" name="name" required />
                                </div>
                                <div className="field email">
                                    <input type="email" placeholder="Email" name="email" required />
                                </div>
                            </div>

                            <div className="field textarea">
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
                                    stop={5}
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
                            <div className="button-area">
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
