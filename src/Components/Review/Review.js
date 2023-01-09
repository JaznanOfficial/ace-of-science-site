import React, { useRef } from "react";
import Rating from "react-rating";
import Swal from "sweetalert2";
import "./Review.css";
import useAuth from "../../Hooks/useAuth";
import review from "./review.svg";

const Review = () => {
    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();
    const ratingRef = useRef();
    const professionRef = useRef();

    const reviewHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const profession = professionRef.current.value;
        const text = textRef.current.value;
        var rating = ratingRef.current.state.value;
        const photo = user.photoURL;
        const review = { name, email, text, rating, photo, profession };
        console.log({ name, email, text, rating, photo, profession });

        fetch("https://aos-server.onrender.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        }).then((res) => {
            new Swal({
                title: "Good job!",
                text: "Your review successfully sent! Please stay with us",
                icon: "success",
            });
            e.target.reset();
        });
        // window.location.reload()
    };
    return (
        <div className="review">
            <div className="container d-lg-flex flex-row justify-content-between align-items-center my-5">
                <div className="review-img">
                    <img src={review} alt="img not found" width="340px" />
                </div>
                <div>
                    <div className="column right w-100 my-5">
                        <h1 className="text">Review us</h1>
                        <form action="#" onSubmit={reviewHandler}>
                            <div className="fields">
                                <div className="field name">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        ref={nameRef}
                                        required
                                    />
                                </div>

                                <div className="field email">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        ref={emailRef}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field email">
                                <input
                                    type="text"
                                    placeholder="Profession"
                                    name="profession"
                                    ref={professionRef}
                                    required
                                />
                            </div>

                            <div className="field textarea">
                                <textarea
                                    cols="30"
                                    rows="10"
                                    placeholder="Review"
                                    name="review"
                                    ref={textRef}
                                    required
                                ></textarea>
                            </div>
                            <div className="field rating text-start">
                                <Rating
                                    ref={ratingRef}
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
