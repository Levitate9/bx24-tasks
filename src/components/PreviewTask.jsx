import React from 'react'
import styled from 'styled-components'

const StyledPreviewTask = styled.div`
    width: calc(100% - 64px);
    height: 48px;
    margin: 16px 32px 0 32px;
    background: #FFFFFF;
    border-radius: 3px;

    &:hover {
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }

    &:last-child {
        margin: 16px 32px;
    }
`

const Title = styled.div`
    font-size: 16px;
    line-height: 16px;
    padding: 16px;
`

export const PreviewTask = (props) => (
    <StyledPreviewTask>
        <Title>{props.title}</Title>
     </StyledPreviewTask>
)
