/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 8:36 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-wrapper">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">GitHub Profiles</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
 