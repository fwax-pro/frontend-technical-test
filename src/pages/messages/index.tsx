import { FC } from "react"
import Image from "next/image"
import { useRouter } from 'next/router'
import axios from "axios"

import { Conversations } from '../../components/conversation'
import { Header, Layout, Main } from '../../components/layout'
import { Avatar, Title } from '../../components/sharedstyles'

import { getLoggedUserId } from '../../utils/index'
import { GetStaticProps } from "next"
import { Conversation } from "../../types/conversation"

interface ConversationsPageProps {
    conversations: Conversation[]
    loggedUserId: number
}

const ConversationsPage: FC<ConversationsPageProps> = ({ loggedUserId, conversations }) => {
    const router = useRouter();

    return (
        <Layout>
            <Header>
                <Avatar>
                    <Image 
                        src={`${router.basePath}/avatars/user-${loggedUserId}.png`} 
                        width={64} 
                        height={64}
                        alt='avatar user'
                    />
                </Avatar>
                <Title>Discussions</Title>
            </Header>
            <Main>
                <Conversations conversations={conversations} loggedUserId={loggedUserId} />
            </Main>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps  = async () => {
    const loggedUserId = getLoggedUserId();
    const res = await axios.get(`/conversations/${loggedUserId}`);

    return { props: {loggedUserId, conversations: res.data } }
}

export default ConversationsPage;
