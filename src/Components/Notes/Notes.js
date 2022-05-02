import React from "react";
import { Link } from "react-router-dom";
import SingleNotes from "../SingleNotes/SingleNotes";
import notesSvg from './notesSvg.svg'

const Notes = () => {
    return (
        <div className="bg-white py-5">
            <div className="container py-5">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 order-2 order-lg-1">
                        <i class="fa fa-bar-chart fa-2x mb-3 text-danger"></i>
                        <h2 class="font-weight-light">All imporant notes are here!</h2>
                        <h5 class="font-italic text-muted mb-4">
                            Just check it out, learn and increase your knowledges. You'll try, we'll
                            help you
                        </h5>
                    </div>
                    <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                        <img
                            src={notesSvg}
                            alt=""
                            class="img-fluid mb-4 mb-lg-0"
                        />
                    </div>
                </div>
                <SingleNotes></SingleNotes>
            </div>
        </div>
    );
};

export default Notes;
