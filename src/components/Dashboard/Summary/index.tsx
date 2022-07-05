import { Container } from "./styles";
import incomeImg from "../../../assets/income.svg";
import outcomeImg from "../../../assets/outcome.svg";
import total from "../../../assets/total.svg";
import { useTransaction } from "../../../hooks/useTransaction";
import { access } from "fs";

export function Summary() {
    const {transactions} = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === "income") {
            acc.deposit += transaction.value;
            acc.total += transaction.value
        }
        else {
            acc.outcome += transaction.value;
            acc.total -= transaction.value
        }

        return acc;
    }, {
        deposit: 0,
        outcome: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    Entradas
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposit)
                    }
                </strong>
            </div>

            <div>
                <header>
                    Saídas
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - 
                    {
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.outcome)
                    }
                </strong>
            </div>

            <div>
                <header>
                    Total
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {
                        Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    )
}