/**
 * User: Lior Elrom
 * Date: 3/9/16
 * Time: 8:29 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import qs from 'qs';

// components
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            username: 'liormb',
            userData: {},
            userRepos: [],
            perPage: 10,
            needToFetch: true
        }
    }

    onFormSubmit(username) {
        this.setState({
            username,
            needToFetch: true
        });
    }

    fetchUserData(uri = '', options = {}) {
        const baseUrl = 'https://api.github.com/users';
        const { username } = this.state;
        const { clientId, clientSecret } = this.props;
        const uriParam = uri ? `/${uri}` : '';

        const params = Object.assign({}, options, {
            'client_id': clientId,
            'client_secret': clientSecret
        });

        const url = `${baseUrl}/${username}${uriParam}?${qs.stringify(params)}`;
        return axios.get(url).then(res => res.data);
    }

    fetchGitHubData() {
        const { perPage } = this.state;

        return Promise.all([
            this.fetchUserData(),
            this.fetchUserData('repos', {
                'per_page': perPage,
                'sort': 'created'
            })
        ]).then((data) => {
            this.setState({
                userData: data[0],
                userRepos: data[1],
                needToFetch: false
            });
        });
    }

    componentDidMount() {
        this.fetchGitHubData();
    }

    componentDidUpdate() {
        if (this.state.needToFetch) {
            this.fetchGitHubData();
        }
    }

    render() {
        const { userData, userRepos } = this.state;
        return (
            <div>
                <Navbar />
                <Main userData={userData} userRepos={userRepos} onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

App.propTypes = {
    clientId     : PropTypes.string,
    clientSecret : PropTypes.string
};

App.defaultProps = {
    clientId     : '',
    clientSecret : ''
};

export default App;
