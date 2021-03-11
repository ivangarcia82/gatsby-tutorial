import React from "react"
import Layout from "../components/Layout"
import * as styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>Blog Page</h1>
        <p className={styles.text}>
          Lorem impsum ojdoiasjdsaidjasiodjai djsaio djsiao djasio ajdioas
          jdaois dajoia jdoias jdaiod ajiodj aiodajio
        </p>
      </div>
    </Layout>
  )
}

export default blog
