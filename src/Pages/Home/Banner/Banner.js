import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>

            {/* carosuel  bannner */}

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                {/* carosuel button  */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">
                      {/* item-1 */}
                      <div className="carousel-item ">
                        
                        <img  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/10_25_movember_board/cover_movember_board.jpg" className="d-block w-100 banner-height img-fluid" alt="..."/>
                        <div className="carousel-caption text-white fw-bold d-none d-md-block">
                            <h2 className="brand-name">Sigma AutoMobile</h2>
                            <p>Here’s our Chairman and CEO Stephan Winkelmann, together with some the members of Lamborghin’s Board and Management addressing the initiative as you’ve never heard them before.</p>
                        </div>
                        </div>
                    {/* item-2  */}
                    <div className="carousel-item active " data-bs-interval="10000">
                        
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/02_evo_rwd.jpg" className="d-block w-100  banner-height img-fluid" alt="..."/>
                    {/* <img src="https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt="..."/> */}
                    <div className="carousel-caption text-white  d-none d-md-block">
                        <h2 className="brand-name text-warning">SIAN FKP-35</h2>
                        <p className="fs-6">Fuel consumption and emission values of Huracán Evo RWD- Fuel consumption combined: 13,8 l/100km ; CO2-emissions combined: 330 g/km (WLTP)</p>
                        <button  className="bg-warning fw-bold rounded-3 border-0 p-2 text-dark">Learn More</button>
                    </div>
                    </div>

                    {/* item-3 */}
                    <div className="carousel-item " data-bs-interval="2000">
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/03_sian_fkp_37.jpg" className="d-block w-100 banner-height img-fluid" alt="..."/>
                    <div className="carousel-caption text-white d-none d-md-block">
                        <h3 className="brand-name">HURAKHAN EVO RWD</h3>
                        <p className="text-white fs-6">Fuel consumption and emission values of Huracán Evo RWD- Fuel consumption combined: 13,8 l/100km ; CO2-emissions combined: 330 g/km (WLTP)</p>
                    </div>
                    </div>

                    {/* item-4 */}
                    <div className="carousel-item ">
                        
                    <img  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/01_aventador_ultimae.jpg" className="d-block w-100 banner-height img-fluid" alt="..."/>
                    <div className="carousel-caption text-white fw-bold d-none d-md-block">
                        <h3 className="brand-name ">AVENTADO LP780-D</h3>
                        <p className="fs-6 text-white ">Fuel consumption and emission values of Huracán Evo RWD- Fuel consumption combined: 13,8 l/100km ; CO2-emissions combined: 330 g/km (WLTP)</p>
                    </div>
                    </div>
                    {/* item-5*/}
                    <div className="carousel-item ">
                        
                    <img  src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2021/11_10_what3words/what3words_cover.jpg" className="d-block w-100 banner-height img-fluid" alt="..."/>
                    <div className="carousel-caption text-white fw-bold d-none d-md-block">
                        <h3 className="brand-name ">HURACÁN</h3>
                        <p className="fs-6 text-white ">
                        By dividing the globe into 57 trillion 10-foot squares and giving each one a unique  3-word combination – an actual address </p>
                    </div>
                    </div>
                  
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </div>
    );
};

export default Banner;