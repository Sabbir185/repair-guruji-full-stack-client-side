import React from 'react';
import './ProjectShow.css'
import project1 from '../../../images/project (1).jpg'
import project2 from '../../../images/project (2).jpg'
import project3 from '../../../images/project (3).jpg'
import project4 from '../../../images/pp.jpg'

const ProjectShow = () => {
    return (
        <section className="container">
            <h3 className="text-center mt-5">Latest Project</h3>
            <h1 className="text-center mb-5 mt-3">Customer satisfaction is our main Goal !</h1>
            <div className="row row-cols-1 row-cols-md-2 pt-3 pb-5">
                <div className="col mb-4">
                    <div className="card">
                        <img src={project1} className="card-img-top preview-img img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Desktop repair complete</h5>
                            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit labore ex mollitia doloremque suscipit veniam in aspernatur, ipsa fugit.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={project2} className="card-img-top preview-img img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Brand New Desktop setup</h5>
                            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis nesciunt possimus libero maxime vero laborum nulla quas expedita suscipit.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={project3} className="card-img-top preview-img img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Ipad repair</h5>
                            <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis tempore quaerat repellendus exercitationem rem, officiis quae dolorem molestias. Distinctio, dolor!</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={project4} className="card-img-top preview-img img-fluid" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Ipad display replacement</h5>
                            <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia id corrupti veritatis sapiente quasi eaque odio sunt iste excepturi tenetur suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectShow;