import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js'; // Assuming this is the correct import

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Find existing conversation between sender and receiver
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // If new message is created, push its ID to the conversation's messages array
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNTIONALITY WILL GO HERE

        // Save both the conversation and the new message
        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(),newMessage.save()])

        // Respond with the new message
        res.status(201).json(newMessage);

    } catch (error) {
        // Log the error and respond with an internal server error
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }, 
        }).populate("messages");

        if(!conversation)return res.status(200).json([]);

        const messages = conversation.messages;

        // Respond with the new message
        res.status(200).json(messages);

    } catch (error) {
       
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
