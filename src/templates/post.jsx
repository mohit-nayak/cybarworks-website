import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import MainLayout from "../components/layouts/main-layout";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <MainLayout>
      <h1 className="text-3xl text-secondary-dark">
        {data.mdx.frontmatter.title}
      </h1>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </MainLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
