/**
 * Name: Lior Elrom
 * Date: 3/9/16
 * Time: 8:48 PM
 */

'use strict';

import React from 'react';
import { Component, PropTypes } from 'react';

// components
import RepoList from './RepoList';

class Profile extends Component {

    getUserData() {
        const { userData } = this.props;
        const defaultUserData = {};
        Object.keys(userData).forEach(key => defaultUserData[key] = userData[key] || 'unknown');
        return defaultUserData;
    }

    render() {
        const { userRepos } = this.props;
        const userData = this.getUserData();

        return (
            <div className="panel panel-default profile-wrapper">
                <div className="panel-heading">
                    <h3 className="panel-title">{userData.name}</h3>
                </div>
                <div className="panel-body profile-body">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="thumbnail profile-avatar" src={userData.avatar_url} alt={userData.login} />
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary">{userData.public_repos} Repos</span>
                                    <span className="label label-success">{userData.public_gists} Gists</span>
                                    <span className="label label-info">{userData.followers} Followers</span>
                                    <span className="label label-danger">{userData.following} Following</span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item"><strong>Username:</strong>{userData.login}</li>
                                        <li className="list-group-item"><strong>Location:</strong>{userData.location}</li>
                                        <li className="list-group-item"><strong>Email Address:</strong>{userData.email}</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a href={userData.html_url} className="btn btn-primary" target="_blank">Visit Profile</a>
                        </div>
                    </div>
                    <hr />
                    <h4 className="profile-repos-header">User Repositories</h4>
                    <RepoList userRepos={userRepos} />
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    userData  : PropTypes.object,
    userRepos : PropTypes.array
};

export default Profile;
 