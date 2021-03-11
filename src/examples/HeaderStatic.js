import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            person {
              name
              age
            }
            author
            data
            description
            title
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.person.name}</h4>}
  ></StaticQuery>
)

export default ComponentName
