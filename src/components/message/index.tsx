import { FC, useEffect, useRef, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import { Message } from "../../types/message"
import { MessageList } from "./MessageList"

export interface UseConversationState {
    messages: Message[]
    lastMessageTimestamp: number
    sendMessage: (
        message: String
    ) => Promise<Message>
}

export const useMessagesState = (conversationId:number, loggedUserId:number):UseConversationState => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [lastMessageTimestamp, setLastMessageTimestamp] = useState<number>();
    
    const getMessages = async (conversationId:number) => {
        const res = await axios.get(`/messages/${conversationId}`);

        return res.data;
    };

    const postMessage = async (
        conversationId: number,
        message: String,
        authorId: number
    ) => {
        const postData = {
            body: message,
            authorId,
            conversationId,
            timestamp : Math.floor(Date.now() / 1000)
        };
        const result = await axios.post(`/messages/${conversationId}`, postData);

        return result.data;
    }

    const sendMessage = async (message: String ) => {
        const newMessage = await postMessage(conversationId, message, loggedUserId);
        setMessages([...messages, newMessage]);
        setLastMessageTimestamp(newMessage.timestamp);

        return newMessage;
    };

    useEffect(() => {
        const fetchData = async () => {
            const messages = await getMessages(conversationId);
            if(messages && messages.length > 0) {
                setLastMessageTimestamp(messages[messages.length-1].timestamp);
            }
            setMessages(messages);
        }
       
        fetchData();
    }, [conversationId]);

    return {
        messages,
        lastMessageTimestamp,
        sendMessage
    }
}

export interface MessagesProps {
    messages: Message[];
    loggedUserId: number;
    otherId: number;
}

export const Messages:FC<MessagesProps> = ({messages, loggedUserId, otherId }) => {
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);

    return (
        <Container>
            <MessageList messages={messages} loggedUserId={loggedUserId} otherId={otherId} />
            <div ref={bottomRef} />
        </Container>
    );
}

const Container = styled.div`
    padding: 1rem;
    margin: 1rem;
    background-color: #fafafa;
    border-radius: 10px;
    height: 85%;
    overflow-y: auto;
`;
