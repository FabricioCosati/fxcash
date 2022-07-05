
import { useTransaction } from "../../../hooks/useTransaction";
import { Container } from "./styles";

export function TransactionsTable() {
    const {transactions} = useTransaction();
    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t => (
                        <tr key={t.id}>
                            <td>{t.title}</td>
                            <td className={t.type}>
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(t.value)}
                            </td>
                            <td>{t.category}</td>
                            <td>
                                {Intl.DateTimeFormat("pt-BR").format(new Date(t.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}