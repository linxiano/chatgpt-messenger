// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from "@/utils/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "@/firebaseAdmin";
import { Session } from "next-auth";

type Data = {
  answer: string;
};

type ResponseType = {
  prompt: string;
  chatId: string;
  model: string;
  session: Session;
};

const api = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt, chatId, model, session }: ResponseType = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a input prompt!" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // ChatGPT query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png",
    },
  };

  // Post message to database from admin on behave of a specific user!

  await adminDb
    .collection("users")
    .doc(session?.user?.email!)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
};

export default api;
