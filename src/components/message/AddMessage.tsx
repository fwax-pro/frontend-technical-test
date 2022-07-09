import { FC, useState } from "react"
import { MdOutlineSend } from "react-icons/md"
import styled from "styled-components"

import { Button } from "../buttons/Button"

interface ConversationPageProps {
    sendMessage: (message: String) =>  void
} 

export const AddMessage: FC<ConversationPageProps> = ({ sendMessage }) => {
    const [message, setMessage] = useState<string>('')
    
    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message === '') {
            return;
        }
        sendMessage(message);
        setMessage('');
    };

    return (
        <AddMessageContainer>
            <AddMessageForm onSubmit={handleSubmit}>
                <AddMessageInput
                    onChange={handleChange}
                    value={message}
                    rows="1" 
                    cols="60"
                    placeholder="Écrivez votre message" />
                <Button><MdOutlineSend size="100%" color="#ff6e14"/></Button>
            </AddMessageForm>
        </AddMessageContainer>
    )
}

const AddMessageContainer = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: white;
    padding: 1rem;
`;

const AddMessageForm = styled.form`
    display: flex;
`;

const AddMessageInput = styled.textarea`
    border-radius: 20px;
    flex: 1;
    margin-right: 10px;
    padding-left: 10px;
    border-style: unset;
    resize: none;
    min-height: 1rem;
    background: #fafafa;
    border-radius: 2rem;
    border-style: unset;
    line-height: 1rem;
    font-family: inherit;
    outline: none;
    padding: 1rem;
`;
