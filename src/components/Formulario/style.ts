import { styled } from 'styled-components'
import { Btn } from '../../styles'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Label = styled.label`
    display: block;
    margin-bottom: 15px;
    font-weight: bold;
`

export const Campo = styled.input`
    display: block;
    margin-top: 5px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    width: 300px;
`

export const BtnCadastrar = styled(Btn)`
    background-color: green;
    max-width: 200px;
`