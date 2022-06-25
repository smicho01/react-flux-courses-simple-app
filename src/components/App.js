import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import AboutPage from "./About";
import CoursesPage from "./CoursesPage";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./common/ManageCoursePage";
import { ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App () {
    
    return <>
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/course/:slug/:id' component={ManageCoursePage} />
                <Route path='/course' component={ManageCoursePage} />
                <Redirect from="/about-page" to="/about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </>
    
}

export default App;
