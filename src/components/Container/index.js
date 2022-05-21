import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-10rem);
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
        transfrom: translateY(0rem);
    }
`;

const Wrapper = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 15rem;
    animation: ${fadeUp} 1s ease-in;
`;

const Container = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container;