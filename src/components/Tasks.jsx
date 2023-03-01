import React, { useState } from 'react'
import styled from 'styled-components'
import { StyledAuth as bg } from './Auth'
import { TasksList } from './TasksList'
import { AddTask } from './AddTask'
import { Navigate } from 'react-router-dom'

const StyledTasks = styled(bg)`
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 568px;
    width: 100%;
    border-radius: 3px;
    background: #CFCFCF;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`

export const Tasks = ({ state, setState }) => {
    const [isEditMode, setEditMode] = useState(false)

    return ( state.isAuth
        ? <StyledTasks>
            <Container>
                { isEditMode
                    ? <AddTask state={state} setState={setState} setEditMode={setEditMode} />
                    : <TasksList tasks={state.tasks} setEditMode={setEditMode} />
                }
            </Container>
        </StyledTasks>
        : <Navigate to='/' />
    )
}