const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: { type: "string", trim: true },
    isGroupChat: { type: "boolean", default: false },
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const chat = mongoose.model("Chat", chatModel);
mongoose.export = chat;
