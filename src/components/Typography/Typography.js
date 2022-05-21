import styled from 'styled-components'

export const SmallText = styled.span`
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--white);
`

export const Text = styled(SmallText)`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

export const Heading = styled.h2`
    color: var(--white);
    font-size: 4.5rem;
    margin-bottom: 2rem;
`;

export const BoldText = styled.span`
    font-weight: 700;
    color: var(--slate);
`;

export const Paragraph = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--white);
    margin-bottom: 2rem;
`;