import styled from 'styled-components';

export const StyledList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 3rem;
`;

export const StyledListItem = styled.li`
    font-size: 1.6rem;
    color: var(--white);
    margin-left: 2rem;

    &:not(:last-child){
        margin-right: 2rem;
    }

    &::marker {
        color: var(--slate);
    }
`;