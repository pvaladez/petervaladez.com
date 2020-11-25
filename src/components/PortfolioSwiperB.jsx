import React from 'react';
import Img from 'gatsby-image';
/* import Swiper from 'react-id-swiper'; */
import SwiperCore, {
  Navigation, Pagination, EffectCoverflow,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import '../styles/components/portfolioSwiper.scss';
import SwiperYoutube from './SwiperYoutube';
import usePortfolioImages from '../hooks/usePortfolioImages';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

export default function PortfolioSwiper() {
  const images = usePortfolioImages();
  const [loadYoutube, setLoadYoutube] = React.useState(false);
  const loadedYoutube = React.useRef(false);
  const swiperRef = React.useRef(null);

  function onSwiperObserve(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    /* Check ref value to avoid reading
       stale state in callback... */
    if (entries[0].isIntersecting && loadedYoutube.current === false) {
      setLoadYoutube((prevState) => !prevState);
      loadedYoutube.current = true;
    }
  }

  React.useEffect(() => {
    if (window && 'IntersectionObserver' in window) {
      if (swiperRef && swiperRef.current) {
        const swiperObserver = new IntersectionObserver(onSwiperObserve, {
          rootMargin: '0px 0px',
          threshold: 0.25,
        });

        swiperObserver.observe(swiperRef.current);
      }
    } else {
      setLoadYoutube(true);
      loadedYoutube.current = true;
    }
  }, [swiperRef]);

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      slidesPerView={1}
      centeredSlides
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
      onSlideChange={() => {
        // Check the ref value to avoid reading
        // stale state in callback...
        /* if (loadedYoutube.current === false) {
          setLoadYoutube((prevState) => !prevState);
          loadedYoutube.current = true;
        } */
      }}
      ref={swiperRef}
    >
      <SwiperSlide>
        <Img fluid={images.portfolioImage1.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® member dashboard using jQuery, Bootstrap, SwiperJS, and Font Awesome
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage2.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® dashboard included many reporting and utility pages
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
            Made use of Google Charts and various jQuery plugins
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage3.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® includes a full e-Commerce Storefront, supporting mobile and desktop
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage4.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® integrates with social media networks to allow site members to share
            their favorite products for points toward a reward system
            <br />
            • Responsible for CSS, Javascript, and working with database developers to
            construct appropriate markup using inPowerSuite&apos;s database driven layout engine.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage5.childImageSharp.fluid} />
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
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage6.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® features a Party Plan Management System
            <br />
            • Responsible for revamping the CSS, adjusting Javascript, and adding a new Statement
            section
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage7.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® features a point-of-sale module with allows connecting any computer
            to scanners and receipt printers
            <br />
            • Responsible for revamping CSS and adding Font Awesome icons
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperYoutube
          title="Executive Dashboard"
          id="cHURYQQ9gNk"
          thumbnail={images.portfolioImage8.childImageSharp.fluid}
          initLoading={loadYoutube}
        />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® Executive Dashboard allows displaying a variety of sales related stats
            <br />
            • Responsible for CSS and Javascript.  Made use of jQuery, Google Charts, and JSON
            responses from database
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperYoutube
          title="Web Analytics"
          id="PFkRK54CjjI"
          thumbnail={images.portfolioImage9.childImageSharp.fluid}
          initLoading={loadYoutube}
        />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® Web Analytics Dashboard allows displaying a variety of web analytics
            related stats
            <br />
            • Responsible for CSS and Javascript.  Made use of jQuery, Google Charts, and JSON
            responses from database
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage10.childImageSharp.fluid} />
        <div className="swiperDescription">
          <p>
            • inPowerSuite® is tailored for MLM companies and features genealogy management
            reports
            <br />
            • Responsible for modifying existing CSS, Javascript, and creating new icons and legend
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <Img fluid={images.portfolioImage11.childImageSharp.fluid} />
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
      </SwiperSlide>
    </Swiper>
  );
}
