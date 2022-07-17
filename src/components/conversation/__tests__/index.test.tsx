import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Conversations } from '../../conversation'

import { theme } from "../../../pages/_app"

describe('components Conversations', () => {
    const conversations = [
        {
            "id": 1,
            "recipientId": 2,
            "recipientNickname": "NickNameTestA",
            "senderId": 1,
            "senderNickname": "Thibaut",
            "lastMessageTimestamp": 1625648667
        },
        {
            "id": 2,
            "recipientId": 3,
            "recipientNickname": "NickNameTestB",
            "senderId": 1,
            "senderNickname": "Thibaut",
            "lastMessageTimestamp": 1620284667
        },
    ];

    
    it('should display the conversations', () => {
        render(
            <ThemeProvider theme={theme}>
                <Conversations conversations={conversations} loggedUserId={1}/>
            </ThemeProvider>
        );

        expect(
            screen.getByText("NickNameTestA")
          ).toBeInTheDocument();
        expect(
            screen.getByText("NickNameTestB")
          ).toBeInTheDocument()
    });

    it('should display "pas de conversation"', () => {
        render(
            <ThemeProvider theme={theme}>
                <Conversations conversations={[]} loggedUserId={1}/>
            </ThemeProvider>
        );

        expect(
            screen.getByText("Pas de conversation")
        ).toBeInTheDocument();
    });
});
