import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const tabs = [
    {
      id: 1,
      title: "TAB 1",
      heading: "Content 1",
      text: "This is the first tab content."
    },
    {
      id: 2,
      title: "TAB 2",
      heading: "Content 2",
      text: "This is the second tab content."
    },
    {
      id: 3,
      title: "TAB 3",
      heading: "Content 3",
      text: "This is the third tab content."
    },
    {
      id: 4,
      title: "TAB 4",
      heading: "Content 4",
      text: "This is the fourth tab content."
    }
  ];

  const [activeTab, setActiveTab] = useState(() => {
    return Number(localStorage.getItem("activeTab")) || 1;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const selectedTab = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Tabs Component with React</h1>
      </header>

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <main className="content">
        <h2>{selectedTab.heading}</h2>
        <p>{selectedTab.text}</p>
      </main>
    </div>
  );
}

export default App;