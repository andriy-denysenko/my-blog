// Import React
import * as React from 'react'
import Layout from '../components/layout'

// Define a component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my first Gatsby Blog.</p>
    </Layout>
  )
}
//  Add the title
export const Head = () => <title>Home Page</title>

//  Export a page
export default IndexPage