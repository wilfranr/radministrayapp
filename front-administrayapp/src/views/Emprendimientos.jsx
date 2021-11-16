import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"

function Emprendimientos() {
    return (
        <div>
            <Header></Header>
            <div class="emprendimeintos">
                <br />
                <div class="container text-center mt-3">
                    <h2>EMPRENDIMIENTOS</h2>
                    <a href="/NuevoEmprendimiento">
                        <button class="btn btn-primary" type="button">Nuevo</button>
                    </a><br /><br />
                <div class="container d-flex justify-content-end col-6 col-md-12">
                    <nav class="navbar navbar-light">
                        <div class="container-fluid">
                            <form class="d-flex">
                                <input
                                    class="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    style={{ color: "white" }}
                                />
                                <button class="btn btn-outline-light" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
                </div>
                <div class="container py-3">
                    <div class="row">
                        <div class="col">
                            <section class="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div class="card">
                                    <div class="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            class="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 class="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p class="card-text">
                                                <i class="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            class="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt="" />
                                        <a href="#!">
                                            <div
                                                class="mask"
                                                style={{ background: "rgba(251, 251, 251, 0.15)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="card-body bg-light">
                                        <p class="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            <a
                                                class="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    class="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    class="fas fa-heart text-muted p-md-1 my-1 me-0"
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
                        <div class="col">
                            <section class="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div class="card">
                                    <div class="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            class="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 class="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p class="card-text">
                                                <i class="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            class="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <div
                                                class="mask"
                                                style={{ background: "rgba(251, 251, 251, 0.15)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="card-body bg-light">
                                        <p class="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            <a
                                                class="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    class="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    class="fas fa-heart text-muted p-md-1 my-1 me-0"
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
                        <div class="col">
                            <section class="mx-auto my-5" style={{ maxwidth: "23rem" }}>
                                <div class="card">
                                    <div class="card-body bg-light d-flex flex-row">
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                                            class="rounded-circle me-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"
                                        />
                                        <div>
                                            <h5 class="card-title font-weight-bold mb-2">
                                                New spicy meals
                                            </h5>
                                            <p class="card-text">
                                                <i class="far fa-clock pe-2"></i>07/24/2018
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="bg-image hover-overlay ripple rounded-0"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            class="img-fluid"
                                            src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                                            alt=""
                                        />
                                        <a href="#!">
                                            <div
                                                class="mask"
                                                style={{ background: "rgba(251, 251, 251,0.18)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div class="card-body bg-light">
                                        <p class="card-text collapse" id="collapseContent">
                                            Recently, we added several exotic new dishes to our restaurant
                                            menu. They come from countries such as Mexico, Argentina, and
                                            Spain. Come to us, have some wine and enjoy our juicy meals
                                            from around the world.
                                        </p>
                                        <div class="d-flex justify-content-between">
                                            <a
                                                class="btn btn-link link-danger p-md-1 my-1"
                                                data-mdb-toggle="collapse"
                                                href="#collapseContent"
                                                role="button"
                                                aria-expanded="false"
                                                aria-controls="collapseContent"
                                            >Read more</a
                                            >
                                            <div>
                                                <i
                                                    class="fas fa-share-alt text-muted p-md-1 my-1 me-2"
                                                    data-mdb-toggle="tooltip"
                                                    data-mdb-placement="top"
                                                    title="Share this post"
                                                ></i>
                                                <i
                                                    class="fas fa-heart text-muted p-md-1 my-1 me-0"
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
                        class="btn-toolbar d-flex justify-content-center mb-3"
                        role="toolbar"
                        aria-label="Toolbar with button groups"
                    >
                        <div class="btn-group me-2" role="group" aria-label="First group">
                            <button type="button" class="btn btn-light">Inicio</button>
                            <button type="button" class="btn btn-light">1</button>
                            <button type="button" class="btn btn-light">2</button>
                            <button type="button" class="btn btn-light">3</button>
                            <button type="button" class="btn btn-light">4</button>
                            <button type="button" class="btn btn-light">Fin</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Emprendimientos