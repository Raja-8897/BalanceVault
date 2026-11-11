 
import { useState } from "react";
import Auth from "./Auth.jsx";
import "./App.css";

const transactions = [
  {
    name: "Salary",
    category: "Income",
    date: "Today",
    amount: 45000,
    type: "income",
  },
  {
    name: "Amazon",
    category: "Shopping",
    date: "Today",
    amount: 2499,
    type: "expense",
  },
  {
    name: "Electricity Bill",
    category: "Utilities",
    date: "Yesterday",
    amount: 1800,
    type: "expense",
  },
  {
    name: "Freelance Payment",
    category: "Income",
    date: "Yesterday",
    amount: 8500,
    type: "income",
  },
  {
    name: "Grocery Store",
    category: "Food",
    date: "10 Nov 2026",
    amount: 1250,
    type: "expense",
  },
];

function Dashboard() {
  const [active, setActive] = useState("Overview");
  const [showBalance, setShowBalance] = useState(true);

  const menu = [
    { name: "Overview", icon: "⌂" },
    { name: "Transactions", icon: "⇄" },
    { name: "My Accounts", icon: "▣" },
    { name: "Transfers", icon: "↗" },
    { name: "Settings", icon: "⚙" },
  ];

  const formatMoney = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">B</div>
          <span>
            Balance<span className="brand-light">Vault</span>
          </span>
        </div>

        <p className="menu-label">MENU</p>

        <nav>
          {menu.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="help-card">
            <span>?</span>
            <strong>Need help?</strong>
            <p>We're here to help you.</p>
          </div>

          <div className="profile">
            <div className="avatar">R</div>
            <div>
              <strong>Raja</strong>
              <p>Personal Account</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="welcome">Welcome back, Raja 👋</p>
            <p className="subtitle">
              Here's what's happening with your money.
            </p>
          </div>

          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications">
              ♧
            </button>
            <div className="avatar">R</div>
          </div>
        </header>

        <section className="dashboard">
          <div className="page-heading">
            <div>
              <h1>{active}</h1>
              <p>
                Manage and track your finances with BalanceVault.
              </p>
            </div>

            <span className="date-label">November 2026</span>
          </div>

          {active === "Overview" ? (
            <>
              <section className="stats">
                <div className="balance-card">
                  <div className="card-top">
                    <span>Total Balance</span>

                    <button
                      onClick={() => setShowBalance(!showBalance)}
                    >
                      {showBalance ? "Hide balance" : "Show balance"}
                    </button>
                  </div>

                  <h2>
                    {showBalance
                      ? formatMoney(125750)
                      : "••••••••"}
                  </h2>

                  <p>Demo balance · Sample data only</p>

                  <div className="balance-footer">
                    <span>Personal account</span>
                    <span>•••• 4829</span>
                  </div>
                </div>

                <div className="stat-card">
                  <span className="stat-icon green">↙</span>
                  <p>Total Income</p>
                  <h2>{formatMoney(53500)}</h2>
                  <span className="stat-note">
                    This month · Demo data
                  </span>
                </div>

                <div className="stat-card">
                  <span className="stat-icon red">↗</span>
                  <p>Total Expenses</p>
                  <h2>{formatMoney(5549)}</h2>
                  <span className="stat-note">
                    This month · Demo data
                  </span>
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
                      onClick={() => setActive("Transactions")}
                    >
                      View all →
                    </button>
                  </div>

                  <div className="transaction-list">
                    {transactions.map((item, index) => (
                      <div className="transaction" key={index}>
                        <div
                          className={`transaction-icon ${item.type}`}
                        >
                          {item.type === "income" ? "↓" : "↑"}
                        </div>

                        <div className="transaction-info">
                          <strong>{item.name}</strong>
                          <span>
                            {item.category} · {item.date}
                          </span>
                        </div>

                        <strong className={item.type}>
                          {item.type === "income" ? "+" : "-"}
                          {formatMoney(item.amount)}
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

                  <h2>{formatMoney(5549)}</h2>
                  <p className="muted">Total expenses</p>

                  {[
                    {
                      name: "Shopping",
                      amount: "45%",
                      width: "45%",
                    },
                    {
                      name: "Utilities",
                      amount: "32%",
                      width: "32%",
                    },
                    {
                      name: "Food",
                      amount: "23%",
                      width: "23%",
                    },
                  ].map((item) => (
                    <div className="spending-item" key={item.name}>
                      <div>
                        <span>{item.name}</span>
                        <strong>{item.amount}</strong>
                      </div>

                      <div className="progress">
                        <div style={{ width: item.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="panel placeholder">
              <div className="placeholder-icon">✦</div>
              <h2>{active}</h2>
              <p>
                This section is planned for the next development stage.
              </p>

              <button onClick={() => setActive("Overview")}>
                Back to Overview
              </button>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}

// Main application: Authentication + Dashboard

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Dashboard />
  ) : (
    <Auth onLogin={() => setIsLoggedIn(true)} />
  );
}
