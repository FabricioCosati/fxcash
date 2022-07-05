import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";
import { GlobalStyle } from "./styles/global";


export function App() {
  const[isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }

  return (
   <TransactionProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>

      <NewTransactionModal 
        isNewTransactionModalOpen={isNewTransactionModalOpen} 
        handleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
   </TransactionProvider>
  );
}