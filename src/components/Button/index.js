import styled from 'styled-components';

export const Button = styled.a`
    display: inline-block;
    text-align: center;
    font-size: 1.5rem;
    padding: 0.7rem 7rem;
    margin-top: 4rem;
    color: var(--white);
    background-color: var(--dark-gray);
    border-radius: 0.5rem;
    text-decoration: none;

    &:not(:last-child) {
        margin-right: 3rem;
    }
`

export const TransparentButton = styled(Button)`
    border: 0.1rem solid var(--slate);
    background-color: transparent;
    padding: 1rem 2rem;
`;