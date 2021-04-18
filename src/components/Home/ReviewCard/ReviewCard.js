import React from 'react';
import ReactDOM from 'react-dom';
import Flip from 'react-reveal/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import './ReviewCard.css'

const ReviewCard = (props) => {
    const {image, name, occupation, description, rating} = props.review;

    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pt-5">
            <Flip left>
            <div className="row">
                <div className="col-3 review-img">
                    <img src={image} alt=""/>
                </div>
                <div className="col-6">
                    <h6>{name}</h6>
                    <p><small>{occupation}</small></p>
                </div>
            </div>
            <div>
                <p className="text-justify text-secondary mt-2">{description}</p>
            </div>
            <div>
                {
                    rating == 5 && <div>
                        <p> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                        </p>
                    </div>
                    ||
                    rating == 4 && <div>
                        <p> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                        </p>
                    </div>
                    ||
                    rating == 3 && <div>
                        <p> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon>  
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                        </p>
                    </div>
                    ||
                    rating == 2 && <div>
                        <p> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                        </p>
                    </div>
                    ||
                    rating == 1 && <div>
                        <p> 
                            <FontAwesomeIcon className="goldenray" icon={faStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                            <FontAwesomeIcon icon={farFaStar}></FontAwesomeIcon> 
                        </p>
                    </div>
                }
            </div>
            </Flip>
        </div>
    );
};

export default ReviewCard;