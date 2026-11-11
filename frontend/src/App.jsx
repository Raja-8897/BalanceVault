
import { useState } from "react";
import Auth from "./Auth.jsx";
import "./App.css";

const transactions = [
  {
    id: 1,
    name: "Salary",
    category: "Income",
    date: "Today",
    amount: 45000,
    type: "income",
  },
  {
    id: 2,
    name: "Amazon",
    category: "Shopping",
    date: "Today",
    amount: 2499,
    type: "expense",
  },
  {
    id: 3,
    name: "Electricity Bill",
    category: "Utilities",
    date: "Yesterday",
    amount: 1800,
    type: "expense",
  },
  {
    id: 4,
    name: "Freelance Payment",
    category: "Income",
    date: "Yesterday",
    amount: 8500,
    type: "income",
  },
  {
    id: 5,
    name: "Grocery Store",
    category: "Food",
    date: "10 Nov 2026",
    amount: 1250,
    type: "expense",
  },
];

const menuItems = [
  { name: "Overview", icon: "⌂" },
  { name: "Transactions", icon: "⇄" },
  { name: "My Accounts", icon: "▣" },
  { name: "Transfers", icon: "↗" },
  { name: "Settings", icon: "⚙" },
];

function Dashboard({ onLogout }) {
  const [showBalance, setShowBalance] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Overview");

  const formatCurrency = (amount) =>
    "₹" + amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">B</div>
          <span>BalanceVault</span>
        </div>

        <p className="menu-heading">MENU</p>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-help">
          <div className="help-icon">?</div>
          <h4>Need help?</h4>
          <p>We're here to help you.</p>
        </div>

        <button className="logout-button" onClick={onLogout}>
          ↪ Log out
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-profile">
            <div className="avatar">R</div>
            <div>
              <strong>Raja</strong>
              <p>Personal Account</p>
            </div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="welcome-label">Welcome back, Raja 👋</p>
            <h1>
              {activeMenu === "Overview"
                ? "Overview"
                : activeMenu}
            </h1>
            <p className="welcome-description">
              {activeMenu === "Overview"
                ? "Manage and track your finances with BalanceVault."
                : `Explore your ${activeMenu.toLowerCase()} details.`}
            </p>
          </div>

          <div className="date-label">November 2026</div>
        </section>

        {activeMenu === "Overview" ? (
          <>
            <section className="balance-card">
              <div className="balance-card-top">
                <span>Total Balance</span>
                <button
                  className="hide-balance"
                  onClick={() => setShowBalance(!showBalance)}
                >
                  {showBalance ? "Hide balance" : "Show balance"}
                </button>
              </div>

              <h2>
                {showBalance ? formatCurrency(125750) : "₹ ••••••••"}
              </h2>

              <p>Demo balance · Sample data only</p>
              <div className="account-number">
                Personal account •••• 4829
              </div>
            </section>

            <section className="summary-grid">
              <div className="summary-card">
                <div className="summary-icon income-icon">↙</div>
                <p>Total Income</p>
                <h2>{formatCurrency(53500)}</h2>
                <span>This month · Demo data</span>
              </div>

              <div className="summary-card">
                <div className="summary-icon expense-icon">↗</div>
                <p>Total Expenses</p>
                <h2>{formatCurrency(5549)}</h2>
                <span>This month · Demo data</span>
              </div>
            </section>

            <section className="content-grid">
              <div className="panel transactions-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Recent Transactions</h3>
                    <p>Your latest account activity</p>
                  </div>
                  <button
                    className="view-all"
                    onClick={() => setActiveMenu("Transactions")}
                  >
                    View all →
                  </button>
                </div>

                <div className="transaction-list">
                  {transactions.map((transaction) => (
                    <div
                      className="transaction-row"
                      key={transaction.id}
                    >
                      <div
                        className={`transaction-icon ${
                          transaction.type
                        }`}
                      >
                        {transaction.type === "income" ? "↓" : "↑"}
                      </div>

                      <div className="transaction-details">
                        <strong>{transaction.name}</strong>
                        <p>
                          {transaction.category} · {transaction.date}
                        </p>
                      </div>

                      <strong
                        className={`transaction-amount ${
                          transaction.type
                        }`}
                      >
                        {transaction.type === "income" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel spending-panel">
                <div className="panel-heading">
                  <div>
                    <h3>Spending Overview</h3>
                    <p>Sample monthly expenses</p>
                  </div>
                </div>

                <h2>{formatCurrency(5549)}</h2>
                <p className="spending-total-label">Total expenses</p>

                <div className="spending-bar">
                  <div className="shopping-bar"></div>
                  <div className="utilities-bar"></div>
                  <div className="food-bar"></div>
                </div>

                <div className="spending-category">
                  <span><i className="dot shopping-dot"></i> Shopping</span>
                  <strong>45%</strong>
                </div>

                <div className="spending-category">
                  <span><i className="dot utilities-dot"></i> Utilities</span>
                  <strong>32%</strong>
                </div>

                <div className="spending-category">
                  <span><i className="dot food-dot"></i> Food</span>
                  <strong>23%</strong>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="panel placeholder-panel">
            <h2>{activeMenu}</h2>
            <p>
              This section is coming soon. Your BalanceVault demo
              dashboard is under development.
            </p>
            <button
              className="back-button"
              onClick={() => setActiveMenu("Overview")}
            >
              Back to Overview
            </button>
          </section>
        )}

        <footer className="dashboard-footer">
          BalanceVault · Demo application · Sample financial data only
        </footer>
      </main>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard onLogout={() => setIsLoggedIn(false)} />
  ) : (
    <Auth onLogin={() => setIsLoggedIn(true)} />
  );
}
