import { graphql, useStaticQuery } from 'gatsby';

export default function usePortfolioImages() {
  return (useStaticQuery(graphql`
    query sliderImages {
      portfolioImage1: file(relativePath: {eq: "portfolio/myaccount01-collage.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage2: file(relativePath: {eq: "portfolio/iphone-myaccount-reports-collage.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage3: file(relativePath: {eq: "portfolio/product-page-collage.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage4: file(relativePath: {eq: "portfolio/social-collage.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage5: file(relativePath: {eq: "portfolio/jwinters-site-collage.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage6: file(relativePath: {eq: "portfolio/ipad-party-central.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage7: file(relativePath: {eq: "portfolio/point-of-sale.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage8: file(relativePath: {eq: "portfolio/executive-dashboard-thumbnail.jpg"}) {
        childImageSharp {
          id
          fluid(maxHeight:600, maxWidth: 1068, fit: CONTAIN, background: "#ffffff") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioImage9: file(relativePath: {eq: "portfolio/web-analytics-thumbnail.jpg"}) {
        childImageSharp {
          id
          fluid(maxHeight:600, maxWidth: 1068, fit: CONTAIN, background: "#ffffff") {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfolioImage10: file(relativePath: {eq: "portfolio/report-graphical-gene.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage11: file(relativePath: {eq: "portfolio/alterascape.com.jpg"}) {
        ...portfolioImageSharp
      }
    }
    fragment portfolioImageSharp on File {
      childImageSharp {
        id
        fluid(maxWidth: 1068, fit: CONTAIN, background: "#ffffff") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `));
}
