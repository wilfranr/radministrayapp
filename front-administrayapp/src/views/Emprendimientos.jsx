import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function Emprendimientos() {
    return (
        <div>
            <Header></Header>
            <div className="emprendimeintos">
                <br />
                <div className="container text-center mt-3">
                    <h2>EMPRENDIMIENTOS</h2>
                    <a href="/NuevoEmprendimiento">
                        <button className="btn btn-primary" type="button">Nuevo</button>
                    </a><br /><br />
                
                </div>
                <div className="container py-3">
                    <div className="row">
                        <div className="col">
                            <section className="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div className="card">
                                    <div className="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            className="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 className="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p className="card-text">
                                                <i className="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt="" />
                                        <a href="#!">
                                            <div
                                                className="mask"
                                                style={{ background: "rgba(251, 251, 251, 0.15)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className="card-body bg-light">
                                        <p className="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <a
                                                className="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    className="fas fa-heart text-muted p-md-1 my-1 me-0"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="I like it"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <section className="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div className="card">
                                    <div className="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            className="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 className="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p className="card-text">
                                                <i className="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <div
                                                className="mask"
                                                style={{ background: "rgba(251, 251, 251, 0.15)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className="card-body bg-light">
                                        <p className="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <a
                                                className="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    className="fas fa-heart text-muted p-md-1 my-1 me-0"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="I like it"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col">
                            <section className="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div className="card">
                                    <div className="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            className="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 className="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p className="card-text">
                                                <i className="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            className="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <div
                                                className="mask"
                                                style={{ background: "rgba(251, 251, 251,0.18)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className="card-body bg-light">
                                        <p className="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <a
                                                className="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    className="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    className="fas fa-heart text-muted p-md-1 my-1 me-0"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="I like it"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div
                        className="btn-toolbar d-flex justify-content-center mb-3"
                        role="toolbar"
                        aria-label="Toolbar with button groups"
                    >
                        <div className="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-light">Inicio</button>
                            <button type="button" className="btn btn-light">1</button>
                            <button type="button" className="btn btn-light">2</button>
                            <button type="button" className="btn btn-light">3</button>
                            <button type="button" className="btn btn-light">4</button>
                            <button type="button" className="btn btn-light">Fin</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Emprendimientos