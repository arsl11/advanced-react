"use client";

import { useState } from "react";

const Layout = ({
  renderHeader,
  renderFooter,
  renderMainContent,
  renderSidebarLeft,
  renderSidebarRight,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>();

  return (
    <div>
      <header className="header">{renderHeader?.()}</header>
      <button onClick={() => setIsOpen(!isOpen)}>ClickMe!</button>
      <div>
        <div className="sidebarLeft">{renderSidebarLeft?.(isOpen)}</div>
        <div className="mainContent">{renderMainContent?.()}</div>
        <div className="sidebarRight">{renderSidebarRight?.()}</div>
      </div>
      <footer>{renderFooter?.()}</footer>
    </div>
  );
};

export default function RenderProp() {
  return (
    <Layout
      renderHeader={() => <header>Header</header>}
      renderSidebarLeft={(isOpen) => <div>{isOpen ? "Open" : "Closed"}</div>}
      renderMainContent={() => <div>MainContent</div>}
      renderSidebarRight={() => <div>SidebarRight</div>}
      renderFooter={() => <footer>Footer</footer>}
    />
  );
}
