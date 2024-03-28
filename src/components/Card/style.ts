import { styled } from 'styled-components'
import { Btn } from '../../styles'

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 767px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;

    ul{
        display: flex;
        gap: 10px;
    }

    label{
        font-weight: bold;
        padding-right: 10px;
        border-right: 1px solid #ccc;
    }

    input{
        margin-top: 5px;
        padding: 8px;
        border: none;
        border-radius: 8px;
        background-color: #fff;
    }

    div{
        margin-left: 24px;
    }
`

export const BtnEditar = styled(Btn)`
    background-color: #2f3640;
`
export const BtnRemover = styled(Btn)`
    background-color: red;
`

export const BtnSalvar = styled(Btn)`
    background-color: green;
`
export const BtnCancelar = styled(Btn)`
    background-color: red;
`