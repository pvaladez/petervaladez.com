import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  /* Need to further optimiz images below -- maybe make them fixed GatsbyImageSharpFluid_withWebp/GatsbyImageSharpFixed_withWebp */
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM Do, YYYY")
              author
              title
              thumb_image {
                childImageSharp {
                  fixed( width: 250, height: 250 ) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}