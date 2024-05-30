import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participant: { $all: [senderId, reciverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participant: [senderId, reciverId],
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }


        await Promise.all([conversation.save(), newMessage.save()]);  // this will optimise save by parallel processing

        // socket 
        const receiverSocketId = getReceiverSocketId(reciverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);

        }


        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error while sending message in message controller :", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participant: { $all: [senderId, userToChatId] },
        }).populate("messages")

        if(!conversation) return res.status(200).json([]);

        const message = conversation.messages;

        res.status(200).json(message)
    } catch (error) {
        console.log("error in getMessages : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}