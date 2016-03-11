/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 8:49 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

class Repo extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const { repo: { html_url, name, description } } = this.props;
        return (
            <li className="list-group-item">
                <a href={html_url} target="_blank">{name}</a> : {description}
            </li>
        );
    }
}

Repo.propTypes = {
    repo: PropTypes.any
};

export default Repo;
 