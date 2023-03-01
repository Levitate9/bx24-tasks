import React, { useState } from 'react'
import { Auth } from './components/Auth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Tasks } from './components/Tasks'
import { Task } from './components/Task'

const App = () => {
    const [state, setState] = useState({ 
        isAuth: false, 
        domain: null, 
        tasks: [],
        error: null
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Auth state={state} setState={setState} />} />
                <Route path='/tasks' element={<Tasks state={state} setState={setState} />} />
                <Route path='/tasks/:id' element={<Task tasks={state.tasks} isAuth={state.isAuth} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App