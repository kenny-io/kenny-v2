<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const toastMessage = ref('');
const toastType = ref<'success' | 'error' | ''>('');
const showToast = ref(false);
const router = useRouter();
function triggerToast(message: string, type: 'success' | 'error') {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => { showToast.value = false; }, 3500);
}

const subscriberName = ref('');
const subscriberEmail = ref('');
const isSubmitting = ref(false);
const formRef = ref(null);

const handleNewsletterSubscribe = async () => {
  if (!subscriberEmail.value || !subscriberName.value) {
    triggerToast('Please fill in both name and email fields', 'error');
    return;
  }
  try {
    isSubmitting.value = true;
    await new Promise(resolve => setTimeout(resolve, 1500));
    triggerToast(`Thanks for subscribing, ${subscriberName.value}!`, 'success');
    setTimeout(() => {
      router.push('/newsletter');
    }, 1000);
    subscriberName.value = '';
    subscriberEmail.value = '';
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    triggerToast('Subscription failed. Please try again later.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
<template>
  <div class="relative w-full">
    <transition name="fade">
      <div v-if="showToast" :class="['fixed left-1/2 top-8 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold', toastType === 'success' ? 'bg-green-600' : 'bg-red-600']" style="transform: translateX(-50%); min-width: 220px; text-align: center;">
        {{ toastMessage }}
      </div>
    </transition>
    <form ref="formRef" @submit.prevent="handleNewsletterSubscribe" class="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
      <input
        v-model="subscriberName"
        type="text"
        placeholder="John Doe"
        class="flex-1 min-w-0 px-6 py-4 rounded-lg bg-[#181818] border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 text-lg"
        required
      />
      <input
        v-model="subscriberEmail"
        type="email"
        placeholder="johndoe@gmail.com"
        class="flex-1 min-w-0 px-6 py-4 rounded-lg bg-[#181818] border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 text-lg"
        required
      />
      <button
        type="submit"
        :disabled="isSubmitting"
        class="px-10 py-4 text-lg font-semibold rounded-lg bg-[#19e97c] text-black hover:bg-[#13c46b] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#19e97c]/50 disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
      >
        <span>Subscribe</span>
        <Icon v-if="isSubmitting" name="svg-spinners:180-ring" class="w-5 h-5" />
      </button>
    </form>
  </div>
</template>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 