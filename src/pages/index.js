import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Product from "../components/sections/product"
import Features from "../components/sections/features"
import Pricing from "../components/sections/pricing"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Features />
    <Product />
    <Pricing />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
