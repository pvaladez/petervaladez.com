import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';
import '../styles/components/portfolioSwiper.scss';
/* import 'swiper/css/swiper.min.css'; */
import execDashVid from '../../content/images/portfolio/executive-dashboard.mp4';
import execDashVidSmall from '../../content/images/portfolio/executive-dashboard-small.mp4';
import analyticsVid from '../../content/images/portfolio/web-analytics.mp4';
import analyticsVidSmall from '../../content/images/portfolio/web-analytics-small.mp4';

export default function PortfolioSwiper() {
  const query = useStaticQuery(graphql`
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
      portfolioImage8: file(relativePath: {eq: "portfolio/report-graphical-gene.jpg"}) {
        ...portfolioImageSharp
      }
      portfolioImage9: file(relativePath: {eq: "portfolio/alterascape.com.jpg"}) {
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
        <div className="swiperDescription">
          <p>
            • inPowerSuite® member dashboard using jQuery, Bootstrap, SwiperJS, and Font Awesome
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage2.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® dashboard included many reporting and utility pages
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
            Made use of Google Charts and various jQuery plugins
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage3.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® includes a full e-Commerce Storefront, supporting mobile and desktop
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage4.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® integrates with social media networks to allow site members to share
            their favorite products for points toward a reward system
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage5.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® allows members to create personal websites with their favorite featured
            products
            <br />
            • Responsible for CSS, Javascript, and modified the existing PHP template to
            accommodate extra data fields as well as a new HTML5 layout.  Made use of SwiperJS for
            navigating between site pages in the template shown.
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage6.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® features a Party Plan Management System
            <br />
            • Responsible for revamping the CSS, adjusting Javascript, and adding a new Statement
            section
          </p>
        </div>
      </div>
      <div>
        {/* <video controls muted>
          <source src={execDashVid} type="video/mp4" />
          <source src={execDashVidSmall} type="video/mp4" media="all and (max-width: 1024px)" />
          Sorry, there was a problem loading this video.
        </video> */}
        <div className="youtubeEmbed">
          <iframe
            title="Executive Dashboard"
            src="https://www.youtube-nocookie.com/embed/cHURYQQ9gNk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="swiperDescription">
          <p>
            • inPowerSuite® Executive Dashboard allows displaying a variety of sales related stats
            <br />
            • Responsible for CSS and Javascript.  Made use of jQuery, Google Charts, and JSON
            responses from database
          </p>
        </div>
      </div>
      <div>
        {/* <video controls muted>
          <source src={analyticsVid} type="video/mp4" />
          <source src={analyticsVidSmall} type="video/mp4" media="all and (max-width: 1024px)" />
          Sorry, there was a problem loading this video.
        </video> */}
        <div className="youtubeEmbed">
          <iframe
            title="Web Analytics"
            src="https://www.youtube-nocookie.com/embed/PFkRK54CjjI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="swiperDescription">
          <p>
            • inPowerSuite® Web Analytics Dashboard allows displaying a variety of web analytics
            related stats
            <br />
            • Responsible for CSS and Javascript.  Made use of jQuery, Google Charts, and JSON
            responses from database
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage7.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® features a point-of-sale module with allows connecting any computer
            to scanners and receipt printers
            <br />
            • Responsible for revamping CSS and adding Font Awesome icons
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage8.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® is tailored for MLM companies and features genealogy management
            reports
            <br />
            • Responsible for modifying existing CSS, Javascript, and creating new icons and legend
          </p>
        </div>
      </div>
      <div>
        <Img fluid={query.portfolioImage9.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • Alterascape.com featured integration with Ubersmith ticketing system to allow
            placement of new orders and managing support tickets, and integration with
            ProvideSupport for real-time chat with NOC support techs
            <br />
            • Responsible for modifying existing CSS and HTML, and integrating Ubersmith, Hostbill,
            and ProvideSupport chat
            <br />
            • Also served as Lead NOC Tech and NOC Manager to provide 24/7 data center support
          </p>
        </div>
      </div>
    </Swiper>
  );
}
