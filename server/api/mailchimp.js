export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const { email, first_name } = await readBody(event);
  let result;

  if (!email) {
    console.error("Missing `email` in the subscribe body");
    return;
  }
  const mailchimp = await import("@mailchimp/mailchimp_marketing").then((r) => r.default || r);
  mailchimp.setConfig({
    apiKey: runtimeConfig.MAILCHIMP_API_KEY,
    server: runtimeConfig.MAILCHIMP_SERVER_PREFIX
  });
  try {
    const response = await mailchimp.lists.addListMember(runtimeConfig.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first_name
      }
    });
    result = { message: `Email ${response.email_address} subscribed to Mailchimp`, status: 200 };
  } catch (err) {
    result = { message: err.response.body.title, status: err.status };
  }
  if (result.status !== 200)
    throw createError({ statusCode: result.status, statusMessage: result.message });
  return result;
});
