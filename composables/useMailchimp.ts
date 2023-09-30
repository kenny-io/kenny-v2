export async function useMailchimp(email: string, first_name: string) {
  return await $fetch('/api/mailchimp', {
    body: { email, first_name },
    method: 'POST',
  }).catch((e) => e.data);
}
