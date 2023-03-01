import { getQueryString } from './utils'

export const getTasksHook = async (state) => {
    const result = await fetch(`https://${state.domain}/rest/1/noty4b3m3wrcv8ls/task.item.list.json`)
    return await result.json()
}

export const addTaskHook = async (state, params) => {
    const queryString = getQueryString(params)
    await fetch(`https://${state.domain}/rest/1/h3d4xt0i5hkyyzuf/task.item.add.json?`, {
        method: 'POST',
        body: queryString
    })
}