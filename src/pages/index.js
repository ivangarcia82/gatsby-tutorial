import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello From Gatsby</h1>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
