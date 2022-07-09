import { FC } from 'react'
import { GetStaticProps } from "next"
import { motion } from "framer-motion"
import styled from "styled-components"
import Image from "next/image"
import { useRouter } from 'next/router'

import { Messages, useMessagesState } from '../../components/message'
import { Header, Layout, Main } from '../../components/layout'
import { Avatar, SubTitle, Title } from '../../components/sharedstyles'
import { Button } from '../../components/buttons/Button'
import { AddMessage } from '../../components/message/AddMessage'
import { useConversationState } from '../../components/conversation'

import { getDateTimeFromTimeStamp, getLoggedUserId } from '../../utils/index'
import { MdKeyboardBackspace } from 'react-icons/md'

interface ConversationPageProps {
    conversationId: number
}

const ConversationPage: FC<ConversationPageProps> = ({ conversationId }) => {
    const router = useRouter();
    const loggedUserId = getLoggedUserId();

    const { 
        messages,
        sendMessage
    } = useMessagesState(conversationId, loggedUserId);

    const { 
        conversation,
        nicknameOtherUser,
        updateConversation,
        setConversation
    } = useConversationState(loggedUserId, conversationId);

    let otherUserId = 1;
    if(conversation) {
        otherUserId = loggedUserId === conversation.recipientId ? conversation.senderId : conversation.recipientId;
    } 
    
    const handleSendMessage = async (message: String) => {
        const newMessage = await sendMessage(message);
        const updatedConversation = await updateConversation(conversation.id, newMessage.timestamp );
        setConversation(updatedConversation);
    }

    return (
        <Layout>
            <Header>
                <Button onClick={() => router.back()}><MdKeyboardBackspace size="100%" color="#ff6e14"/> </Button>
                <motion.div layoutId={`user-avatar-${conversationId}`}>
                    <Avatar>
                        <Image 
                            src={`${router.basePath}/avatars/user-${otherUserId}.png`} 
                            alt='avatar user'
                            width={64} 
                            height={64}
                        />
                    </Avatar>
                </motion.div>
                <InfoContainer>
                    <Title>{nicknameOtherUser}</Title>
                    <SubTitle>dernier message: { getDateTimeFromTimeStamp(conversation?.lastMessageTimestamp) }</SubTitle>
                </InfoContainer>
            </Header>
            <Main>
                <Messages messages={messages} loggedUserId={loggedUserId} otherId={otherUserId}/>
                <AddMessage  sendMessage={(message: String) => handleSendMessage(message)} />
            </Main>
        </Layout>
    )
}

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const getStaticProps:GetStaticProps  = async ({ params }) => {
    return { props: { conversationId: params.id } }
}

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export default ConversationPage;
