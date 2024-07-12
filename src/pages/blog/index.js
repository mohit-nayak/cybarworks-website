import React from "react";
import { graphql } from "gatsby";
import MainLayout from "../../components/layouts/main-layout";
import BlogBanner from "../../components/sections/blog/blog-banner";
import BlogListWithCategories from "../../components/sections/blog/blog-list-with-categories";
import BlogCTA from "../../components/sections/blog/blog-cta";

const BlogPage = ({ location, data }) => {
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("category");
  
  return (
    <MainLayout>
      <BlogBanner />
      <BlogListWithCategories
        posts={data.allMdx.nodes}
        activeCategory={activeCategory}
      />
      <BlogCTA />
    </MainLayout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx {
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

export default BlogPage;

export const Head = () => <title>Blog - CybarWorks</title>;