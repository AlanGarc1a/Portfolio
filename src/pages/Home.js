import React from 'react';
import { Button, TransparentButton } from '../components/Button';
import { BoldText, Paragraph, SmallText } from '../components/Typography/Typography';
import Container from '../components/Container';
import styled from 'styled-components';

const HomeContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
`;

const MainHeading = styled.h1`
    font-size: 7rem;
    color: var(--white);
`;

const Home = () => {

    return (
        <Container>
            <HomeContent>
                <div style={{ marginTop: '8rem' }}>
                    <SmallText>Hello, I am</SmallText>
                    <MainHeading>
                        <BoldText>Alan</BoldText> Garcia
                    </MainHeading>
                    <div style={{ width: '80%' }}>
                        <Paragraph>
                            I'm an inspiring Full Stack Engineer who likes to take designs and ideas and turn them into
                            a working application.
                        </Paragraph>
                    </div>
                    <Button href='https://www.linkedin.com/in/alan-garcia-4b1062197/' target='_blank'>LinkedIn</Button>
                    <Button href='https://github.com/AlanGarc1a' target='_blank'>GitHub</Button>
                    <TransparentButton href='https://movieflix17.herokuapp.com/' target='_blank'>Latest Project</TransparentButton>
                </div>
            </HomeContent>
        </Container>
    )
}

export default Home;