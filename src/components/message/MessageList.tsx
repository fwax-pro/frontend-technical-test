import { FC } from "react"

import { Message } from "../../types/message"

import { MessageItem } from "./MessageItem"

interface MessageListProps {
    messages: Message[]
    loggedUserId: number
    otherId: number
}

export const MessageList: FC<MessageListProps> = ({messages, loggedUserId, otherId}) => {
    if(messages.length === 0){
        return null;
    }
    return (
        <div>
            {messages.map((message, index ) => (
                <MessageItem 
                    key={index} 
                    message={message} 
                    loggedUserId={loggedUserId} 
                    otherId={otherId}
                />
            ))}
        </div>
    )
};
