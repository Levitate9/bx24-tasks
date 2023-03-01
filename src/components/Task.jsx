import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { toHtml } from '../utils'
import { StyledAuth as bg } from './Auth'
import { Container as cnt } from './Tasks'
import { Header as hdr, Buttons as btns } from './TasksList'
import { Button as btn } from './AddTask'


const StyledTask = styled(bg)`
`

const Container = styled(cnt)`
`

const Title = styled(hdr)`
`

const Description = styled.div`
    width: calc(100% - 96px);
    height: 288px;
    margin: 16px 32px 0 32px;
    padding: 16px;
    background: #fff;
    border-radius: 3px;
`

const Buttons = styled(btns)`
    justify-content: flex-start;
`

const Button = styled(btn)`
    margin: 32px;
`

export const Task = ({ tasks, isAuth }) => {
    const navigate = useNavigate()
    const params = useParams()
    const task = tasks.filter((el) => el.ID === params.id)[0]

    return ( isAuth 
        ? <StyledTask>
            <Container>
                <Title>{task.TITLE}</Title>
                <Description>{toHtml(task.DESCRIPTION)}</Description>
                <Buttons>
                    <Button className='secondary' onClick={() => navigate('/tasks')}>Назад</Button>
                </Buttons>
            </Container>
        </StyledTask>
        : <Navigate to='/' />
    )
}