import React from 'react'
import { StyledList, StyledListItem } from './List.styles';

const List = ({ data }) => {
    return (
        <StyledList>
            {data.map(skill => {
                return (
                    <StyledListItem>{skill}</StyledListItem>
                )
            })}
        </StyledList>
    )
}

export default List;