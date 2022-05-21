import React from 'react'
import Container from '../components/Container';
import { Heading, Paragraph, SmallText } from '../components/Typography/Typography';
import { Button } from '../components/Button';
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap
`;

const ContentContact = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    & > span {
        margin-bottom: 2rem;
    }
`;

const Contact = () => {
    return (
        <Container>
            <Heading>Lets Get In Touch</Heading>
            <Paragraph>
                As of now, I'm looking to work with an amazing group of people who like to work on web technologies or
                like to learn new technologies to deliver a better working product and user experience.
            </Paragraph>
            <ContentContainer>
                <ContentContact>
                    <SmallText>
                        Email: alangarcia2096@gmail.com
                    </SmallText>
                    <SmallText>
                        Location: Los Angeles, California
                    </SmallText>
                    <Button href="mailto:alangarcia2096@gmail.com" rel="noopener noreferrer" target="_blank">Get In Touch</Button>
                </ContentContact>
            </ContentContainer>
        </Container>
    )
}

export default Contact;