---
title: How to add custom domains to Netlify sites!
description:
  Lets say that you bought a domain from a registrar like Godaddy or Namecheap. Then you build your site and deploy it on Netlify. Now, learn how to add your domain from the registry platform to
  your Netlify site.
authors:
  - Ekene-Eze

image: "https://res.cloudinary.com/kennyy/image/upload/v1640949795/blogging/custom_domains_banner.png"
thumbnail: "v1640949795/blogging/custom_domains_banner.png"
date: 2021-12-20
lastmod: 2021-12-15
topics:
  - tutorials
tags:
  - netlify-dns
tweet: ""
format: blog
# featured: true
seo:
  ogimage: /images/custom-domains-og.png
  metatitle: Learn how to add custom domains to your Netlify sites!
  metadescription:
    Learn how to add custom domains from multiple domain registrars
    to your Netlify sites
---

So you've finished building that awesome site, you've deployed it to Netlify and tested all the functionalities. Everything is working perfectly and your site is available on Netlify at a URL like `the-name-of-your-site.netlify.app`.

Time to connect your custom domain right?

If you're anything like me, you probably bought that fancy domain 100 years ago from domain registrar's like [Godaddy](https://www.domain.com/), [Namecheap](https://www.namecheap.com/), etc.

Now it's time to finally use it. Let me show you how:

When you've logged into your Netlify account, select the site you want to link to a custom domain. In the site UI, click the `Set up a custom domain` button:

![netlify site ui](https://res.cloudinary.com/netlify/image/upload/v1638201900/blog/site%20ui.png)

Next, enter the domain you wish to add to the site and click `Verify`.

![verify domain](https://res.cloudinary.com/netlify/image/upload/v1638287617/blog/verify.png)

Netlify will then verify that you have indeed registered the domain, ... or not.

![add the registered domain to site](https://res.cloudinary.com/netlify/image/upload/v1638287637/blog/add%20domain.png)

If the domain has been registered as is the case in the screenshot above, Netlify will then prompt you to add the domain to your site.

### Add Netlify DNS records to your domain registrar account

Login to the account where you bought your domain. In my case it's `Name.com`. Select the domain you want to link to your Netlify site and open the DNS records management portal.

Next, add DNS records to point your domain name to Netlify's apex load balancer as specified in the [Netlify documentation](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/).

![A Name DNS record](https://res.cloudinary.com/netlify/image/upload/v1638289662/blog/ANAME.png)

If you check back on your Netlify UI, you should see that the apex domain is now connected.

![domain connected](https://res.cloudinary.com/netlify/image/upload/v1638289831/blog/domain%20connected.png)

You may have noticed that Netlify automatically added a `www` subdomain and it is currently not propagated.

That is because we've not added a DNS record for it on the domain registrar. To do that, go back to your DNS management portal and add a new CNAME record like so:

![CNAME DNS record](https://res.cloudinary.com/netlify/image/upload/v1638289662/blog/CNAME.png)

And with that, we should have the `www` subdomain wired up in Netlify!

![Subdomain connected](https://res.cloudinary.com/netlify/image/upload/v1638290439/blog/subdomain%20connected.png)

And that is how to add custom domains to your Netlify sites. If you click on any of the domains listed above, it should load your site as expected.

If you still find any of this confusing or you'd prefer to watch me do this in-person, here's a [YouTube tutorial](https://youtu.be/kIdJi8NBvgY) where I went over this process. I also covered how to provision a Let's Encrypt certificate for the custom domain on the video.

Have fun watching!
