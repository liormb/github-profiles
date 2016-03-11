/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 8:50 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

class Search extends Component {

    handleSubmit(event) {
        const { onFormSubmit } = this.props;
        const username = this.refs.username.value.trim();

        event.preventDefault();

        if (username) {
            this.refs.username.value = '';
            onFormSubmit(username);
        }
    }

    render() {
        const { onFormSubmit } = this.props;
        return (
            <div className="search-wrapper">
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="">Search GitHub Users</label>
                    <input type="text" className="form-control" placeholder="Please enter a username" ref="username" />
                </form>
            </div>
        );
    }
}

Search.propTypes = {
    onFormSubmit: PropTypes.func.isRequired
};

export default Search;
 