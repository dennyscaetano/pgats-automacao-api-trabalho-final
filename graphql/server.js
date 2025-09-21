// server.js para ApolloServer
const app = require('./app')
const HOST = '0.0.0.0' // importante para CI

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`🚀 GraphQL server running at http://${HOST}:${PORT}/graphql`)
})
