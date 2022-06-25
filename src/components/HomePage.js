import React from "react";
import {Link} from 'react-router-dom';

function HomePage() {
    return <>
        <div className="jumbotron">
            <h1>Plurarsight Administration</h1>
            <p>Some cool React and Flux course app</p>
            <Link to="about" className="btn btn-primary" >About</Link>
        </div>
    </>
}

export default HomePage;