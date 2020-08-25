import axios from "axios";

function getRequestParams(email) {
  //get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;

  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATA_CENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];

  const url = `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
  
  const data = {
    email_address: email,
    status: "subscribed",
  };

  //Api key needs to be encoded into base 64 format
  const encodedApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization : `Basic ${encodedApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };

}

export default async (req,res) => {
  const {email} = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Please enter your email",
    });
  }

  try {
    const {url, data, headers} = getRequestParams(email);
    const response = await axios.post(url, data, { headers });

    //success
    return res.status(201).json({error: null});
  } catch (error) {
    return res.status(400).json({
      error: "Oops.. something went wrong.",
    });
  }
}
