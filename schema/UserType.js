/**
 * User: Lior Elrom
 * Date: 3/10/16
 * Time: 9:08 PM
 */

'use strict';

import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from 'graphql';

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'Basic GitHub user information',
    fields: () => ({
        'id'     : { type: GraphQLInt    },
        'login'  : { type: GraphQLString },
        'name'   : { type: GraphQLString },
        'avatar' : {
            type: GraphQLString,
            resolve: gitHubUser => gitHubUser.avatar_url
        },
        'created_at' : { type: GraphQLString },
        'updated_at' : { type: GraphQLString }
    })
});

export default UserType;
