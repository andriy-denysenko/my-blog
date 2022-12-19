// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define a component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is my first Gatsby Blog.</p>
    </Layout>
  )
}
//  Add the title
export const Head = () => <Seo title="Home Page" />

//  Export the page
export default IndexPage
