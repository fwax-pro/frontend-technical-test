import { FC } from "react"
import { useRouter } from "next/router"
import styled from "styled-components"

import Image from "next/image"
import { Avatar } from "../sharedstyles"

import { Message } from "../../types/message"

interface MessageItemProps {
    message: Message
    loggedUserId: number
    otherId: number
}

export const MessageItem: FC<MessageItemProps> = ({ message, loggedUserId, otherId }) => {
    const router = useRouter();
    
    return (
        <MessageContainer>
            {loggedUserId !== message.authorId &&
                <Avatar>
                    <Image
                        alt="avatar user"
                        src={`${router.basePath}/avatars/user-${otherId}.png`} 
                        className="image" 
                        width={64}
                        height={64}
                    />
                </Avatar>
            }
            <MessageBody isUser={loggedUserId === message.authorId}>
                <p>{message.body}</p>
            </MessageBody>
        </MessageContainer>
    )
};

const MessageContainer = styled.div`
    display: flex;
    align-items: end;
`;

const MessageBody = styled.div`
    background-color: ${ ({ theme, isUser }) => isUser ? theme.colors.primary : '#ccc' };
    color: white;
    padding: 10px;
    border-radius: ${ ({ isUser }) => isUser ? '10px 10px 0px 10px' : '10px 10px 10px 0' };
    margin 10px 0;
    width: 60%;
    margin-left:  ${ ({ isUser }) => isUser ? 'auto' : 'inherit' };
    word-break: break-word;
`;
