import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarProps } from "./sidebarTypes";
import "./Sidebar.css"

const Sidebar: React.FC<SidebarProps> = ({ tabs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getCurrentTabFromUrl = (): string => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    return pathParts[0] || tabs[0]?.id || "";
  };

  const [activeTab, setActiveTab] = useState<string>(getCurrentTabFromUrl());

  useEffect(() => {
    const currentTab = getCurrentTabFromUrl();
    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, [location.pathname]);

  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
    navigate(`/${tabId}`);
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`sidebar-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      
      <div className="sidebar-content">
        {activeTabData?.content}
      </div>
    </div>
  );
};

export default Sidebar;