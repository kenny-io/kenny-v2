---
title: Pairing Nuxt 3 with TailwindCSS and Supabase
description: So Nuxt 3 is out and I'm obviously very excited about it so I went
  ahead and paired it up with TailwindCSS and Supabase. Read on and I'll show you how to set it up and build a subscription form with it.
authors:
  - Ekene-Eze
date: 2021-11-01
lastmod: 2021-11-01
topics:
  - tutorials
tags:
  - Nuxt 3
  - TailwindCSS
  - Supabase
tweet: ""

canonical_url: "https://www.netlify.com/blog/2021/10/29/pairing-nuxt-3-with-tailwindcss-and-supabase/?utm_campaign=devex-ke&utm_source=twitter&utm_medium=social&utm_content=Nuxt3%20with%20Tailwind%20and%20Supabase%20post"
image: "https://res.cloudinary.com/kennyy/image/upload/v1635771373/blogging/Nuxt_3_Tailwind_OG.png"
thumbnail: "v1635771373/blogging/Nuxt_3_Tailwind_OG.png"
format: blog
seo:
  metatitle: Learn how to work with with TailwindCSS and Supabase in Nuxt 3 projects
  metadescription: Learn how to work with TailwindCSS and Supabase in Nuxt 3 projects
  ogimage: /img/blog/other-6.png
---

> Originally published [here](https://www.netlify.com/blog/2021/10/29/pairing-nuxt-3-with-tailwindcss-and-supabase/?utm_campaign=devex-ke&utm_source=twitter&utm_medium=social&utm_content=Nuxt3%20with%20Tailwind%20and%20Supabase%20post)

So Nuxt 3 is out and I'm obviously very excited about it so I went ahead and paired it up with TailwindCSS and Supabase.

Quick recap in case you missed some of the highlights, Nuxt 3 shipped with some shiny new features like:

- New CLI - nuxi
- Nuxt Nitro - a new server engine
- Native TypeScript support
- Multiple rendering modes (SSR, CSR, SSG)
- Support for the latest Vue 3 features
- Bundling with both Vite and Webpack 5

You can learn more about them in [the announcement post](https://nuxtjs.org/announcements/nuxt3-beta/).

So I paired up Nuxt 3 with TailwindCSS and Supabase to create a newsletter subscription form eh? let me tell you all about it.

> Also feel free to build along in this project if you'd like a hands-on experience. Otherwise, the completed project is available on [this repo](https://github.com/kenny-io/Nuxt3-Tailwind-Supabase-Demo) if you'd prefer to mess with the code or watch the [video tutorial here](https://youtu.be/xbE11CfZpNQ)

## Create a Nuxt 3 project

The Nuxt 3 docs is pretty straightforward on creating new projects. With the new CLI tool nuxi, we can quickly start a new project with the commands below.

Initialize a nuxt3 project

```bash
npx nuxi init nuxt3-app

```

Change into the new project directory

```bash
cd nuxt3-app # change into the project directory
```

Install the dependencies

```bash
yarn install
```

Lastly, start the dev server with:

```bash
yarn dev

```

Your project should be running on port `3000` locally. Great. step 1 is done. Let's move on!

## Add TailwindCSS to the project

> Be mindful that Nuxt 3 is in beta, which means that things are prone to change. The technique to get Tailwind working has may change so the instructions I'm going to explain below is based on what is currently working at the time of writing this post.

Install TailwindCSS via the terminal:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Create a Tailwind config file:

```bash
npx tailwindcss init
```

This command will create a `tailwind.config.js` file at the root of your project, open the file and update it like so:

```js
// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
```

Next, we need to include Tailwind in our CSS file. Mine is located at this path: `assets/css/tailwind.css`. Let's update this file with this snippet:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Finally, we need to tell Nuxt how to find that file and also set up our post CSS options to include both the Tailwind and autoprefixer plugins. Open `nuxt.config.ts` and update it with:

```js
import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
});
```

> According to [this directive](https://github.com/nuxt-community/tailwindcss-module/issues/387#issuecomment-943339692), it is advised to import Tailwind inside the `App.vue` file as opposed to using the `css` prop as we did in the snippet above.

So alternatively, you can open your `App.vue` file, create a `<script>` tag to import your CSS file like so:

```js
<script lang="ts" setup>
  import './assets/css/tailwind.css'
</script>
```

This will give you Hot Module Replacement.

And that's it. We have TailwindCSS installed in our Nuxt 3 project and all you need to do now is add Tailwind classes to your elements and boom, beauty...

## Install Supabase

> I will assume that you have a [Supabase account](app.supabase.io), if you don't you can create one if you need a simple database solution for your projects.

Adding Supabase to any project is pretty straightforward as you'll see shortly. Just run the command below:

```bash
npm install @supabase/supabase-js
```

And that's it!

## Create a newsletter subscription form with Tailwind

So I mentioned earlier that I built a newsletter subscription form with these 3 tools that I've just set up, here's how:

First, in `App.vue`, update the template to show this Tailwind form:

```js
<template>
  <form class="text-gray-600 body-font">
    <div class="container px-5 py-24">
      <div class="lg:w-3/5 md:w-1/2">
        <h1 class="text-gray-900">Subscribe to my newsletter</h1>
        <p class="leading-relaxed mt-4">
          I send out a weekly newsletter with tips and tricks for web
          development.
        </p>
      </div>
      <div class=" lg:w-2/6 md:w-1/2 bg-gray-100">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Subscribe
        </h2>

        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded"
          />
        </div>
        <button class="text-white bg-indigo-500">Subscribe</button>
      </div>
    </div>
  </form>
</template>
```

> Note that I removed some of the Tailwind classes on the snippet above to keep it nice and clean.

This form will simply collect the email address of the user who has so graciously decided to sign up for our fake newsletter. It looks like this btw!

![screenshot of the newsletter form](https://res.cloudinary.com/netlify/image/upload/v1635249915/blog/tailwind%20nuxt%20form.png)

## Save form data to Supabase

Next, how do we save this email address to our Supabase database? Good question.

The first thing we need to do is get the user's email from our form and then post it to Supabase using our Nuxt 3 API route. Did I say API routes in Nuxt? Yep, we have those now. To do that, let's set up the script in our `app.vue` file to collect the email and send it off to our endpoint:

```js
<script setup>
  // variable to hold the response from supabase
  const DBResponse = ref([]);
  // variable to hold the provided email address
  const userEmail = ref("");
  // function to send email to our server route
  async function postToDB() {
    const result = await fetch(`/api/subscribe?email=${userEmail.value}`);
    const data = await result.json();
    DBResponse.value = data;
  }
</script>
```

And that's it. What's happening here is, when a user provides their email in our newsletter form, we'll collect the email and send it to our Nuxt API route at this path `/server/api/subscribe` which we haven't created yet. So, create the file and set it up like so:

```js
import * as url from "url";
import { createClient } from "@supabase/supabase-js";

export default async (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const { SUPABASE_URL, SUPABASE_KEY } = process.env;
  try {
    // Initialize Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    let response;
    const { email } = queryObject;
    if (email) {
      // Save user to Supabase database
      const { data, error } = await supabase.from("Subscribers").upsert({
        email: email
      });
      response = data;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.write(JSON.stringify(error));
    res.end();
  }
};
```

Since we appended the provided email to the API route from the client when we did something like: `fetch('/api/subscribe?email=${userEmail.value}')`, we had to then destructure it out of the `queryObject` using the `url` package we imported at the very top.

We have the user's email, great! we can now send it off to our database. Since we are using Supabase for this, I've created a `Subscribers` table in one of my Supabase projects so I can store these emails there.

I used some environment variables in the snippet above to initialize Supabase. If you need help finding your Supabase credentials, select your project on the [Supabase dashboard](app.supabase.io), click on the API tab on the left side nav and click authentication. This will show you your credentials for the selected project.

And that's it! Time to take this project for a spin

![test the app](https://res.cloudinary.com/netlify/image/upload/v1635250599/blog/testing%20app.gif)

## Conclusion

Kind reminder that though we are excited about these new features in Nuxt 3, it is still in public beta and should not be used in production yet. That said, I had fun putting this together and I hope it helps you add TailwindCSS and Supabase to your Nuxt 3 projects. Source code is [here on Github](https://github.com/kenny-io/Nuxt3-Tailwind-Supabase-Demo) and demo is [live on Netlify](https://nuxt3-tailwind-supabase.netlify.app/)
