import type { Conversation } from '../types/conversation'
import type { User } from '../types/user'

// Default way to use a logged user
// Feel free to update the user ID for your tests
// or enhance it with better data source, or better user management
export const getLoggedUserId = ():User['id'] => 1

export const getDateTimeFromTimeStamp = (timestamp: number):String => new Date(timestamp * 1000).toLocaleString('fr')

export const getNicknameOtherUser = (loggedUserId:number, conversation:Conversation):String => 
    loggedUserId === conversation.recipientId ? conversation.senderNickname : conversation.recipientNickname 

export const getOtherUserId = (loggedUserId:number, conversation:Conversation):number => 
    loggedUserId === conversation.recipientId ? conversation.senderId : conversation.recipientId 