import React, { Component } from 'react'
import axios from 'axios';

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            productos: [],
        })

    }

    componentDidMount() {
        axios.get(`https://c24bintegrador.ngrok.io/productos/listar`)
            .then(res => {
                const productos = res.data;
                this.setState({ productos });
            })
    }

    render() {
        return (
            <section id="portfolio" >
                <div class="container " >
                    <div>
                        <br /><br /><br /><br />
                    </div>
                    <header class="section-header">
                        <h3 class="section-title">Productos</h3>
                    </header>
                    <div class="container mt-5 text-center wow fadeInUp" >
                        <div class="row">

                            {this.state.productos.map(producto => {
                                return (

                                    <div class="col-12 col-sm-12 col-md-6 col-xl-3 portfolio-item filter-app " key={producto.id_producto}>
                                        <br />
                                        <div class="portfolio-wrap">
                                            <div class="card" width="18rem">
                                                <figure>
                                                    <img src={"https://c24bintegrador.ngrok.io/" + producto.imagen} class="card-img-top" alt="..." width="50" height="200" />
                                                    <a href={"https://c24bintegrador.ngrok.io/" + producto.imagen} data-lightbox="portfolio" data-title={producto.nombre} class="link-preview" title="Vista"><i class="ion ion-eye"></i></a>
                                                    <a href={producto.paginacompra} target="_blank" class="link-payment" title="Comprar"><i class="ion ion-card"></i></a>
                                                    <a href={producto.paginaweb} target="_blank" class="link-details" title="Más información"><i class="ion ion-android-open"></i></a>

                                                    <div class="card-body">
                                                        <h5 class="card-title">{producto.nombre}</h5>
                                                    </div>
                                                </figure>

                                                <div class="portfolio-info">
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><b>Precio:</b> S/{producto.precio}</li>
                                                        <li class="list-group-item"><b>Categoria:</b>  {producto.categoria}</li>
                                                        <li class="list-group-item"><b>Empresa:</b>  {producto.empresa}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                );
                            }
                            )}
                        </div>
                    </div>
                </div>

            </section>
        );

    }
}

export default ProductList;