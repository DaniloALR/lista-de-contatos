import Formulario from "../../components/Formulario"
import { Header, Menu } from "../../styles"
import { BtnVoltar } from "./style"

const Cadastro = () => {

    return(
        <>
            <Header>
                <h1>Cadastrar</h1>
                <Menu>
                    <BtnVoltar>Voltar</BtnVoltar>
                </Menu>
            </Header>
            <Formulario />
        </>
    )
}

export default Cadastro