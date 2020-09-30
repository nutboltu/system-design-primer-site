import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Sidebar } from './styles/Sidebar';

const SidebarLayout = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={() => {
      let finalNavItems;

      if (finalNavItems && finalNavItems.length) {
        return (
          <Sidebar>
            <ul className={'rightSideBarUL'}>
              <li className={'rightSideTitle'}>CONTENTS</li>
              {finalNavItems}
            </ul>
          </Sidebar>
        );
      } else {
        return (
          <Sidebar>
            <ul></ul>
          </Sidebar>
        );
      }
    }}
  />
);

export default SidebarLayout;
