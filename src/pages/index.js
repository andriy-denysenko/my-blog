// Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Define a component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my first Gatsby Blog.</p>
      <StaticImage
        alt="Two girls looking at Christmas tree free photo by Comstock"
        src="../images/image.jpg"
      />
    </Layout>
  )
}
//  Add the title
export const Head = () => <title>Home Page</title>

//  Export a page
export default IndexPage