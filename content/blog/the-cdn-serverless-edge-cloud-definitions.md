---
title: What is the Edge, CDN, Serverless, Cloud, and all the fancy words you don't really understand
description: Different people use these terms in a lot of different ways. This makes it difficult to be certain what they mean. I hope this post at the very least helps you understand how to think about them and clear any confusions they introduce when you come across them as you journey through the tech void.
authors:
  - Ekene-Eze

image: "../content/blog/images/cdn.png"
thumbnail: "v1644517485/cdn_edge_serverless_v45ths.png"
date: 2022-01-27
lastmod: 2022-01-27
topics:
  - tutorials
tags:
  - cdn
  - cloud
  - edge
  - serverless
tweet: ""
format: blog
# featured: true
---

If you've been around the "modern web" space, you would have come across some of these terms a couple of times. Each time seems to mean something a little different than the last. If you've stayed around long enough, you would have formed ideas that help you understand them, but if that's not the case, I'm specifically writing this post to explain them in as much simplicity as I can.

## Serverless

The most popular saying about serverless is that it is not truly serverless, it's just someone else's server. So in explaining it with zero ambiguity, The term serverless refers to a model that allows developers to build and run applications without the need to build or manage servers or give any thought to what underlying server infrastructure might exist.

If that is not very clear yet, think of it this way. Before the serverless era, you would need to provision a server for your web applications. The cost of doing that can be overwhelming and the work required to constantly maintain and scale it can be expensive. However, with serverless, you can escape all that trouble by taking advantage of the infinitely scalable and elastic hosting infrastructure that has been provided as enterprise solutions by companies like Amazon. Platforms like Netlify also provide a generous free tier plan for regular web applications.

## CDN

The CDN is short for Content Delivery Network, which is a global network of servers where you can deploy your application to get it closer to users. Without a CDN, If you have a server in London, and you deploy your application on that server, your users in London will have a great experience. That's because the server is close to them so the request-to-response trip is short, hence giving them a very fast experience.

However, that is not the case for your users in other parts of the world farther from London. This is the problem that CDNs solve. Hosting providers like AWS, Azure, Netlify etc have CDNs scattered all over the world. This means that if your site is deployed on their platform, they will respond to your user's requests from the CDN closest to them. Giving everyone the same fast experience, irrespective of their location.

## Edge

People often make reference to deploying to the edge, which can mean deploying to a CDN and the content being served from the geographical locations closest to the user. However, there is an emerging architectural pattern where some computational tasks are also distributed to the edge of a network to be closer to the requesting users. Performing these computations "at the edge" is becoming very popular thanks to things like Edge Functions, Netlify Edge Handlers, and similar solutions from cloud providers.

The line between the CDN and the Edge is very thin. Some popular use of this term is "X thing is deployed to the edge" or "Y thing runs on the edge". The major distinction I've found in the usage of both terms is that when people talk about the CDN, they're often talking about deploying websites, or statically generated assets. When they talk about the edge, the conversation is usually around deploying serverless functions.

## Cloud

Depending on the context, people have also used `the cloud` to refer to the CDN. However, the cloud is a collection or an ecosystem of different servers that are connected and work together as a single entity. The cloud encompasses both the servers that are accessed over the internet and the software and databases that run on them.

Cloud servers are located in data centers all over the world, and this is what powers the content delivery network we talked about earlier.

### Conclusion

Different people use these terms in a lot of different ways. This makes it difficult to be certain what they mean. I hope this post at the very least helps you understand how to think about them and clear any confusions they introduce when you come across them as you journey through the tech void.
