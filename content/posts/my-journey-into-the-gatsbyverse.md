---
title: My Journey into the Gatsbyverse
date: '2020-10-20T22:37:31.000Z'
thumb_image: '/content/images/gatsby-logo.png'
author: Peter Valadez
---

I've wanted to make a personal website for several years now, and I finally made it happen with
Gatsby! Although I’ve never attempted anything as ambitious as creating a blogging platform from
scratch, that fact hasn’t stopped the occasional feelings of guilt for not getting something up. I
can relate to this:

<!-- <figure class="twitterEmbed">
<div class="twitterEmbed__container" style="min-height:506px;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Me everytime someone tweets about starting a blog <a href="https://t.co/5ADpE9ec0j">pic.twitter.com/5ADpE9ec0j</a></p>&mdash; Annie 🦄⚡ (@anniebombanie_) <a href="https://twitter.com/anniebombanie_/status/1304087153559965698?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote>
</div>
<figcaption>I might have modified gatsby-plugin-twitter and added some CSS animations to make the embedded tweet load without having content jump around... </figcaption>
</figure> -->

![In the spirit of this cartoon by @vincentdnl, I decided to post this as a simple image instead of an embedded tweet. See links below.](/content/images/developer-blogging-cartoon.jpg)

Funny enough, the decision on whether to load the cartoon as an embedded tweet using
[gatsby-plugin-twitter](https://www.gatsbyjs.com/plugins/gatsby-plugin-twitter/) or whether to
simply insert an image felt like an example of the dilemma posed by the cartoon(so meta!😮). I
wasn't satisfied with the default behavior of embedded tweets, because as tweets load it causes
content to jump around the page. Why ruin the refined page loading experience you get with Gatsby
image plugins?? So I initially created some CSS animations and modified gatsby-plugin-twitter to
load the tweet without the page jumps. However, I feel like something bad will happen to me if I
load that particular twitter cartoon in a more complicated way than I absolutely have to _in a blog
post about **finally** getting a blog up_.

One down side of loading the cartoon as a simple image is that I don't know of a way to put links in
the caption text. So here is
[the original tweet by @vincentdnl](https://twitter.com/vincentdnl/status/1268573228626333703), and
if you are like me [@anniebombanie\_](https://twitter.com/anniebombanie_/status/1304087153559965698)
where you probably actually saw it first.

### A Bit of History...

I had also wanted to work on something that leveraged Node.js. I remember watching Bryan Cantrill's
2015 Joyent presentation
["Docker and the Future of Containers in Production"](https://www.joyent.com/blog/docker-and-the-future-of-containers-in-production)
and being very impressed by not only the achievement of running Linux as a container(LX-branded
zone) on Illumos(OpenSolaris) but also that a "Fortune 1 company"(Walmart) was already using
Joyent's platform. So when I realized Ryan Dahl created Node.js, which was already much talked
about, as a Joyent employee I started thinking that I _really_ needed to pay attention.

Additionally, most of my development experience up to that point involved either Wordpress or static
HTML sites, and I had started to become frustrated with the performance disparity between Wordpress
and static sites. To be fair, the tech stack supporting Wordpress has evolved a good amount over the
years. I was impressed with how fast Wordpress ran on Nginx compared to the Apache when I first
discovered Nginx. Then I found that Wordpress ran even faster when Nginx's caching features were
fully enabled. However, when I enabled Nginx caching for the site I was working on I kept finding
problems caused by the fact that caching wasn't updating at the right time. Since that time I have
been able to enable cache very easily using Litespeed web server, and at the Jamstack Conf in
October 2020 I think Matt Mullenweg made a fair argument that Wordpress can use caching with CDN
service to solve performance issues.

Even still, it always bothered me at some deep level that a web server should have to query a
database(often waiting for slow IO on disks) _and then_ use a scripting language like PHP to stitch
the data and HTML together... just to serve up a webpage _even when the page's content hadn't
changed_. Regardless of whether or not caching can be done easily and reliably, there will always be
a high level of complexity needed under-the-hood to make caching work on Wordpress or any other
database dependent website.

![https://nodejs.org/en/about/resources/](/content/images/node.js-logo.jpg)

And serving markup quickly is not the only performance concern... there's also the matter of how
much markup is served and how often it is served. Node.js and Single Page Apps have introduced a
better way to serve webpages all together. Instead of making the browser evaluate and possibly
re-download every resource on the page, a Single Page App only downloads the data needed to display
the next page. Node.js even allowed web applications to optimize data transfer at the network level,
adding websockets to keep connections open instead of having to reinitiate connections to the web
server.

So as an alternative to Wordpress, I started researching how to either use Node.js as a web server
or how to make a feature-rich static HTML site.
[This article from De Voorhoede](https://www.voorhoede.nl/en/blog/why-our-website-is-faster-than-yours/)
was a great introduction to some advanced performance techniques they used to take static to the
next level. But... they literally wrote their "own static site generator in Node.js", and it seemed
like they did a lot of work with javascript to automate the optimizations. Yeah... see the cartoon
above.

![https://www.voorhoede.nl/en/blog/why-our-website-is-faster-than-yours/](/content/images/voohoede-faster.jpg)

I then tested [ghost](https://ghost.org/) with a local instance, but the thought of needing to
configure and maintain a Node.js web server felt like a bit more than I wanted to take on. The next
step was to start looking at the various static site generators that were available. From the start
I liked Gatsby because it used Node.js.

#### **_I would later learn of these other reasons why Gatsby is great:_**

- Image Optimization with gatsby-image
  - Scale down & crop with graphql
  - Lazy loading for faster page loads
  - Automatic blur-up technique to avoid content jumping around as images load
  - Automatically creates responsive image sets
  - All above available for markdown images w/ gatsby-remark-images
- Static + React!
  - Static, Server Side Rendered HTML is great for SEO
  - Static also means it still works with javascript disabled!
  - Static sites are great for security... hackers can't take over your PHP to spam the world
  - A visitor first gets static HTML, then javascript and React take over
- Gatsby will automatically start downloading resources in the background for the next pages you
  will navigate to. So when you click on a link to a new page, the resources are probably already
  downloaded and cached.
- Automatic Route based code splitting! Don't have to download all the js at once
- Can take advantage of awesome Node.js frameworks... web code isn't just for browsers anymore
  - [ElectronJS](https://www.electronjs.org/) for Windows/MacOS/Linux desktop apps!
  - They have already made a [Gatsby desktop app w/ Electron!](https://github.com/gatsbyjs/desktop)
  - [Capacitor](https://capacitorjs.com/) for iOS & Android apps with native functionality!
  - [React Native](https://reactnative.dev/), used by Facebook and Instagram mobile apps, can also
    be used... it's React!
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins): tons of them!
- Gatsby Plugins and Theme use a
  [shadowing technique](https://www.gatsbyjs.com/docs/how-shadowing-works/)
- Ready to integrate with CMS's including Wordpress
  - [Forestry](https://forestry.io/) & [Tina CMS](https://tinacms.org/):
  - [Agility CMS](https://agilitycms.com/)
  - [Contenful](https://www.contentful.com/)
  - [Netlify CMS](https://www.netlifycms.org/)
  - Many more...
- [JAMstack](https://jamstack.org/) means you can deploy to CDN... available worldwide... Netlify
  rocks! Vercel, Cloudflare, Amazon are all great as well!
- Community: the Gatsby and Jamstack communities are very active!
- [This post from the Gatsby blog](https://www.gatsbyjs.com/blog/2019-04-02-behind-the-scenes-what-makes-gatsby-great/)
  goes in depth on what makes Gatsby great

### Gatsby and Forestry to the Rescue!

Then I stumbled on someone else's personal site that was made with Gatsby, Forestry, and Netlify. At
that point I still hadn't spent any quality time with Gatsby, but when I found Forestry and Netlify
I suddenly had a super easy way to try it all out. I was amazed by how fast Gatsby was the more I
played with it. The fact that it generates static pages but still takes advantage of Single Page App
techniques... is exactly what I wanted. When I realized that Netlify allows you to deploy a gatsby
site straight from GitHub to their global CDN service... with automatic Let's Encrypt HTTPS certs
for free... I was hooked.

Creating a Gatsby site is so easy with Forestry that I'm not sure I need to write about it... you
can create an account by linking your GitHub account, then go to
[Forestry's starter templates page](https://forestry.io/starters/) and click on "Brevifolia".
[Brevifolia, written by Kendall Strautman](https://github.com/kendallstrautman/brevifolia-gatsby-forestry),
is currently the only Gatsby template available from Forestry, but you can also use your own Gatsby
repository from a GitHub/GitLab/Bitbucket/Azure account. I made this site with the Brevifolia
template, but after getting familiar with the code I feel like it wouldn't be too hard to setup
another gatsby project to work with Forestry.

![](/content/images/forestry-templates.jpg)

In the end any Jamstack site is deployed as static files, so there are a ton of ways to deploy/host
Gatsby. There is some good info on ways to deploy and host Gatsby on their
[documentation pages](https://www.gatsbyjs.com/docs/deploying-and-hosting/).

### Developing Locally

Since my objective was not only to create a website but to learn about how Gatsby works, I chose to
do most of my customizations on a local instance of Gatsby. You may find these notes helpful if you
are getting started with Node.js and Gatsby local development, especially if you use Windows:

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
  files in the \\\wsl\\\$ filesystem, so the WSL Ubuntu VM has direct access. Problems solved!
- Add `*Zone.Identifier` to your .gitignore file. Windows adds "Zone.Identifier" files in the WSL
  filesystem for security reasons when you copy a file from Windows to WSL
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
  - Inspired by [this codepen](https://codepen.io/casey_codes/pen/jOqYaPe) and
    [lots of react-spring examples](https://twitter.com/dan_abramov/status/1058837112789839872)
- Contact form using Formik and react-google-recaptcha
  - Derek Spaulding:
    [Simple Contact Form with Gatsby, Formik and Netlify](https://www.derekaspaulding.com/blog/simple-contact-form-with-gatsby-formik-and-netlify/)
  - Sean C. Davis:
    [What You Need to Know When Using Netlify Forms](https://cobwwweb.com/what-you-need-to-know-about-netlify-forms)
  - Shawn @Swyx Wang:
    [Integrating Netlify Form Handling in Gatsby](https://github.com/sw-yx/gatsby-netlify-form-example-v2)
- Dark Mode
  - Josh W Comeau: [The Quest for the Perfect Dark Mode](https://joshwcomeau.com/gatsby/dark-mode/)
  - Rowland I. Ekemezie:
    [Dark theme support for my website(CSS variables, React hooks, and sass variables)](https://rowlandekemezie.com/posts/dark-theme-support-for-my-website/)
  - Divyanshu Maithani: [Dark mode in Gatsby](https://divyanshu013.dev/blog/gatsby-dark-mode/)
- Comments using utterances
  - Tania Rascia:
    [Adding Comments to My Blog (via Utterances)](https://www.taniarascia.com/adding-comments-to-my-blog/)
- Previous and Next blog buttons with modified graphql queries
  - Tori Pugh:
    [Gatsby Blog: Next and Previous Links](https://toripugh.com/blog/gatsby-blog--next-and-previous-links)
- SEO component to better take advantage of Gatsby's static SEO friendliness
  - [Gatbsy Documentation | Adding an SEO Component](https://www.gatsbyjs.com/docs/add-seo-component/)
  - [GitHub | marisamorby/marisamorby.com](https://github.com/marisamorby/marisamorby.com/blob/master/packages/gatsby-theme-blog-sanity/src/components/seo.js)
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
  <!--  - domPurify to santize HTML generated from markdown posts -->

<div class="em-box">
  <p style="margin:0;">
  <em>See all the code on my 
    <a href="https://github.com/pvaladez/petervaladez.com" alt="petervaladez.com github repo"> GitHub repo!</a>
  </em>
  </p>
</div>

### Gatsby Community

Last but not least, my learning journey with Gatsby has been really great so far, and that is due to
the quality of the Gatsby team and the community of developers surrounding it. I think the Gatsby
documentation does a great job of introducing all the key concepts, and I love the fact that all
documentation pages have an "Edit this page on GitHub" link. I've already found one small place to
contribute to the docs, and it feels great to be directly connected to the product in that way.

For more specific use case issues, I've been able to find some good info on GitHub issue pages. If
you're looking to implement a new feature there are a ton of developers making Gatsby sites right
now and a lot of good articles/blog posts on how to accomplish specific things. And front-end
developers in general have been been doing a good job of making a community of the industry... it is
a cool place to be right now.

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

In the next post I will get into some code and show you how I modified the Gatsby Twitter plugin. I
would love to hear any kind of feedback you have, and stay tuned as I add more to the blog, the site
in general, and to my social media.
