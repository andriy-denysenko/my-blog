// Import React
import * as React from 'react'
import Layout from '../components/layout'

// Define a component
const AboutPage = () => {
  return (
    <Layout pageTitle="About My Blog">
      <p>Hi there! I built this blog with Gatsby.</p>
    </Layout>
  )
}

//  Add the title
export const Head = () => <title>About Page</title>

// Step 3: Export the component
export default AboutPage