import { FormEvent, useState } from "react"
import { Label, Campo, BtnCadastrar, Form } from "./style"
import { useDispatch } from "react-redux";
import { adicionar } from "../../store/reducers/Contatos";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault();

        dispatch(
            adicionar({
                nome,
                email,
                telefone
            })
        )
        navigate('/')
    }

    return(
        <Form onSubmit={cadastrarContato}>
            <Label htmlFor="nome">
                Digite seu nome
                <Campo
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                id="nome"
                placeholder="Nome"
                />
            </Label>
            <Label htmlFor="email">
                Digite seu e-mail
                <Campo
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Email"
                />
            </Label>
            <Label htmlFor="telefone">
                Digite seu telefone
                <Campo
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                type="text"
                id="telefone"
                placeholder="Telefone"
                />
            </Label>
            <BtnCadastrar type="submit">Cadastrar</BtnCadastrar>
        </Form>
    )
}

export default Formulario