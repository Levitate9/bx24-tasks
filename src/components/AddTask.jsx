import React, { useRef } from 'react'
import styled from 'styled-components'
import { addTaskHook, getTasksHook } from '../api'
import { Header as hdr, Body as bd, Buttons as btns, Button as btn } from './TasksList'

const StyledAddTask = styled.div`
    width: 100%;
`

const Header = styled(hdr)`
`

const Body = styled(bd)`
`

const Form = styled.form`
    margin: 16px 32px;
`

const Input = styled.input`
    width: calc(100% - 32px);
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 8px 16px;
`

const Textarea = styled.textarea`
    width: calc(100% - 32px);
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 8px 16px;
    margin-top: 16px;
`

const Buttons = styled(btns)`
    justify-content: space-between;
`

export const Button = styled(btn)`
    &.secondary {
        background: transparent;
        color: #707070;
        border: 1px solid #707070;
        border-radius: 3px;
    }
`

export const AddTask = ({ state, setState, setEditMode }) => {
    const titleRef = useRef(null)
    const descrRef = useRef(null)

    const handler = async () => {
        const params = { 
            fields: { 
                TITLE: titleRef.current.value, 
                DESCRIPTION: descrRef.current.value,
                RESPONSIBLE_ID: 1
            }
        }
        await addTaskHook(state, params)
        const data = await getTasksHook(state)
        await setState({ ...state, tasks: data.result })
        setEditMode(false)
    }
    
    return (
        <StyledAddTask>
            <Header>Новая задача</Header>
            <Body>
                <Form name='form'>
                    <Input ref={titleRef} type='text' placeholder='Название' />
                    <Textarea ref={descrRef} placeholder='Описание задачи..' rows='10' />
                </Form>
            </Body>
            <Buttons> 
                <Button className='secondary' onClick={() => setEditMode(false)}>Назад</Button>
                <Button onClick={handler}>Добавить</Button>
            </Buttons>
        </StyledAddTask>
    )
}