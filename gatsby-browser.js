import React from 'react';

import App from './src/components/App';

export const wrapRootElement = ({ element }) => <App>{element}</App>;

/* ***********************************************
 ** Customized code from gatsby-plugin-twitter ***
 *********************************************** */
const injectTwitterScript = () => {
  function addJS(jsCode) {
    const s = document.createElement('script');

    s.type = 'text/javascript';
    s.innerText = jsCode;
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  addJS(`
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, "script", "twitter-wjs");
  `);
};

let injectedTwitterScript = false;

const embedClasses = [
  '.twitter-tweet',
  '.twitter-timeline',
  '.twitter-follow-button',
  '.twitter-share-button',
].join(',');

export const onRouteUpdate = () => {
  // If there's an embedded element, lazy-load the twitter script (if it hasn't
  // already been loaded), and then run the twitter load function.
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript();
      injectedTwitterScript = true;
    }

    window.twttr.ready((twttr) => {
      twttr.events.bind('rendered', (event) => {
        const container = event.target.closest('.twitterEmbed__container');
        const { height } = event.target.getBoundingClientRect();
        container.style.minHeight = `${height}px`;
        container.classList.add('twitterEmbed--rendered');
      });
    });

    if (
      typeof twttr !== 'undefined'
      && window.twttr.widgets
      && typeof window.twttr.widgets.load === 'function'
    ) {
      window.twttr.widgets.load(document.querySelectorAll('.twitterEmbed__container'));
    }
  }
};
