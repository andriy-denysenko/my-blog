// Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define a component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>Hi there! I built this blog with Gatsby.</p>
    </Layout>
  )
}

//  Add the title
export const Head = () => <Seo title="About" />

// Step 3: Export the component
export default AboutPage