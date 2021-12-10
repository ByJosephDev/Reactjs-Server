import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      categorias: [],
    })

  }



  componentDidMount() {
    axios.get(`https://c24bintegrador.ngrok.io/categorias/listar`)
      .then(res => {
        const categorias = res.data;
        this.setState({ categorias });
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
            <h3>Categorías</h3>
          </header>
          <div class="container  text-center  wow fadeInUp" >
            <div class="row portfolio-container">
              {this.state.categorias.map(categoria => {
                return (

                  <div class="col-12 col-sm-12 col-md-6 col-xl-3  mt-5" key={categoria.id}>
                    <div class="portfolio-wrap">
                      <div class="card" width="18rem">
                        <figure>
                          <Link to={"/producto=" + categoria.id} >
                            <img src={"https://c24bintegrador.ngrok.io/" + categoria.imagen} class="card-img-top" alt="..." width="50" height="200" />
                          </Link>
                        </figure>
                        <h5 class="card-title">{categoria.nombre}</h5>
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

export default CategoryList;