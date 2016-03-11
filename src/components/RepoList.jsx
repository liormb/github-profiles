/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 8:49 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

// components
import Repo from './Repo';

class RepoList extends Component {

    render() {
        const { userRepos } = this.props;
        return (
            <div className="repo-list-wrapper">
                <ul className="list-group">
                    {userRepos.map(repo =>
                        <Repo
                            key={repo.id}
                            repo={repo}
                            {...this.props}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

RepoList.propTypes = {
    userRepos: PropTypes.any
};

export default RepoList;
 