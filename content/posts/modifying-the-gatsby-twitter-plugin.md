---
title: Modifying the Gatsby Twitter Plugin
date: '2020-10-21T22:37:31.000Z'
thumb_image: '/content/images/twitter-logo.png'
author: Peter Valadez
---

### gatsby-plugin-twitter

```scss{numberLines: true}
.twitter_embed {
  position: relative;
  max-width: 550px;
  margin-bottom: ms(2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: hsl(0, 0%, 99%);
    border-radius: 15px;
    border: 1px solid hsl(0, 0%, 92%);
    animation: twitter_timeout 0.3s cubic-bezier(1, 0.01, 0.41, 1) 8s forwards;
  }
  &::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    width: 0%;
    max-width: calc(100% - 20px);
    height: 4px;
    z-index: 2;
    background: hsl(0, 0%, 90%);
    border-radius: 4px;
    animation: twitter_loading_bar 0.6s cubic-bezier(1, 0.01, 0.41, 1) forwards, twitter_timeout
        0.3s cubic-bezier(1, 0.01, 0.41, 1) 8s forwards;
  }
  &.twitter_rendered::before {
    animation: twitter_rendered 0.3s cubic-bezier(1, 0.01, 0.41, 1) forwards;
  }
  &.twitter_rendered::after {
    display: none;
  }

  > div:first-child {
    margin: 0 auto !important;

    > iframe {
      margin: 0 !important;
    }
  }
  blockquote {
    margin-top: 1rem;
  }
  > figcaption {
    margin-top: 0.5rem;
    font-size: ms(-1);
  }
}
```
