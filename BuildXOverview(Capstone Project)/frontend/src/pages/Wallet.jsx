import React from 'react';
import { ArrowUpRight, ArrowDownRight, CreditCard, Building } from 'lucide-react';
import './Wallet.css';

const Wallet = () => {
  return (
    <div className="wallet-container">
      <div className="page-header">
        <div>
          <h2>Your Wallet</h2>
          <p className="text-muted">Manage your earnings, withdrawals, and transaction history safely.</p>
        </div>
      </div>

      <div className="wallet-overview">
        <div className="balance-card card-glass">
          <p className="text-muted">Available Balance</p>
          <h1 className="text-gradient">$1,240.50</h1>
          <div className="wallet-actions">
            <button className="btn-primary"><ArrowUpRight size={16}/> Withdraw Funds</button>
            <button className="btn-outline"><ArrowDownRight size={16}/> Deposit</button>
          </div>
        </div>

        <div className="payment-methods card-glass">
          <h3>Withdrawal Methods</h3>
          <div className="method-list">
            <div className="method-item">
              <Building size={20} className="text-primary"/> 
              <div>
                <h4>Bank Transfer</h4>
                <p className="text-muted small">Ends in **4598</p>
              </div>
            </div>
            <div className="method-item">
              <CreditCard size={20} className="text-accent"/> 
              <div>
                <h4>PayPal</h4>
                <p className="text-muted small">john.doe@example.com</p>
              </div>
            </div>
          </div>
          <button className="btn-outline btn-small mt-4 w-full">+ Add Payment Method</button>
        </div>
      </div>

      <div className="transaction-history card-glass mt-4">
        <h3>Recent Transactions</h3>
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Oct 24, 2023</td>
              <td>Earned: AI Image Gen Frontend</td>
              <td><span className="status status-completed">Completed</span></td>
              <td className="text-accent font-bold">+$450.00</td>
            </tr>
            <tr>
              <td>Oct 15, 2023</td>
              <td>Withdrawal to Bank</td>
              <td><span className="status status-running">Pending</span></td>
              <td className="font-bold">-$200.00</td>
            </tr>
            <tr>
              <td>Sep 28, 2023</td>
              <td>Earned: Dashboard UI Bounty</td>
              <td><span className="status status-completed">Completed</span></td>
              <td className="text-accent font-bold">+$990.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
