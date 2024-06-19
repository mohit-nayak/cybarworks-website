import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import MainLayout from "../components/layouts/main-layout";
import PostBanner from "../components/sections/blog-post/post-banner";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
  const bannerImgData = {
    image:
      data?.mdx?.frontmatter?.banner?.filename?.childImageSharp
        ?.gatsbyImageData,
    alt: data?.mdx?.frontmatter?.banner?.alt,
  };

  return (
    <MainLayout>
      <PostBanner
        title={data.mdx.frontmatter.title}
        date={data.mdx.frontmatter.pubDate}
        tags={data.mdx.frontmatter.tags}
        bannerImgData={bannerImgData}
      />
      <MDXProvider components={shortcodes}>
        <div className="mx-auto max-w-3xl p-6 lg:px-8">{children}</div>
      </MDXProvider>
    </MainLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
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
`;
