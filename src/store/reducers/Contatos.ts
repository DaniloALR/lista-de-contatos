import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contatos from "../../models/Contatos";

type ContatoState = {
    itens: Contatos[]
}

const initialState: ContatoState = {
    itens: [
        {
            id: 1,
            nome: 'Danilo',
            email: 'danilo@gmail.com',
            telefone: '(13)99999-9999'
        }
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
            const contatoExiste = state.itens.find(
                (item) => item.telefone === action.payload.telefone
            )

            if(contatoExiste){
                alert("O contato já existe")
            } else {
                const ultimoContato = state.itens[state.itens.length - 1]

                const novoContato = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }

                state.itens.push(novoContato)
            }
        },
        editar: (state, action: PayloadAction<Contatos>) => {
            const indexDoContato = state.itens.findIndex(
                (t) => t.id === action.payload.id
            )
            if(indexDoContato >= 0) {
                state.itens[indexDoContato] = action.payload
            }
        },
        remover: (state, action: PayloadAction<number>) => {
            state.itens = [
                ...state.itens.filter((c) => c.id !== action.payload)
            ]
        }
    }
})

export const { adicionar, editar, remover } = contatosSlice.actions

export default contatosSlice.reducer