import "isomorphic-fetch";
import { collection, addDoc } from "firebase/firestore";

import { ChatCompletion, CoachesAnawer, FirestoreRecord } from "../types";
import { database } from "src/firebaseConfig";

const api = {
  openai: {
    async chatCompletion(text: String): Promise<CoachesAnawer | null> {
      try {
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "user",
                  content: `${text}. Don't include the fact that you are an AI model, just include the steps. Also structure the response in a JSON object where there is a key called "answer" that contains your instructions in HTML formatting that can be JSON parsed at all times. Then also include another key called "trickName" which is just the name of the trick. Also include a key called "difficulty" which is either Easy, Intermediate, or Hard. Also include a key called "type" which describes what the trick type is, such as flip trick or very trick. Do not include any extra notes. The response must only be a JSON object`,
                },
              ],
            }),
          }
        );
        const data: ChatCompletion = await response.json();
        console.log("!!!!!!!!!!!!!!!", data);

        if (!data.choices.length) {
          throw "Unknown error";
        }

        return JSON.parse(data.choices[0].message.content);
      } catch (e) {
        console.log("ERROR: ", e);

        return null;
      }
    },
  },
  youtube: {
    async getRelatedVideos(searchTerm: string): Promise<string[]> {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`
        );
        const data = await response.json();
        const videoIds: string[] =
          data.items?.map((item: any) => item.id.videoId) ?? [];

        return videoIds;
      } catch (e) {
        console.log("ERROR: ", e);
        return [];
      }
    },
  },
  firebase: {
    async saveQuestionAndResponse(record: FirestoreRecord) {
      const dbInstance = collection(database, "records");
      await addDoc(dbInstance, record);
    },
  },
};

export default api;
