/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 9:03 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

// components
import Search from './Search';
import Profile from './Profile';

class Main extends Component {

    render() {
        const { userData, userRepos, onFormSubmit } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <Search onFormSubmit={onFormSubmit} />
                            <Profile userData={userData} userRepos={userRepos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    userData     : PropTypes.object,
    userRepos    : PropTypes.array,
    onFormSubmit : PropTypes.func.isRequired
};

export default Main;
 