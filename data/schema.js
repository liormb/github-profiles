/**
 * User: Lior Elrom
 * Date: 3/10/16
 * Time: 8:05 PM
 */

'use strict';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} from 'graphql';

import axios from 'axios';
import User from './../schema/UserType';

const GITHUB_API = 'https://api.github.com';

const query = new GraphQLObjectType({
    name: 'Query',
    description: 'GitHub GraphQL Server',
    fields: () => ({
        user: {
            type: User,
            description: 'GitHub user API data',
            args: {
                username: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'The GitHub username'
                }
            },
            resolve: (_, {username}) => {
                const url = `${GITHUB_API}/users/${username}`;
                return axios.get(url).then(res => res.data);
            }
        }
    })
});

const schema = new GraphQLSchema({ query });

export default schema;
