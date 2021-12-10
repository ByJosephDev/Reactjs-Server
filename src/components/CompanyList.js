import React from 'react'
import axios from 'axios';

class CompanyList extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            empresas: [],
        })

    }

    componentDidMount() {
        axios.get(`https://c24bintegrador.ngrok.io/empresas/listar`)
            .then(res => {
                const empresas = res.data;
                this.setState({ empresas });
            })
    }


    render() {
        return (

            <section id="portfolio" >
                <div class="container">
                    <div>
                        <br /><br /><br /><br />
                    </div>
                    <header class="section-header">
                        <h3>Empresas</h3>
                    </header>
                    <div class="container-fluid mt-5 text-center wow fadeInUp" >
                        <div class="row portfolio-container mb-2">
                            {this.state.empresas.map(empresa => {
                                return (

                                    <div class="card mt-2 mb-2" >
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={"https://c24bintegrador.ngrok.io/" + empresa.imagen} width="50%" height="100%" class="rounded-start" />
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">{empresa.nombre}</h5>
                                                    <p class="card-text">{empresa.descripcion}</p>
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

export default CompanyList;