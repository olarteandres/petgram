import React, { Fragment } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Div, Title, Subtitle } from "./styles";

export const Layout = ({ children, title, subtitle }) => {
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          {title && <title>{title}|Petgram🐶</title>}
          {subtitle && <meta name="description" content={subtitle} />}
        </Helmet>
      </HelmetProvider>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </Fragment>
  );
};
