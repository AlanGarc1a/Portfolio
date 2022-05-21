import React from 'react'
import List from '../components/List';
import { Heading, Paragraph, SmallText } from '../components/Typography/Typography';
import ProfilePic from '../assets/profile-pic.jpg';
import Image from '../components/Image';
import Container from '../components/Container';
import styled from 'styled-components';

const Center = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        margin-top: 20rem;

    @media only screen and (max-width: 30em) {
        padding: 0rem 1.2rem;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
`;

const About = () => {

    const skills1 = [
        'React.js',
        'styled-components',
        'JavaScript',
        'TypeScript',
    ];

    const skills2 = [
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'Jest'
    ];

    return (
        <Container>
            <Center>
                <div style={{ flexBasis: '60%' }}>
                    <Heading>About Me</Heading>
                    <Paragraph>
                        Hello! My name is Alan and I enjoy creating things for the internet. My interest in web development started torwards
                        my final year of university. I enjoy looking at designs made by people and turning them into a working
                        user interface. I love working on the front-end but also enjoy taking a look at the back-end and see how data is stored
                        and managed.
                    </Paragraph>
                    <SmallText>Here is what I've been working with:</SmallText>
                    <List data={skills1} />
                    <List data={skills2} />

                </div>
                <div style={{
                    width: '30rem',
                    marginTop: '10rem',
                }}>
                    <Image src={ProfilePic} alt='Alan Garcia' />
                </div>
            </Center>
        </Container>
    )
}

export default About;