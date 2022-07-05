import { Container, TransactionTypeContainer, RadioButton } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { useTransaction } from "../../hooks/useTransaction";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
    isNewTransactionModalOpen: boolean,
    handleCloseNewTransactionModal: () => void;
}

export function NewTransactionModal({ isNewTransactionModalOpen, handleCloseNewTransactionModal }: NewTransactionModalProps) {
    const {createTransaction} = useTransaction();

    const [name, setName] = useState("");
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState("");
    const[type, setType] = useState("income");

    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault()

        const status = await createTransaction({
            title: name,
            value,
            category,
            type
        })

        if(status === 201) {
            setName("");
            setValue(0);
            setCategory("");
            setType("income");
            handleCloseNewTransactionModal();
        }

    }

    return (
        <Modal 
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="modal-overlay"
            className="react-modal-content"
        >
            <img onClick={handleCloseNewTransactionModal} className="close-react-modal" src={closeImg} alt="Fechar Modal" />
            <Container
            onSubmit={handleCreateTransaction}>

                <header>
                    <h2>Cadastrar transação</h2>
                </header>
                <div>
                    <input 
                    type="text" 
                    placeholder="Nome" 
                    value={name}
                    onChange={e => setName(e.target.value)}/>

                    <input 
                    type="number" 
                    placeholder="Preço" 
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}/>

                    <TransactionTypeContainer>

                        <RadioButton
                        type="button"
                        onClick={() => setType("income")}
                        isSelected={type === "income"}
                        activeColor="green"
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioButton>

                        <RadioButton
                        type="button"
                        onClick={() => setType("outcome")}
                        isSelected={type === "outcome"}
                        activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </RadioButton>

                    </TransactionTypeContainer>

                    <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={e => setCategory(e.target.value)}/>

                    <button className="submit-transaction" type="submit">Cadastrar</button>
                </div>
            </Container>
        </Modal>
    )
}