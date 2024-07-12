export const submitContact = async ({ data }) => {
  try {
    console.log("sending");
    const res = await fetch("https://api-url.com/", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return res;
  } catch (err) {
    throw err;
  }
};
