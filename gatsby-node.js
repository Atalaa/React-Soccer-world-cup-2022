/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require("node-fetch")

exports.sourceNodes = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all")
  const countries = await response.json()

  countries.map(el => {
    console.log(el.name.common, el.flag)
  })
}
