---
title: Modifying the Gatsby Twitter Plugin
date: '2020-10-21T22:37:31.000Z'
thumb_image: '/content/images/twitter-logo.png'
author: Peter Valadez
---

In my last post, I started with an image of the cartoon below by
[@vincentdnl](https://twitter.com/vincentdnl/status/1268573228626333703). As you can see I have
embedded a whole tweet from @anniebombanie\_ in this post. But unlike embedded tweets on most
websites, this embedded tweet doesn't cause content to jump around the page when the tweet loads and
renders.

<figure class="twitterEmbed">
<div class="twitterEmbed__container" style="min-height:506px;" data-heights='{"582": 426, "375": 382}'>
<div class="loadingio-spinner"><div class="ldio-ptw9oz79bzf">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Me everytime someone tweets about starting a blog <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a></p>&mdash; Annie 🦄⚡ (@anniebombanie_) <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote>
</div>
<figcaption>Modified gatsby-plugin-twitter code and added some CSS animations make the embedded tweet load without having content jump around... </figcaption>
</figure>

### What's the problem?

One the things I love most about Gatsby is that it is so easy to use
[gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) to load images in a speedy and
aesthetically pleasing way. The "blur-up" technique of loading images was brought into the
mainstream by
[Facebook](https://engineering.fb.com/2015/08/06/android/the-technology-behind-preview-photos/) and
[Medium.com](https://jmperezperez.com/medium-image-progressive-loading-placeholder/). The first time
I noticed it on Medium.com I wanted it for my sites. The benefits are easy to see:

1. Page load times are decreased!

   1. First, the browser only loads a very small & blurry image
   2. Afterward, javascript asynchronously loads a higher quality image in place of the blurry one.

2. No jerky page loads!
   1. The default way that browsers load images cause page content to jump around violently
   2. Instead, the small blurry image takes up the same screen area as the high quality version, so
      the overall page layout never changes. This stops the content from jumping around makes the
      page load look much smoother!

_But guess what? All this refined image loading behavior is thrown in a blender when you embed a
tweet! See the content jump for yourself:_

![Embedded tweets cause content to jump around!](/content/images/embedded-tweet-loading.gif)

I admit that I've been watching my site load more than the average visitor would, but this isn't
just a problem on my site. Recently, I was browsing a major news site on my iPhone, and the page had
a bunch of embedded tweets. I was out of my house, so the speed of my phone's internet connection
probably played a role. But several times I was in the middle of a paragraph and the text was jerked
away from because a tweet needed to load. Chrome, Firefox, Edge, and even Opera all support
[scroll anchoring](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring),
but sadly scroll anchoring is not supported on Safari for MacOS or iOS. So, basically all iphones
have a terrible experience with respect to this problem.

### My Solution

When you click the "Embed Tweet" menu option on a tweet you will get a blockquote and a link to
Twitter's widget.js javascript file. The plugin, gatsby-plugin-twitter, tells you to grab only the
blockquote and put it in your markdown. You should have something like this:

```html{numberLines: true}
<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">
    Me everytime someone tweets about starting a blog
    <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a>
  </p>
  &mdash; Annie 🦄⚡ (@anniebombanie_)
  <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw"
    >September 10, 2020</a
  >
</blockquote>
```

To fix the jumping, it's pretty easy to wrap the twitter blockquote in a div and put a `min‑height`
on the div. Here's my markup:

```html{numberLines: true}
<figure class="twitterEmbed">
  // highlight-next-line
  <div class="twitterEmbed__container" style="min-height:506px;">
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Me everytime someone tweets about starting a blog
        <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a>
      </p>
      &mdash; Annie 🦄⚡ (@anniebombanie_)
      <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw"
        >September 10, 2020</a
      >
    </blockquote>
  </div>
  <figcaption>
    Modified gatsby-plugin-twitter code and added some CSS animations make the embedded tweet load
    without having content jump around...
  </figcaption>
</figure>
```

Of course, this requires me hand code a min-height value... more on this later. You'll also notice
that I've added a `<figcaption>`... not always necessary, but in this case I wanted one. I am
putting the `min-height` on `twitterEmbed__container` rather than `twitterEmbed`, because I don't
care how much height is added by my figcaption since it's not being loaded asynchronously. Of course
I'm using `min-height` rather than simply `height` in case the rendered tweet needs more height than
I expected.

### Special Case for Mobile

For the layout of my site, the width of the rendered tweet won't be less than 550px until the screen
width is less than 550px + padding. However, once the width of the embedded tweet is less than
550px, the min-height will also need to decrease. At first I thought I would solve this issue by
using a container div with a [fixed aspect ratio](https://css-tricks.com/aspect-ratio-boxes/).
Unfortunately, because of text wrapping and other unidentified reasons the aspect ratio doesn't
remain the same.

The result is that the `figcaption` gets pushed down too far when rendered on mobile:
![Tweet pushed down due to improper min-height](/content/images/tweet-pushed-down.jpg)

Possible solutions for this could be:

- Calling Jack Dorsey and asking him to introduce fluid typography and a fixed aspect ratio for
  embedded tweets... hmmm I can't find his number
- ~~Create a media query in my inline style tag~~ Nope, that's not possible :(
- Put unique classes or id's on every embedded tweet so I can have separate min-height values inside
  media queries... kind of sounds like a pain
- Create a plugin that renders the tweet while building the HTML from Markdown, aka while server
  side rendering, to find the the height of the rendered tweet at different screen sizes. Then the
  plugin can use the computed height in combination with other solutions.
- Instead of putting the min-height in an inline style attribute, I could put it in a data-heights
  attribute. This attribute could hold a JSON object with breakpoints paired with the desired
  min-height values. Then I could call useEffect or useLayoutEffect to set the min-height after
  checking the screen width. Alternatively, I could use gatsby-ssr.js to inject some blocking
  javascript which would set the min-height.

For now I'll hold off on doing any fancy server side rendering, but it may be a nice way to avoid
having to manually input the min-heights into the markup. I plan on settings min-height values to
work best for iPhone screen sizes, but I will also have a backup plan in the case that it still
needs to be adjusted. More on that in the next section.

Here's my markup with the new data-heights attribute:

```html
<div
  class="twitterEmbed__container"
  style="min-height:506px;"
  data-heights='{"582": 426, "375": 382}'
></div>
```

And here's the javascript I'm using in my blog template to set the min-height for the 582px and
375px breakpoints:

```js{numberLines: true}
React.useLayoutEffect(() => {
  document.querySelectorAll('.twitterEmbed__container').forEach(el => {
    const container = el;
    const minHeights = JSON.parse(container.dataset.heights);
    const windowWidth = document.documentElement.clientWidth;
    let minHeight = 0;
    let breakpoint = 100000;

    Object.entries(minHeights).forEach(([key, value]) => {
      const keyInt = parseInt(key, 10);
      if (windowWidth <= keyInt && keyInt < breakpoint) {
        minHeight = value;
        breakpoint = keyInt;
      }
    });

    if (minHeight !== 0) {
      container.style.minHeight = `${minHeight}px`;
    }
  });
}, []);
```

### Loading Animations

So now that that I have a plan to prevent content from jumping around I want to add some loading
animations. Instead of seeing a bunch of whitespace around the block quote, I'll cover it with a
light-gray background and add some kind of loading animation. I am using a ::before psuedo element
on `figure.twitterEmbed` for the background, and when it's time I will apply an animation that
scales the ::before element to nothingness.

Here's what that CSS looks like:

```scss{numberLines: true}
.twitterEmbed {
  position: relative;

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
    // highlight-next-line
    animation: twitterTimeout 0.3s cubic-bezier(1, 0.01, 0.41, 1) 8s forwards;
  }
  &.twitterEmbed--rendered::before {
    // highlight-next-line
    animation: twitterRendered 0.3s cubic-bezier(1, 0.01, 0.41, 1) forwards;
  }
}

@keyframes twitterRendered {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes twitterTimeout {
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
```

Notice that I added a twitterTimeout animation... just in case the tweet doesn't render in an
acceptable amount of time I'll show the blockquote. You could also put a delay on the
twitterRendered animation in the CSS declaration and hope that the tweet is rendered after the
delay. However, Twitter's widgets.js provides events to let you know when the tweet is rendered.
This is where I finally get to actually modifying the gatsby-plugin-twitter code!

### gatsby-plugin-twitter

Ok, so one of the nice things about Gatsby is that it support themes and plugins with a technique
called shadowing. As I understand, it is similar to the way that Wordpress overrides files with
child themes. If you look at the source code for
[gatsby-plugin-twitter](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-twitter),
you will see that it's really just a modified gatsby-browser.js file. So to modify this code all I
have to do is copy
[the code](https://github.com/gatsbyjs/gatsby/blob/bb5d62dc5ac9154f87fd572ef81905121de1ed23/packages/gatsby-plugin-twitter/src/gatsby-browser.js)
into my gatsby-browser.js file.

The first half of the code is setting up a script that loads Twitter's widgets.js
[asynchronously](https://css-tricks.com/thinking-async/). The fact that the javascript is inserted
into our page's `<head>` dynamically means that the new javascript
[will be executed asynchronously](https://javascript.info/script-async-defer#dynamic-scripts) and
parsing won't be blocked.

[Starting on Line 37](https://github.com/gatsbyjs/gatsby/blob/bb5d62dc5ac9154f87fd572ef81905121de1ed23/packages/gatsby-plugin-twitter/src/gatsby-browser.js#L37)
the code makes use of the `onRouteUpdate` Gatsby browser API. This is where I'm going to do some
extra work.

```js{numberLines: true}
export const onRouteUpdate = () => {
  // If there's an embedded element, lazy-load the twitter script (if it hasn't
  // already been loaded), and then run the twitter load function.
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript();
      injectedTwitterScript = true;
    }

    window.twttr.ready(twttr => {
      twttr.events.bind('rendered', event => {
        const container = event.target.closest('.twitterEmbed__container');
        // highlight-next-line
        container.classList.add('twitterEmbed--rendered');
      });
    });

    if (
      typeof twttr !== 'undefined' &&
      window.twttr.widgets &&
      typeof window.twttr.widgets.load === 'function'
    ) {
      window.twttr.widgets.load(document.querySelectorAll('.twitterEmbed__container'));
    }
  }
};
```

First of all, I have changed Line 1, `exports.onRouteUpdate = () => {`, to
`export const onRouteUpdate = () => {`. This is because I'm already using ES6 imports in my
gatsby-browser.js and it will generate error when you
[mix ES6 with CommonJS module systems](https://www.gatsbyjs.com/docs/migrating-from-v1-to-v2/#convert-to-either-pure-commonjs-or-pure-es6).

If you look at Twitter's
[javascript API documentation](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/javascript-api)
you will see that they have a `rendered` event you can bind to, but they also tell you to use the
`twttr.ready()` function with a callback if you're loading widgets.js asynchronously. If you don't
use `twttr.ready()` it may work sometimes and break other times, depending on the timing.

So the important part here is Line 15; I'm adding a `twitterEmbed--rendered` class to my container
div which will kick off the `twitterRendered` CSS animation. It looks like this:

<video controls loop>
  <source src="/videos/tweet-background-animation.mp4" type="video/mp4" />
</video>

You may have noticed that Twitter's widgets.js actually turns `blockquote.twitter-tweet` into
`div.twitter-tweet.twitter-tweet-rendered` after the rendering is done. While I could have just
added my CSS animations directly to `.twitter-tweet`, the fact that widgets.js is removing and
adding elements during the rendering will mean that the gray background will flash a couple of times
will rendering happens. Me no likey.

### Backup Plan

The fact that I am adjusting the min-height for certain screen sizes doesn't mean that it is
guaranteed to be perfect. So, I've come up with a backup plan. After the tweet is rendered, I'll
adjust the min-height to be exactly the height of the rendered tweet, and then I'll use a CSS
transition to move the content below up smoothly.

```js{numberLines: true}
// highlight-range{3-4}
window.twttr.ready(twttr => {
  twttr.events.bind('rendered', event => {
    const container = event.target.closest('.twitterEmbed__container');
    const {height} = event.target.getBoundingClientRect();
    container.style.minHeight = `${height}px`;
    container.classList.add('twitterEmbed--rendered');
  });
});
```

Then I added a transition in my CSS so that when I update the min-height the content below will
hopefully [smoothly slide up instead of jumping](https://css-tricks.com/content-jumping-avoid/).

```scss{numberLines: true}
.twitterEmbed__container {
  position: relative;
  transition: min-height 0.55s ease-out;
```

### Loading Animation

To let our visitors know that there is something going on underneath the masked gray box where the
embedded tweet will be, we are going to need an loading animation. There are a lot of ways to add
loading animations, but after looking at
[gatsby-remark-interactive-gifs](https://www.gatsbyjs.com/plugins/gatsby-remark-interactive-gifs/) I
found that [loading.io](https://loading.io/) has really nice animations available. I'm using one of
their free spinner loading animations.

Check out the codepen for the spinner I'm using:

https://codepen.io/pvaladez/pen/yLJGxXj

So then I just put the extra div's for the spinner in my embedded tweet markup, put the css in my
global scss file, and _I'm done!_ There is a fair amount of extra markup needed for the spinner, but
I don't mind copying and pasting when I embed a new tweet. Perhaps in the future I'll write a plugin
that builds all this markup around the blockquote via server side rendering.

<!--
For now, here's what my
markup looks like with the spinner div's:

```html{numberLines: true}
// highlight-range{7-22}
<figure class="twitterEmbed">
  <div
    class="twitterEmbed__container"
    style="min-height:506px;"
    data-heights='{"582": 426, "375": 382}'
  >
    <div class="loadingio-spinner">
      <div class="ldio-ptw9oz79bzf">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <blockquote class="twitter-tweet">
      <p lang="en" dir="ltr">
        Me everytime someone tweets about starting a blog
        <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a>
      </p>
      &mdash; Annie 🦄⚡ (@anniebombanie_)
      <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw"
        >September 10, 2020</a
      >
    </blockquote>
  </div>
  <figcaption>
    Modified gatsby-plugin-twitter code and added some CSS animations make the embedded tweet load
    without having content jump around...
  </figcaption>
</figure>
```
-->

**_Here's what it looks like all together:_**

<video controls loop>
  <source src="/videos/tweet-loading-final.mp4" type="video/mp4" />
</video>

<div class="em-box">
  <p style="margin:0;">
  <em>See all this code in action on Github --> </em>
  <a href="https://github.com/pvaladez/petervaladez.com" alt="petervaladez.com github repo"> https://github.com/pvaladez/petervaladez.com</a>
  </p>
</div>
