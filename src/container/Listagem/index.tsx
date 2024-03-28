import { useSelector } from "react-redux"
import Card from "../../components/Card"
import { Header, Menu } from "../../styles"
import { BtnCriar } from "./style"
import { RootReducer } from "../../store"

const Listagem = () => {
    const { itens } = useSelector((state: RootReducer) => state.contatos)

    return(
        <>
            <Header>
                <h1>Lista de contatos</h1>
                <Menu>
                    <BtnCriar to="/cadastro">Criar novo contato</BtnCriar>
                </Menu>
            </Header>
            <ul>
            {itens.map((contato) => (
                <li key={contato.id}>
                    <Card
                    id={contato.id}
                    nome={contato.nome}
                    email={contato.email}
                    telefone={contato.telefone}
                    />
                </li>
                ))}
            </ul>
        </>
    )
}

export default Listagem