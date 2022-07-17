import { useEffect, useState } from "react"
import axios from 'axios'
import styled from 'styled-components'

import { Conversation } from "../../types/conversation"

import { ConversationList } from "./ConversationList"
import { getNicknameOtherUser } from "../../utils/index"

export interface UseConversationState {
    conversation: Conversation
    nicknameOtherUser: String
    setConversation: (conversation: Conversation) => void
    updateConversation: (conversationId: number, lastMessageTimestamp: number) => Promise<Conversation>
}

export const useConversationState = (loggedUserId:number, conversationId: number): UseConversationState => {
    const [conversation, setConversation] = useState<Conversation>();
    const [nicknameOtherUser, setNicknameOtherUser] = useState<String>('');

    const getConversation = async (conversationId:number) => {
        const res = await axios.get(`/conversation/${conversationId}`);

        return res.data.pop();
    };

    const updateConversation = async (conversationId: number, lastMessageTimestamp: number) => {
        const res = await axios.patch(`/conversation/${conversationId}/update`, { lastMessageTimestamp });
        
        return res.data;
    }

    useEffect(() => {
        const fetchData = async () => {
            const conversation = await getConversation(conversationId);
            setConversation(conversation);
            if(conversation) {
                setNicknameOtherUser(getNicknameOtherUser(loggedUserId, conversation));
            }
        }
       
        fetchData();
    }, [conversationId, loggedUserId]);

    return {
        conversation,
        nicknameOtherUser,
        setConversation,
        updateConversation
    }
}

export interface UseConversationsState {
    conversations: Conversation[];
    setConversations: (conversations: Conversation[]) => void;
}

export const Conversations = ({conversations, loggedUserId}) => {
    if(conversations.length === 0) {
        return (
            <Container><h2>Pas de conversation</h2></Container>
        )
    }

    return (
        <div>
            <ConversationList conversations={conversations} loggedUserId={loggedUserId} />
        </div>
    )
};

const Container = styled.div`
    display: flex;
    justify-content: center;
`;