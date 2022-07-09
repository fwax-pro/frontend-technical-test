import { FC } from "react"

import { Conversation } from "../../types/conversation"

import { ConversationCard } from "./ConversationCard"

interface ConversationListProps {
    conversations: Conversation[],
    loggedUserId: number
}

export const ConversationList: FC<ConversationListProps> = ({conversations, loggedUserId}) => {
    if(conversations.length === 0){
        return null;
    }
    return (
        <div>
            {conversations.map((conversation ) => (
                <ConversationCard key={conversation.id} conversation={conversation} loggedUserId={loggedUserId} />
            ))}
        </div>
    )
};
