export default defineEventHandler(async (event) => {
  console.log('Mailchimp event', event);
  const runtimeConfig = useRuntimeConfig();
  const { email, first_name } = await readBody(event);
  let result;

  if (!email) {
    console.error('Missing `email` in the subscribe body');
    return;
  }
  const mailchimp = await import('@mailchimp/mailchimp_marketing').then(
    (r) => r.default || r
  );
  mailchimp.setConfig({
    apiKey: runtimeConfig.MAILCHIMP_API_KEY,
    server: runtimeConfig.MAILCHIMP_SERVER_PREFIX,
  });
  try {
    const response = await mailchimp.lists.addListMember(
      runtimeConfig.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: first_name,
        },
        tags: ['newsletter', 'newwebsite'],
      }
    );
    result = {
      message: `Email ${response.email_address} subscribed to Mailchimp`,
      status: 200,
    };
  } catch (err) {
    result = { message: err.response.body.title, status: err.status };
  }

  // try {
  //   const response = await fetch(
  //     `https://${runtimeConfig.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${runtimeConfig.MAILCHIMP_AUDIENCE_ID}/members`,
  //     {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         email_address: email,
  //         merge_fields: {
  //           FNAME: first_name,
  //         },
  //         status: 'subscribed',
  //         tags: ['newsletter', 'website'],
  //       }),
  //       headers: {
  //         Authorization: `apikey ${runtimeConfig.MAILCHIMP_API_KEY}`,
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   ).then((res) => res.json());

  //   result = {
  //     message: `Email ${response.email_address} subscribed to Mailchimp`,
  //     status: 200,
  //   };

  //   if (response.status === 400) {
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(response),
  //     };
  //   }
  //   // return success

  //   return result;
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ msg: error.message }),
  //   };
  // }

  if (result.status !== 200)
    throw createError({
      statusCode: result.status,
      statusMessage: result.message,
    });
  return result;
});
