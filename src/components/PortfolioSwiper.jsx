import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';
import '../styles/components/portfolioSwiper.scss';
/* import 'swiper/css/swiper.min.css'; */
import execDashVid from '../../content/images/portfolio/executive-dashboard.mp4';
import analyticsVid from '../../content/images/portfolio/web-analytics.mp4';

export default function PortfolioSwiper() {
  const query = useStaticQuery(graphql`
  query sliderImages {
    portfolioImage1: file(relativePath: { eq: "portfolio/myaccount01-collage.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage2: file(relativePath: { eq: "portfolio/iphone-myaccount-reports-collage.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage3: file(relativePath: { eq: "portfolio/point-of-sale.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage4: file(relativePath: { eq: "portfolio/kpi-trends-collage.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage5: file(relativePath: { eq: "portfolio/iphone-myaccount-reports-collage.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage6: file(relativePath: { eq: "portfolio/point-of-sale.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage7: file(relativePath: { eq: "portfolio/report-graphical-gene.jpg" }) {
      ...portfolioImageSharp
    }
    portfolioImage8: file(relativePath: { eq: "portfolio/alterascape.com.jpg" }) {
      ...portfolioImageSharp
    }
  }
  fragment portfolioImageSharp on File{
    childImageSharp {
      id
      fluid(maxHeight: 840, maxWidth: 1068, fit: CONTAIN, background: "#ffffff") {
        ...GatsbyImageSharpFluid
      }
    }
  }
  `);
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: '1',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <Swiper {...params}>
      <div>
        <Img fluid={query.portfolioImage1.childImageSharp.fluid} />
      </div>
      <div><Img fluid={query.portfolioImage2.childImageSharp.fluid} /></div>
      <div>
        <video controls>
          <source src={execDashVid} type="video/mp4" />
        </video>
      </div>
      <div><Img fluid={query.portfolioImage3.childImageSharp.fluid} /></div>
      <div>
        <video controls>
          <source src={analyticsVid} type="video/mp4" />
        </video>
      </div>
      <div><Img fluid={query.portfolioImage4.childImageSharp.fluid} /></div>
      <div><Img fluid={query.portfolioImage5.childImageSharp.fluid} /></div>
      <div><Img fluid={query.portfolioImage6.childImageSharp.fluid} /></div>
      <div><Img fluid={query.portfolioImage7.childImageSharp.fluid} /></div>
      <div><Img fluid={query.portfolioImage8.childImageSharp.fluid} /></div>
    </Swiper>
  );
}
