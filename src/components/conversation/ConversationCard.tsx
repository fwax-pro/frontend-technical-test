import { FC, useEffect, useState } from "react"
import Link from "next/link"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
import Image from "next/image"

import { Avatar } from "../sharedstyles"

import { getDateTimeFromTimeStamp, getNicknameOtherUser, getOtherUserId } from "../../utils/index"
import { Conversation } from "../../types/conversation"

interface ConversationCardProps {
    conversation: Conversation
    loggedUserId: number
}

export const ConversationCard: FC<ConversationCardProps> = ({ conversation, loggedUserId }) => {
    const router = useRouter();

    const [lastMessageTimestamp, setLastMessageTimestamp] = useState<String>('');
    const [nickname, setNickname] = useState<String>('');

    useEffect(() => {
        setLastMessageTimestamp(getDateTimeFromTimeStamp(conversation.lastMessageTimestamp));
        setNickname(getNicknameOtherUser(loggedUserId, conversation) );
    },[loggedUserId, conversation]);

    const otherUserId = getOtherUserId(loggedUserId, conversation);
   
    return (
        <Link href={`/messages/${conversation.id}`}>
            <a>
                <Card>
                    <motion.div layoutId={`user-avatar-${conversation.id}`}>
                        <Avatar>
                            <Image
                                alt='avatar user'
                                src={`${router.basePath}/avatars/user-${otherUserId}.png`}
                                className="image" 
                                width={64}
                                height={64}
                            />
                        </Avatar>
                    </motion.div>
                    <CardBody>
                        <Nickname>{ nickname }</Nickname>
                        <LastMessageTimestamp>{ lastMessageTimestamp }</LastMessageTimestamp>
                    </CardBody>
                </Card>
            </a>
        </Link>
    )
};

const Card = styled.div`
    display: flex;
    align-items: center;
    background-color: #fafafa;
    margin: 1rem;
    border-radius: 10px;
    padding: 5px;
    transition: 0.5s;

    &:hover {
        transform: scale(1.02);
        border: 1px solid ${({ theme }) => theme.colors.primary};
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    flex: 1;
`;

const Nickname = styled.h2`
    font-weight: bold;
`;

const LastMessageTimestamp = styled.p`
    font-weight: 400;
    color: #ccc;
`;
