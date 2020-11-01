---
title: My Journey into the Gatsbyverse
date: '2020-10-20T22:37:31.000Z'
thumb_image: '/content/images/gatsby-logo.png'
author: Peter Valadez
---

I've wanted to make a personal website for several years now, and I finally made it happen with
Gatsby! Although I’ve never attempted anything as ambitious as creating a blogging platform from
scratch, that fact hasn’t stopped the occassional feelings of guilt for not getting something up. I
can relate to this:

<figure class="twitterEmbed">
<div class="twitterEmbed__container" style="min-height:506px;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Me everytime someone tweets about starting a blog <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a></p>&mdash; Annie 🦄⚡ (@anniebombanie_) <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote> 
</div>
<figcaption>I might have modified gatsby-plugin-twitter and added some CSS animations to make the embedded tweet load without having content jump around... lol... at least that particular task didn't take toooooo long... </figcaption>
</figure>

### A Bit of History...

I had also wanted to work on something that leveraged Node.js. I remember watching Bryan Cantrill's
2015 Joyent presentation
["Docker and the Future of Containers in Production"](https://www.joyent.com/blog/docker-and-the-future-of-containers-in-production)
and being very impressed by not only the achievement of running Linux as a container(LX-branded
zone) on Illumos(OpenSolaris) but also that a "Fortune 1 company"(Walmart) was already using
Joyent's platform. So when I realized Ryan Dahl created Node.js, which was already much talked
about, as a Joyent employee I started thinking that I needed to pay attention.

Additionally, most of my development experience up to that point involved either Wordpress or static
html sites, and I had started to become frustrated with the performance disparity between Wordpress
and static sites. To be fair, the tech stack supporting Wordpress has evolved a good amount over the
years. I was impressed with how fast Wordpress ran on Nginx compared to the Apache when I first
discovered Nginx. Then I found that Wordpress ran even faster when Nginx's caching features were
fully enabled. However, when I enabled Nginx caching for the site I was working on I kept finding
problems caused by the fact that caching wasn't updating at the right time. Since that time I have
been able to enable cache very easily using Litespeed webserver, and at the Jamstack Conf in October
2020 I think Matt Mullenweg made a fair argument that Wordpress can use caching with CDN service to
solve performance issues.

Even still, it always bothered me at some deep level that a webserver should have to query a
database(often waiting for slow IO on disks) _and then_ use a scripting language like PHP to stitch
the data and html together... just to serve up a webpage _even when the page's content hadn't
changed_. Regardless of whether or not caching can be done easily and reliably, there will always be
a high level of complexity needed under-the-hood to make caching work on Wordpress or any other
database dependent website.

![https://nodejs.org/en/about/resources/](/content/images/node.js-logo.jpg)

And serving markup quickly is not the only performance concern... there's also the matter of how
much markup is served and how often it is served. Node.js and Single Page Apps have introduced a
better way to serve webpages all together. Instead of making the browser evaluate and possibly
re-download every resource on the page, a Single Page App only downloads the data needed to display
the next page. Node.js even allowed web applications to optimize data transfer at the network level,
adding websockets to keep connections open instead of having to reinitiate connections to the
webserver.

So as an alternative to Wordpress, I started researching how to either use Node.js as a webserver or
how to make a feature-rich static html site.
[This article from De Voorhoede](https://www.voorhoede.nl/en/blog/why-our-website-is-faster-than-yours/)
was a great introduction to some advanced performance techniques they used to take static to the
next level. But... they literally wrote their "own static site generator in Node.js", and it seemed
like they did a lot of work with javascript to automate the optimizations. Yeah... see the cartoon
above.

![https://www.voorhoede.nl/en/blog/why-our-website-is-faster-than-yours/](/content/images/voohoede-faster.jpg)

I then tested [ghost](https://ghost.org/) with a local instance, but the thought of needing to
configure and maintain a nodeJS webserver felt like a bit more than I wanted to take on. The next
step was to start looking at the various static site generators that were available. From the start
I liked Gatsby because it used Node.js.

#### **_I would later learn of these other reasons why Gatsby is great:_**

- Image Optimization with gatsby-image
  - Scale down & crop with graphql
  - Lazy load and automatic blur-up technique for faster loading
  - Automatically creates responsive image sets
  - All above available for markdown images w/ gatsby-remark-images
- Static + React!
  - Static, Server Side Rendered html is great for SEO
  - Static also means it still works with javascript disabled!
  - Static sites are great for security... hackers can't take over your PHP spam the world
  - A visitor first gets static html, then javascript and React takes over
- Automatic Route based code splitting! Don't have to download all the js at once
- Can take advantage of awesome NodeJS frameworks... web code isn't just for browsers anymore
  - [ElectronJS](https://www.electronjs.org/) for Windows/MacOS/Linux desktop apps!
  - They have already made a [Gatsby desktop app w/ Electron!](https://github.com/gatsbyjs/desktop)
  - [Capacitor](https://capacitorjs.com/) for iOS & Android apps with native functionality!
  - [React Native](https://reactnative.dev/), used by Facebook and Instagram mobile apps, can also
    be used... it's React!
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins): tons of them!
- Ready to integrate with CMS's including Wordpress
  - [Forestry](https://forestry.io/) & [Tina CMS](https://tinacms.org/):
  - [Agility CMS](https://agilitycms.com/)
  - [Contenful](https://www.contentful.com/)
  - [Netlify CMS](https://www.netlifycms.org/)
  - Many more...
- [JAMstack](https://jamstack.org/) means you can deploy to CDN... available worldwide... Netlify
  rocks!
- Community: the Gatsby and Jamstack communities are very active!

### Gatsby and Forestry to the Rescue!

Then I stumbled on someone else's personal site that was made with Gatsby, Forestry, and Netlify. At
that point I still hadn't spent any quality time with Gatsby, but when I found Forestry and Netlify
I suddenly had a super easy way to try it all out. I was amazed by how fast Gatsby was the more I
played with it. The fact that it generates static pages but still takes advantage of Single Page
Application techniques... exactly what I wanted. When I realized that Netlify allows you to deploy a
gatsby site straight from github to their global CDN service... I was hooked.

Creating a Gatsby site is so easy with Forestry that I'm not sure I need to write about it... you
can create an account by linking your GitHub account, then go to
[Forestry's starter templates page](https://forestry.io/starters/) and click on "Brevifolia".
[Brevifolia, written by Kendall Strautman](https://github.com/kendallstrautman/brevifolia-gatsby-forestry),
is currently the only template available from Forestry, but you can also use your own Gatsby
repository from a Github/GitLab/Bitbucket/Azure account. I made this site with the Brevifolia
template, but after getting familiar with the code I feel like it wouldn't be too hard to setup
another gatsby project to work with Forestry.

![](/content/images/forestry-templates.jpg)

In the end any Jamstack site is deployed as static files, so there are a ton of ways to deploy/host
Gatsby. There is some good info on ways to deploy and host Gatsby on their
[documentation pages](https://www.gatsbyjs.com/docs/deploying-and-hosting/).

### Developing Locally

Since my objective was not only to create a website but to learn about how Gatsby works, I chose to
do most of my customizations on a local instance of Gatsby. You may find these notes helpful if you
are getting started with Node.js and Gatsby local development:

- General info from Gatsby docs on
  [setting up your environment](https://www.gatsbyjs.com/tutorial/part-zero/)
- Use a Node version manager... I use nvm for Ubuntu and MacOS... also nvm-windows for Windows, but
  I have not enjoyed using Node.js natively on Windows... see next
- If your development machine runs Windows, use WSL with Ubuntu... so many less headaches on Linux
  or MacOS for whatever reason... perhaps it dates back to Ryan Dahl's comment,
  ["Windows is very important... just like PHP"](https://youtu.be/jo_B4LTHi3I?t=56)
- WSL version 1 works well when your project files are stored on the Windows filesystem, but I kept
  getting "EACCESS Permission denied" errors, see
  [Microsoft's fix](https://code.visualstudio.com/docs/remote/wsl#_i-see-eaccess-permission-denied-error-trying-to-rename-a-folder-in-the-open-workspace-in-wsl-1).
  I didn't like wondering if those errors were causing other problems with Gatsby, and I felt
  gimped(sorry gimp) using Microsoft's fix.
- WSL version 2 doesn't have the EACCESS problem! However, currently the filesystem performance of
  WSL2 is terrible if you want your project
  files([especially your /node_modules](https://medium.com/@deanmcrobie/a-quick-speed-up-for-node-gatsby-development-on-windows-with-wsl2-cef7f2a13580))
  to live in the Windows filesystem. I've found the easiest solution is to just put your Gatsby
  files in the \\wsl\$ filesystem, so the WSL Ubuntu VM has direct access. Problems solved!
- Microsoft Visual Studio Code, aka vscode, is great and free. I was using WebStorm previously and
  there are a few things I missed from WebStorm, but vscode has been cranking out a lot of nice
  features lately including the "Remote - WSL" extension for easy integration with WSL

If you don't want to make too many customizations, you can just create the starter template on
Forestry and start writing blog posts from their online editing interface.

### Making it my Own... with Help

I will write separate blog posts giving more detail to some of ways I customized the
[Brevifolia Gatsby template](https://github.com/kendallstrautman/brevifolia-gatsby-forestry), but
here is the shortlist along with some helpful resources I found along the way:

- Separate index/home page with react-spring animated drop-shadow filter
- Contact form using Formik and react-google-recaptcha
  - Derek Spaulding:
    https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/
  - Sean C. Davis: https://cobwwweb.com/what-you-need-to-know-about-netlify-forms
  - Shawn @Swyx Wang: https://github.com/sw-yx/gatsby-netlify-form-example-v2
- Dark Mode
  - Josh W Comeau: https://joshwcomeau.com/gatsby/dark-mode/
  - Rowland I. Ekemezie: https://rowlandekemezie.com/posts/dark-theme-support-for-my-website/
  - Divyanshu Maithani: https://divyanshu013.dev/blog/gatsby-dark-mode/
- Comments using utterances
  - Tania Rascia: https://www.taniarascia.com/adding-comments-to-my-blog/
- Previous and Next blog buttons with modified graphql queries
  - Tori Pugh: https://toripugh.com/blog/gatsby-blog--next-and-previous-links
- SEO component to better take advantage of Gatsby's static SEO friendliness
  - https://www.gatsbyjs.com/docs/add-seo-component/
  - https://github.com/marisamorby/marisamorby.com/blob/master/packages/gatsby-theme-blog-sanity/src/components/seo.js
- Optimized graphql queries and Gatsby image settings for my images
- Pulled in timeToRead from markdownRemark and put in formatted `<time>` tag
- Various components for footer, logo, modified layout, social media links
- Updated all npm packages to latest major releases... 0 vulnerabilities yay!
- Dropped node-sass for sass package
  - node-sass ~~is going away~~ [is now deprecated](https://github.com/sass/node-sass/issues/2952)
    and the most up-to-date sass functionality is not available with node-sass.
  - Modify gatsby-plugin-sass to
    [use sass instead of node-sass](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/#alternative-sass-implementations)
- Styling changes & I replaced reset.scss with normalize.css plus styles from reset.scss
- Setup a modular scale for font sizing
  - [Modularscale.com](https://www.modularscale.com/)
  - ["Better Web Typography for a Better Web" by Matej Latin](https://betterwebtype.com/)
- Renamed of a few things and linted my brains out with eslint & airbnb plugin
- Plugins:
  - gatsby-remark-prismjs
  - gatsby-plugin-twitter with modifications placed in gatsby-browser.js
  <!--  - domPurify to santize html generated from markdown posts -->

<div class="em-box">
  <p style="margin:0;">
  <em>See all the code on Github! --> </em>
  <a href="https://github.com/pvaladez/petervaladez.com" alt="petervaladez.com github repo"> https://github.com/pvaladez/petervaladez.com</a>
  </p>
</div>

### Gatsby Community

Last but not least, my learning journey with Gatsby has been really great so far, and that is due to
the quality of the Gatsby team and the community of developers surrounding it. I think the Gatsby
documentation does a great job of introducing all the key concepts, and I love the fact that all
documentation pages have an "Edit this page on Github" link. I've already found one small place to
contribute to the docs, and it feels great to be directly connected to the product in that way.

For more specific use case issues, I've been able to find some good info on Github issue pages. If
you're looking to implement a new feature there are a ton of developers making Gatsby sites right
now and a lot of good articles/blog posts on how to accomplish specific things... see my list above.
And front-end developers in general have been been doing a good job of making a community of the
industry... it is a cool place to be right now.

Among other things from the community, I found Swyx's
[post on #LearnInPublic](https://www.swyx.io/learn-in-public/) and Dan Abramov's
["Things I don't Know as of 2018" post](https://overreacted.io/things-i-dont-know-as-of-2018/) very
encouraging. Additionally it is encouraging to see the numbers of women and other typically
underrepresented groups of people contributing to Gatsby and the surrounding web technologies. In
general it seems like web developers are more inclusive, more diverse, and more conscious of social
issues compared to some other tech industries... of course that doesn't mean people can't have valid
criticisms of the community or that it couldn't be better. But as a whole I think the community is
something I can be proud to be a part of.

### What's Next?

In the next post I will show you how I modified the Gatsby Twitter plugin.

<!-- <img src="http://localhost:8000/gatsby_logo.svg"  style="margin-left: calc(-50vw + 400px);margin-right: calc(-50vw + 400px); max-width: none"/> -->
