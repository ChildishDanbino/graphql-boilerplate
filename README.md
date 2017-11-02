# graphql-boilerplate
GraphQL Boilerplate using KOA built for scability. Allows for multiple connections for various services.

To Install:

Clone Repo and Run:

```javascript
npm install
npm run dev
```

Graph will start on port 3003: You can play around with the GoogleMaps API by going to:

```http://localhost:3003/graphiql```

Example Query:

```javascript
query getCoordinates {
  coordinates(
    adddressLine1: "123 My Test Lane"
    city: "San Francisco"
    state: "CA"
  ) {
    latitude
    longitude
  }
}
```

[Interested in contributing?](https://github.com/Daadler6/graphql-boilerplate/blob/master/CONTRIBUTING.md)