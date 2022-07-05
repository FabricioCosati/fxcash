import { Children, createContext, useContext, useEffect, useState} from "react"
import { api } from "../services/api";

interface Transaction {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: React.ReactNode
}

interface TransactionContextProps { 
    transactions: Transaction[];
    createTransaction(transaction: TransactionInput): Promise<Number>;   
}

const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("/transactions").then(response => { setTransactions(response.data.transactions) });
    }, []);

    async function createTransaction(data: TransactionInput) {
        const response = await api.post("/transactions", {...data, createdAt: new Date()});
        setTransactions([...transactions, response.data.transaction]);

        return response.status;
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {  
    return useContext(TransactionContext);
}