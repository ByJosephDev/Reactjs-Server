import React from "react";


class Home extends React.Component {

  render() {
    return (
      <div>

        <section id="intro">
          <div class="intro-container">
            <div id="introCarousel" class="carousel  slide carousel-fade" data-ride="carousel">

              <ol class="carousel-indicators"></ol>

              <div class="carousel-inner" role="listbox">
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://cwsmgmt.corsair.com/landing/home/images/Corsair_iCue_Room_Rainbow_Explore_Static-resized.jpg" class="d-block p-0 m-0" width="100%" height="100%" />
                </div>
                <div class="carousel-item">
                  <img src="https://cdn.shopify.com/s/files/1/0265/5561/3230/collections/Razer_Logo2_1200x1200.png?v=1601897571" class="d-block p-0 m-0" width="100%" height="100%" />
                </div>
                <div class="carousel-item">
                  <img src="https://media.kingston.com/hyperx/hero/hx-hero-mousepad-fury-ultra-lg.jpg" class="d-block p-0 m-0" width="100%" height="100%" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>

              <a class="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>


        <main id="main">

          <section id="about">
            <div class="container">

              <header class="section-header2">
                <h3>Sobre nosotros</h3>
                <p>
                  Somos una web que junta las mejores ofertas de tecnología de diferentes tiendas oficiales, juntándolas en
                  un solo lugar donde el cliente podra hacer la compra de manera fácil, rápida y sencilla.
                </p>
              </header>

              <div class="row about-cols">

                <div class="col-md-6 ">
                  <div class="about-col">
                    <div class="img">
                      <img src="img/about-mission.jpg" alt="" class="img-fluid" />
                      <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                    </div>
                    <h2 class="title">Misión</h2>
                    <p>
                      Dejar al alcance del cliente las mejores ofertas de empresas tecnológicas con prestigio para que puedan ahorrar
                      tiempo y dinero al no tener que revisar página por página individualmente.
                    </p>
                  </div>
                </div>


                <div class="col-md-6 " data-wow-delay="0.2s">
                  <div class="about-col">
                    <div class="img">
                      <img src="img/about-vision.jpg" alt="" class="img-fluid" />
                      <div class="icon"><i class="ion-ios-eye-outline"></i></div>
                    </div>
                    <h2 class="title">Visión</h2>
                    <p>
                      Convertirnos en una web reconocida por su calidad y sinceridad al mostrar los productos y a futuro tener convenios con empresas que quieran
                      lucir, en el mercado peruano, sus ofertas.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>
          <section id="team">
            <div class="container">
              <div class="section-header2 wow fadeInUp">
                <h3>Equipo</h3>
                <p>Equipo de desarrollo de esta pagina web</p>
              </div>

              <div class="row">

                <div class="col-lg-4 col-md-6 wow fadeInUp">
                  <div class="member">
                    <img src="img/team-1.jpeg" class="img-fluid" alt="" width="500rem" />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Joseph Cconislla Puma</h4>
                        <span>Encargado del Backend</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="member">
                    <img src="img/team-2.jpeg" class="img-fluid" alt="" width="500rem" />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Micaela Rojas Avendaño</h4>
                        <span>Encargado del frontend</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                  <div class="member">
                    <img src="img/team-3.jpg" class="img-fluid" alt="" width="500rem" />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Martin Romani Delgado</h4>
                        <span>Encargado del frontend</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>

        </main>

        <footer id="footer">
          <div class="container">
            <div class="copyright">
              Copyright &copy;  <strong>Proyecto Integrador</strong>.
            </div>
            <div class="credits">
              Grupo 4B 6/12/2021
            </div>
          </div>
        </footer>


      </div>




    );
  }

}


export default Home;