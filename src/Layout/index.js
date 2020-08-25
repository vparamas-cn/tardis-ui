import React, { Fragment } from "react";
import "./main.scss";
import { Header, Bottom, Aside } from "../components";
function Layout(props) {
    return (
        <Fragment>
            <div className="tardis-container">
                <Header />
                <main id="maincontent">
                    {props.children}
                </main>
                <Bottom />
                <Aside />
            </div>
            <div id="snackbar"></div>
        </Fragment>
    );
}

export default Layout;
