const { gql } = require('apollo-server-express');


 const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: Date
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;





module.exports = typeDefs;