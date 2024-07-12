import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="gtag-manager"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-RC6D3FD8DQ"
    ></script>,
    <script
      key="gtag-script"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RC6D3FD8DQ');
        `,
      }}
    ></script>,
  ]);
};
