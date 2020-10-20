import { fromByteArray } from "../../node_modules/base64-js";
import { TextEncoderLite } from "../../node_modules/text-encoder-lite";

const base64Encode = (str) => fromByteArray(new TextEncoderLite().encode(str));

const apiURL = "http://as2877.ddns.net:5984/yastva";
const headers = {
   "Content-type": "application/json",
   Authorization: `Basic ${base64Encode("admin:matrix-123")}`,
};

const getFromAPI = async (parURL) => {
   const response = await fetch(`${apiURL}/${parURL}`, {
      method: "get",
      headers,
   });
   if (!response.ok) {
      console.log("Абзац...", response);
   }

   return response.json();
};

export { apiURL, headers, getFromAPI };
