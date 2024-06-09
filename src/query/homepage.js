import { graphql } from "gatsby";

export default graphql`
	query HomePageQuery {
		file(relativePath: { eq: "hero-banner-bg.png" }) {
			childImageSharp {
				gatsbyImageData(layout: CONSTRAINED)
			}
		}
	}
`;
