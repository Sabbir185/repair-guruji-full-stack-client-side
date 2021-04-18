import React from 'react';
import './ProjectShow.css'
import project1 from '../../../images/project (1).jpg'
import project2 from '../../../images/project (2).jpg'
import project3 from '../../../images/project (3).jpg'
import project4 from '../../../images/pp.jpg'

const ProjectShow = () => {
    
    return (
        <section className="container pt-4 pb-5">
            <h3 className="text-center mt-5 pb-4">Latest Project</h3>
            <h1 className="text-center mb-5 mt-3 txt-bold">Customer satisfaction is our main Goal !</h1>
            <div className="pt-5">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 p-2 bx-shadow">
                        <div>
                            <img src={project1} alt="" className="img-fluid w-100 pb-3 rounded"/>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={project2} alt="" className="img-fluid w-100 rounded"/>
                            </div>
                            <div className="col">
                                <img src={project3} alt="" className="img-fluid w-100 rounded"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 pl-4">
                        <h3 className="mt-4">Brand New Desktop Setup</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id corrupti veritatis sapiente quasi eaque odio sunt iste excepturi tenetur suscipit.</p>

                        <h3 className="mt-5">Ipad Display and wifi replacement</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id corrupti veritatis sapiente quasi eaque odio sunt iste excepturi tenetur suscipit.</p>

                        <h3 className="mt-5">Dell Laptop Motherboard repair</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id corrupti veritatis sapiente quasi eaque odio sunt iste excepturi tenetur suscipit.</p>

                        <div className="row mt-5">
                            <div className="col">
                                <h6>Digital Carnival 2021</h6>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis!</small>
                            </div>
                            <div className="col">
                                <h6>SAMSUNG Fair 2020</h6>
                                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis!</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShow;