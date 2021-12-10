import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Formulario extends React.Component {

  constructor(props) {

    super(props);
    this.state = ({
      productos: [],
      id_formulario: null,
      nombres: '',
      celular: '',
      email: '',
      direccion: '',
      ciudad: '',
      pais: 'Perú',
      id_producto: '',
      estado: 'Pendiente'
    })
    this.guardar = this.guardar.bind(this);
    this.cambioNombres = this.cambioNombres.bind(this);
    this.cambioCelular = this.cambioCelular.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioDireccion = this.cambioDireccion.bind(this);
    this.cambioCiudad = this.cambioCiudad.bind(this);
    this.cambioPais = this.cambioPais.bind(this);
    this.cambioId_producto = this.cambioId_producto.bind(this);

  }

  componentDidMount() {

    localStorage.setItem("id", this.props.match.params.id);

    var cAux = localStorage.getItem("id");

    axios.get(`https://c24bintegrador.ngrok.io/productos/producto/` + cAux)
      .then(res => {
        this.setState({ productos: res.data });
      })

  }

  

  cambioNombres(e) {
    this.setState({
      nombres: e.target.value
    })
  }

  cambioCelular(e) {
    this.setState({
      celular: e.target.value
    })
  }

  cambioEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  cambioDireccion(e) {
    this.setState({
      direccion: e.target.value
    })
  }

  cambioCiudad(e) {
    this.setState({
      ciudad: e.target.value
    })
  }

  cambioPais(e) {
    this.setState({
      pais: e.target.value
    })
  }

  cambioId_producto(e) {
    this.setState({
      id_producto: e.target.value
    })
  }

  guardar(e) {

    e.preventDefault();
    let datos = {
      nombres: this.state.nombres,
      celular: this.state.celular,
      email: this.state.email,
      direccion: this.state.direccion,
      ciudad: this.state.ciudad,
      pais: this.state.pais,
      id_producto: this.state.id_producto,
      estado: 'Pendiente'
    }
    axios.post('https://c24bintegrador.ngrok.io/formulario/insertar/', datos)
      .then(function (response) {
        console.log(response);
        window.location = '/success';
      })
      .catch(function (error) {
        console.log(error);
        window.location = '/error';
      });

  }

  render() {

    return (

      <section id="portfolio">
        <div class="container">
          <div>
            <br /><br /><br /><br />
          </div>
          <header class="section-header " >
            <h3 class="section-title">Formulario de verificación</h3>
          </header>
          <div class="mt-2 alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Hola comprador!</strong> es obligatorio que llene este formulario tras su compra para la entrega de su producto, en caso contrario, se le cancelara la compra.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          {this.state.productos.map(producto => {
            return (

              <div class="container text-center  mt-4 p-3 bg-light border-mine">
                <form class="row g-3" onSubmit={this.guardar}>
                  <div class="col-md-12">
                    <label class="form-label">Nombre y apellido</label>
                    <input type="text" class="form-control" onChange={this.cambioNombres} required />
                  </div>

                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">Celular</label>
                    <input type="text" class="form-control" id="inputCity" onChange={this.cambioCelular} required />
                  </div>

                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" onChange={this.cambioEmail} required />
                  </div>

                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="inputAddress" onChange={this.cambioDireccion} required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">Ciudad</label>
                    <input type="text" class="form-control" onChange={this.cambioCiudad} required />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">País</label>
                    <input type="text" class="form-control" onChange={this.cambioPais} value="Perú" readOnly required />
                  </div>
                  <div class="col-12 ">
                    <div>
                      <div class="row">
                        <div class="col-4">
                        </div>
                        <div class="col-4 col-sm-4 col-md-4 col-xl-4" key={producto.id_producto}>
                          <figure>
                            <img src={"https://c24bintegrador.ngrok.io/" + producto.imagen} class="card-img-top" alt="..." width="100%" height="150" />
                          </figure>
                        </div>
                        <div class="col-4">
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5">

                        </div>
                        <div class="col-12 col-md-2 col-lg-2 col-xl-2 p-4">
                          <label class="form-label">¿Aceptas los <Link to="/tyc" target="_blank" >términos y condiciones</Link>?</label>
                          <select class="form-control" onChange={this.cambioId_producto} required>
                            <option></option>
                            <option value={producto.id_producto}>Sí</option>
                          </select>
                        </div>
                        <div class="col-lg-5 col-xl-5 col-md-5">

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <input id="btnCompra" type="submit" class="btn btn-warning" value="Comprar" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

            );
          })
          }
        </div>
      </section>

    )

  }

}

export default Formulario;