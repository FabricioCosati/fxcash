import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
    handleOpenNewTransactionModal: () => void;
}

export function Header({handleOpenNewTransactionModal}: HeaderProps) {

    return (
        <div>
            <Container>
                <Content>
                    <button
                        onClick={handleOpenNewTransactionModal}
                    >
                        Nova Transação
                    </button>
                    <img src={logoImg} alt="dt money" />
                </Content>
            </Container>
        </div>
    )
}