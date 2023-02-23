import { DocumentData } from "firebase/firestore";
import React from "react";

type Props = {
  message: DocumentData;
};

const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-slate-700"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="User icon"
          className="h-8 w-8 rounded-md"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
