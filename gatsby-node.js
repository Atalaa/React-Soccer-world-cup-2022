/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

// const fetch = require("node-fetch")

// const NODE_TYPE = "Country"
// exports.sourceNodes = async ({
//   actions,
//   createNodeId,
//   createContentDigest,
// }) => {
//   const { createNode } = actions
//   const response = await fetch("https://restcountries.com/v3.1/all")
//   const countries = await response.json()

//   countries.forEach((node, index) => {
//     createNode({
//       ...node,
//       id: createNodeId(`${NODE_TYPE}-${index}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: NODE_TYPE,
//         content: JSON.stringify(node),
//         contentDigest: createContentDigest(node),
//       },
//     })
//   })
// }
