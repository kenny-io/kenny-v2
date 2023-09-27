---
title: Understanding the new script setup with defineProps & defineEmits in Vue 3.2
description: Learn the fundamentals of Vue 3.2 script setup feature with special APIs like defineProps and defineEmits. Vue 3 introduced us to the Composition API - a different way of handling reactive data using ref and reactive in Vue.js. It received a lot of positive feedback but also some concerns about the verbosity of the Composition API usage inside SFCs.
authors:
  - Ekene-Eze

image: "https://res.cloudinary.com/kennyy/image/upload/v1644517485/script_setup_vue_3_po3y9u.png"
thumbnail: "v1644517485/script_setup_vue_3_po3y9u.png"
date: 2022-01-13
lastmod: 2022-01-13
topics:
  - tutorials
tags:
  - vue
  - script-setup
  - vue3

tweet: ""
format: blog
# featured: true
---

Vue 3 introduced us to the Composition API - a different way of handling reactive data using `ref` and `reactive` in Vue.js. It received a lot of positive feedback but also some concerns about the verbosity of the Composition API usage inside SFCs. Then comes Vue 3.2 with a stable release of a new feature `<script setup>` which aims to address those concerns in a very practical way.

Why am I excited about `<script setup>`? It made the already simple Composition API even simpler. With `<script setup>`, we don't need named or default exports in SFCs anymore, we can simply define variables and use them in the template.

### Getting started with script setup

This is probably the easiest part. To start using `<script setup>`, all you need to do is add `setup` to your existing script tag like this:

```js
<script setup>import {ref} from 'vue' const name = ref('Joe')</script>
```

And you can access name in the template like this:

```js
<script setup>
  import { ref } from 'vue'

  const name = ref('Joe')
</script>

<template>
  <h1>{% raw %}{{ name }}{% endraw %}</h1>
</template>
```

That's it. This is simple and very useful in reducing code bulk in larger codebases. To achieve the same result with the Composition API, we'll need to return the variable (i.e expose it to the template) like this:

```js
<script>
import { ref } from 'vue'

export default {
  setup() {
    const name = ref('Joe')

    return {
      name
    }
  }
}
</script>

<template>
  <h1>{% raw %}{{ name }}{% endraw %}</h1>
</template>

```

You can immediately get a sense of how large a codebase can grow when you have large SFCs. With `script setup`, we get rid of all the unnecessary boilerplate code and trim our component down to only what is needed.

Note, we used a `name` variable for simplicity in the `script setup` snippet, but you're not limited to just variables. Anything (including helper functions) declared inside the `script setup` context will be accessible from the template.

```js
<script setup>
import { greet } from './utils/greeting'
</script>

<template>
  <div>{% raw %}{{ greet('good morning!') }}{% endraw %}</div>
</template>
```

But that's not all, we can also import and use components without any extra config or bindings. For instance, consider importing a `<SubscriptionForm />` component into the `App.vue` file. Without the `script setup` feature, you'll probably do something like this:

```js
// App.vue
<script>
  import SubscriptionForm from './components/SubscriptionForm'

  export default {
    components: { SubscriptionForm },
    setup(){
      return {}
    }
  }
</script>

<template>
  <SubscriptionForm />
</template>

```

This is the pattern I imagine you would be familiar with. But it gets better. With `script setup` you can import the component and use it in the template with no additional step, like this:

```js
// App.vue
<script setup>
  import SubscriptionForm from './components/SubscriptionForm'

</script>

<template>
  <SubscriptionForm />
</template>
```

We didn't need to declare a `components` object and register the `SubscriptionForm` component in it as we did before. Cool right?

A good question to ask at this point would be, so we've imported the `SubscriptonForm />` component into `App.vue`, how do we pass props to it? or emit an event from it to tell the parent that the form has been submitted? Let's find out.

The `script setup` feature ships with the `defineProps` and `defineEmits` APIs that make it possible for us to declare props and emits. They are automatically available inside the `script setup` context and doesn't need to be imported to use them. Let's demonstrate!

First, in the `<SubscriptionForm />` component, lets define a prop and also emit the `submit` event like so:

```js
// SubscriptionForm.vue
<template>
  <form @submit.prevent="subscribe" v-if="props.age">
    <label>Email
      <input v-model="email" type="email"/>
    </label>
    <button>Subscribe</button>
  </form>
</template>

<script setup>
import { computed } from "@vue/reactivity"

const props = defineProps({
  age: {
    type: Number,
    required: true
  }
})
const email = computed({
  get() {
    return props.email
  },
  set(value) {
    emit('subscribe:user', value)
  }
})

const emit = defineEmits(['subscribe:user', 'subscribe'])

function subscribe() {
  emit('subscribe')
}
</script>
```

In the snippet above, we did a couple of things using the `defineProps` and `defineEmits` API:

- defineProps – allows us to define props for our component. We used it to define the `age` prop that will get passed in from the parent (App.vue). Our form will only be visible IF the age prop exists.

- defineEmits – lets us define the events that our component can emit. In this case, we emit a `subscribe` event to let the parent component (App.vue) know when the form has been submitted. When that happens, we just log "form submitted" on the parent.

Next, lets update App.vue to capture all these code updates:

```js
// App.vue
<script setup>
  import SubscriptionForm from './SubscriptionForm'

  function subscribeUser() {
    console.log("form submitted! do something");
  }
</script>


<template>
  <SubscriptionForm age=12  @submit="subscribeUser" />
</template>

```

Here, we pass the `age` prop to the `SubsbscriptionForm />` component and set up our `submit` event to call the `subscribeUser` function whenever the form is submitted from the child component.

And that is how we use props and events in the `script setup` context.

### Worthy mentions

As you can imagine, other features shipped with `script setup` that we did not get to in this post. However, one that I find really worthy of mentioning is the dynamic components feature. It allows you to dynamically render components in your Vue templates when certain conditions are satisfied.

```js
<script setup>
import Profile from './Profile.vue'
import LoginForm from './LoginForm.vue'
</script>

<template>
  <component :is="userLoogedIn ? Profile : LoginForm" />
</template>
```

If you'd like to explore more features and learn other things about the Vue `script setup` feature, feel free to read the [documentation here](https://v3.vuejs.org/api/sfc-script-setup.html#basic-syntax).
