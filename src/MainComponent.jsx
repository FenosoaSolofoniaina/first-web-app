import { useEffect, useState } from "react";
import { ShowDetails, ShowImages, ShowMainInformation } from "./Components";

import { fetchDataFrom } from './utils/utilities';



export function MyHeader() {

    // Attend le chargment des données
    let [loading, setLoading] = useState(true);

    // Le logo et la marque
    let [dataBrand, setDataBrand] = useState(null);
    
    // La barre de navigation
    let [dataNav, setDataNav] = useState(null);
    
    useEffect( () => {
        setLoading(true);
        let loadDataBrand = async () => {
            let data = await fetchDataFrom('/data/brand.json');
            setDataBrand(data);
        }
        let loadDataNav = async () => {
            let data = await fetchDataFrom('/data/navbar.json');
            setDataNav(data);
        }

        loadDataBrand();
        loadDataNav();
        setLoading(false);

    }, []);

    return (
        <nav className="navbar navbar-expand bg-body-secondary">
            <div className="container-fluid">
                { loading && <p>Chargmenent ...</p> }
                
                {/* Ajout du brand */}
                { !loading && dataBrand && 
                    <div className="navbar-brand" data-type={dataBrand.type}>
                        <img src={dataBrand.image.src} alt={dataBrand.image.alt}
                            width={dataBrand.image.width} height={dataBrand.image.height}
                            className="img-thumbnail mx-2"/>
                            {dataBrand.title}
                    </div>
                }
                {/* Ajout du Navbar */}
                <ul className="navbar-nav justify-start">
                { !loading && dataNav && dataNav.map( (nav, index) => 
                        <li className="nav-item" data-index={index}>
                            {
                                (nav.isActive) ?
                                <button href={nav.url} className='nav-link fw-bold active' data-prop-name={nav.name}>
                                    {nav.title}
                                </button>
                                :
                                <a href={nav.url} className='nav-link' data-prop-name={nav.name}>
                                    {nav.title}
                                </a>
                            }
                        </li>        
                    )
                }
                </ul>
                <form action="#" className="d-flex" role="search">
                    <input type="search" name="page-search" id="page-search" placeholder="Search..." className="form-control"/>
                    <button className="mx-2 btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}


export function MyMainContent() {

    let [loading, setLoading] = useState(true);
    let [imageData, setImageData] = useState([]);

    useEffect( () => {
        setLoading(true);
        let loadImages = async () => {
            let data = await fetchDataFrom('/media/images/images.json');
            setImageData(data);
        }

        loadImages();
        setLoading(false)

    }, []);

    return (
        <section className="container my-5">
            <div className="row">
                {/* Show the images */}
                <div className="mx-2 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    { !loading && imageData.length &&
                    <ShowImages dataImages={imageData} /> }
                </div>

                {/* Show informations */}
                <div className="mx-2 col">
                    <ShowMainInformation />
                    <ShowDetails />
                </div>
            </div>
        </section>
    );
}


export function MyFooter() {
    return (
        <footer className="navbar bg-body-secondary">
            <ul className="navbar-nav container m-2">
                <li className="nav-item">
                    The footer 2
                </li>
                <li className="nav-item">The footer 1</li>
                <li className="nav-item">The footer 3</li>
                <li className="nav-item">The footer 4</li>
            </ul>
        </footer>
    );

}