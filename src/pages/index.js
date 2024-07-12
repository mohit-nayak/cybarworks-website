import * as React from "react";
import { graphql } from "gatsby";
import MainLayout from "../components/layouts/main-layout";
import HowWeHelp from "../components/sections/how-we-help";
import WhoWeAre from "../components/sections/who-we-are";
import HomepageWhyChooseUs from "../components/sections/why-choose-us";
import BlogCarousel from "../components/sections/blog-carousel";
import HomepageMetrics from "../components/sections/homepage/homepage-metrics";
import HomepageHeroBanner from "../components/sections/homepage/homepage-hero-banner";
import HomepageTestimonials from "../components/sections/homepage/homepage-testimonials";
import HomepageCta from "../components/sections/homepage/homepage-cta";

const HomePage = ({ data }) => {
  const blogPosts = data.allMdx.nodes;

  return (
    <MainLayout>
      <HomepageHeroBanner />
      <HowWeHelp />
      <WhoWeAre />
      <HomepageWhyChooseUs />
      <HomepageMetrics />
      <HomepageTestimonials />
      <BlogCarousel blogPosts={blogPosts} />
      <HomepageCta />
    </MainLayout>
  );
};

export const query = graphql`
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

export default HomePage;

export const Head = () => <title>CybarWorks</title>;
