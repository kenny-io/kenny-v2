export async function useMailchimp(email: string, first_name: string) {
  return await $fetch('/api/mailchimp', {
    body: { email, first_name },
    method: 'POST',
  }).catch((e) => {
    console.error(e);
    return e.data || e;
  });
}

// export async function useMailchimp(email: string, first_name: string) {
//   return await fetch('/api/mailchimp', {
//     body: JSON.stringify({ email, first_name }),
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).catch((e) => {
//     console.error(e);
//     return e.data || e;
//   });
// }
