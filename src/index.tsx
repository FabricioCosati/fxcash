import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento App Mobile',
          value: 3500.00,
          type: 'income',
          category: 'salário',
          createdAt: new Date('2022-06-10')
        },
        {
          id: 2,
          title: 'Conta de internet',
          value: 445.00,
          type: 'outcome',
          category: 'internet',
          createdAt: new Date('2022-06-15')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post("/transactions", (schema, request) => {
      let data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
