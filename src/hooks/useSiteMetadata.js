import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              github {
                handle
                url
              }
              twitter {
                handle
                url
              }
              linkedin_url
              stackoverflow_url
              devto_url
            }
            cta
            description
            background_color
          }
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
