export async function useMailchimp(email: string) {
  return await $fetch('/api/mailchimp', {
    body: { email },
    method: 'POST',
  }).catch((e) => e.data);
}
