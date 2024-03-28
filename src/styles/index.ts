import { createGlobalStyle, styled } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: #eee
    }
`

export const Container =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0;
    border-bottom: 1px solid #ccc;
    margin-bottom: 40px;
`

export const Btn = styled.button `
    display: block;
    width: 100%;
    padding: 5px;
    margin-top: 10px;
    color: #fff;
    border: none;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
`

export const Menu = styled.nav`
    max-width: 180px;
    width: 100%;
`

export default GlobalStyle