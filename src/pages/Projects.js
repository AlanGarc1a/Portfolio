import React from 'react'
import Container from '../components/Container';
import { SmallText, Heading } from '../components/Typography/Typography';
import { FiExternalLink, FiFolder, FiGithub } from 'react-icons/fi';

import styled from 'styled-components';

const Grid = styled.ul`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    position: relative;
    list-style-type: none;
`;

const GridItemInner = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: 0.5rem;
    background-color: var(--dark-gray);
`;

const CardHeader = styled.header`
    & span {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
`;

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;
`;

const CardIcons = styled.div`
    font-size: 2.5rem;
    color: var(--white);

    & > a {
        color: var(--white);
        &:not(:last-child) {
            margin-right: 2rem;
        }
    }
`;

const CardDescription = styled.div`
    color: var(--white);

    & > p {
        font-size: 1.3rem;
    }
`;

const CardList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    color: var(--white);
    list-style-type: none;
    margin-top: 2rem;
    font-size: 1.2rem;

    & > li {
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }
`;

const Projects = () => {

    const projectList = [
        {
            title: 'Movieflix',
            gitHubUrl: 'https://github.com/AlanGarc1a/Movieflix',
            website: 'https://movieflix17.herokuapp.com/',
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'A single web application where users can browse their favorite movies and tv shows.',
            techList: ['React', 'TypeScript', 'styled-components', 'Express', 'MongoDB']
        },
        {
            title: 'MovieHub',
            gitHubUrl: 'https://github.com/AlanGarc1a/MovieHub',
            website: null,
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'A single web application where users can browse their favorite movies and tv shows.',
            techList: ['React', 'TypeScript', 'styled-components', 'Express']
        },
        {
            title: 'GameHub',
            gitHubUrl: 'https://github.com/AlanGarc1a/GameHub',
            website: null,
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'A single web application where users can perform CRUD operations for their favorite video games.',
            techList: ['React', 'MaterialUI', 'Express', 'MongoDB']
        },
        {
            title: 'Portfoliov1',
            gitHubUrl: 'https://github.com/AlanGarc1a/PortfolioWebsite',
            website: 'https://alangarc1a.github.io/PortfolioWebsite/',
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'My first portfolio website I"ve built to showcase my projects.',
            techList: ['HTML', 'CSS', 'SASS', 'JavaScript']
        },
        {
            title: 'Skynet',
            gitHubUrl: 'https://github.com/AlanGarc1a/Skynet',
            website: 'https://alangarc1a.github.io/Skynet/',
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'A landing page for the fictional villian Skynet from the Terminator movie series.',
            techList: ['React', 'styled-components']
        },
        {
            title: 'Cloud Systems',
            gitHubUrl: 'https://github.com/AlanGarc1a/CloudSystems',
            website: 'https://alangarc1a.github.io/CloudSystems/',
            githubIcon: <FiGithub />,
            linkIcon: <FiExternalLink />,
            description: 'A landing page for a cloud computing company that shows their offers and showcase.',
            techList: ['HTML', 'CSS', 'SASS', 'JavaScript']
        },
    ];

    return (
        <Container>
            <Heading>Some Things I've built</Heading>
            <Grid>
                {
                    projectList.map(project => {
                        return (
                            <li>
                                <GridItemInner>
                                    <CardHeader>
                                        <CardTop>
                                            <CardIcons>
                                                <FiFolder />
                                            </CardIcons>
                                            <CardIcons>
                                                <a href={project.gitHubUrl} target="_blank" rel="noreferrer">
                                                    {project.githubIcon}
                                                </a>
                                                {project.website ?
                                                    <a href={project.website} target="_blank" rel="noreferrer">
                                                        {project.linkIcon}
                                                    </a> : <></>
                                                }
                                            </CardIcons>
                                        </CardTop>
                                        <SmallText>{project.title}</SmallText>
                                        <CardDescription>
                                            <p>{project.description}</p>
                                        </CardDescription>
                                    </CardHeader>
                                    <footer>
                                        <CardList>
                                            {project.techList.map(tech => {
                                                return (
                                                    <li>{tech}</li>
                                                )
                                            })}
                                        </CardList>
                                    </footer>
                                </GridItemInner>
                            </li>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Projects;