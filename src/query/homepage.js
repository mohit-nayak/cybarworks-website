import { graphql } from "gatsby";

export default graphql`
  query MyQuery {
    allMdx(limit: 10) {
      nodes {
        id
        frontmatter {
          title
          slug
          pubDate
          tags
          banner {
            filename {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
            alt
          }
        }
      }
    }
  }
`;
