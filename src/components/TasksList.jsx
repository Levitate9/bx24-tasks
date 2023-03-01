import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PreviewTask } from './PreviewTask'

const StyledTasksList = styled.div`
    width: 100%;
`

export const Header = styled.div`
    font-size: 29px;
    font-weight: 700;
    margin: 24px 32px 8px 48px;
    color: #707070;
`

export const Body = styled.div`
    width: 100%;
    height: 336px;
    overflow-y: auto;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: #222;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
`

export const Button = styled.button`
    height: 32px;
    margin: 32px;
    padding: 8px 16px;
    font-weight: 600;
    border-radius: 3px;
    background: #27BF7D;
    color: #FFFFFF;
    border: none;

    &:hover {
        cursor: pointer;
        background: #28B175;
    }
`

export const TasksList = ({ tasks, setEditMode }) => {
    return (
        <StyledTasksList>
            <Header>Список задач</Header>
            <Body>
                { tasks.map((el) => (
                    <Link to={`/tasks/${el.ID}`} key={el.TITLE}>
                        <PreviewTask title={el.TITLE} /> 
                    </Link>
                )) }   
            </Body>
            <Buttons>
                <Button onClick={() => setEditMode(true)}>Новая задача</Button>
            </Buttons>
        </StyledTasksList>
    )
}