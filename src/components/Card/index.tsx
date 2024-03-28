import { useEffect, useState } from "react"
import { CardContent, BtnEditar, BtnRemover, BtnSalvar, BtnCancelar } from "./style"
import { useDispatch } from "react-redux"
import { editar, remover } from "../../store/reducers/Contatos"

type Props = {
    id: number,
    nome: string,
    email: string,
    telefone: string
}

const Card = ({
    nome: nomeOriginal,
    email: emailOriginal,
    telefone: telefoneOriginal,
    id}: Props) => {

    const [estaEditando, setEstaEditando] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if(nomeOriginal.length > 0){
            setNome(nomeOriginal)
            setEmail(emailOriginal)
            setTelefone(telefoneOriginal)
        }
    }, [nomeOriginal, emailOriginal, telefoneOriginal])

    const cancelaEdicao = () => {
        setNome(nomeOriginal)
        setEmail(emailOriginal)
        setTelefone(telefoneOriginal)

        setEstaEditando(false)
    }

    const salvaEdicao = () => {
        dispatch(
            editar({
                id,
                nome,
                email,
                telefone
            })
        )
        setEstaEditando(false)
    }

    return(
        <CardContent>
            <ul>
                <label htmlFor={nome}>
                    Nome:
                    <input
                    id={nome}
                    type="text"
                    disabled={!estaEditando}
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <label htmlFor={email}>
                    Email:
                    <input
                    id={email}
                    type="text"
                    disabled={!estaEditando}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor={telefone}>
                    Telefone:
                    <input
                    id={telefone}
                    type="text"
                    disabled={!estaEditando}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    />
                </label>
            </ul>
            {estaEditando ? (
                <div>
                    <BtnSalvar onClick={salvaEdicao}>Salvar</BtnSalvar>
                    <BtnCancelar onClick={cancelaEdicao}>Cancelar</BtnCancelar>
                </div>
            ) : (
                <div>
                    <BtnEditar onClick={() => setEstaEditando(true)}>Editar</BtnEditar>
                    <BtnRemover onClick={() => dispatch(remover(id))}>Remover</BtnRemover>
                </div>
            )}
        </CardContent>
    )
}

export default Card