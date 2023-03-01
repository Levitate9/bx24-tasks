import React, { useEffect, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { getTasksHook } from '../api'

export const StyledAuth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url('https://previews.dropbox.com/p/thumb/AB2UCLL02DyiSsoxLJcXDrst0R5coh4bAErIv5xkZGYv9qfrCWRK7Uf2p8MG9dqhyOAeB0EWw-OQIfRz-rAQkNZdsZ9H0lm1eJGW0756Thi9xpadTDibtNGndJs3SfqO-xpc-LcXHuIG_vPRGxrlVQuv3z2pM3s3HtyfNBU5RqgpMVYBk2jYbjIcIS_sv22aho6QGwH7kn4xEj1pqQENChTaF3eSLG6VWI4zXj4b3L7wAOsb4pNmTYOAVdv5UD1x0Gfx7reWuU2oW0EaaU7iYFMefKFhiVBzKA_ZixFoTarjIIrFkJ4EAsT70sSneRCFN82M_szyneBgAnrYRey54I-k5rrn_D-FjyZm9Tlub8ixEEGXXfk0tB9EuYlzQTu9PjA/p.jpeg');
    background-position: center;
    background-size: cover;
`

const Header = styled.div`
    font-weight: 700;
    font-size: 28px;
    color: #707070;
    margin-top: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 255px;
    width: 100%;
    border-radius: 5px;
    background: #FFFFFF;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 215px;
    width: 100%;

    & div {
        &:after {
            content: '.bitrix24.by';
            font-style: italic;
            color: #707070;
            padding-left: 10px;
        }
    }
`

const Domain = styled.input`
    max-width: 90px;
    width: 100%;
    font-size: 14px;
    margin-top: 32px;
    padding: 6px 12px;
    outline: none;
    border: none;
    border: 1px solid #707070;
    border-radius: 3px;
    
    &:focus {
        border-color: #B7E2FF;
    }
`

const Error = styled.span`
    height: 20px;
    font-size: 14px;
    color: red;
    margin: 8px 0;
    padding-left: 12px;
`

const Button = styled.input`
    max-width: 215px;
    width: 100%;
    height: 32px;
    font-weight: 600;
    outline: none;
    border: none;
    border-radius: 3px;
    background: #27BF7D;
    color: #FFFFFF;
    margin-bottom: 20px;

    &:hover {
        cursor: pointer;
        background: #28B175;
    }
`

export const Auth = ({ state, setState }) => {
    const inputRef = useRef(null)

    //получение домена из формы авторизации
    const handler = (e) => {
        e.preventDefault()
        setState({ ...state, domain: `${inputRef.current.value}.bitrix24.by` })
    }

    useEffect(() => {
        if (state.domain !== null) {
            const getData = async () => {
                try {
                    const data = await getTasksHook(state)
                    setState({ ...state, tasks: data.result, isAuth: true })
                } catch(e) {
                    if (!state.error) {
                        setState({ ...state, error: 'Неверный адрес портала' })
                    }
                }
            }
            getData()
        }
    })

    return ( state.isAuth 
        ? <Navigate to='/tasks' />
        : <StyledAuth>
            <Container>
                <Header>Авторизация</Header>
                <Form onSubmit={handler}>
                    <div>
                        <Domain type='text' ref={inputRef} placeholder='domain' />
                    </div>
                    <Error>{state.error}</Error>
                    <Button type='submit' value='ВХОД' />
                </Form>
            </Container>
        </StyledAuth>
    )
}