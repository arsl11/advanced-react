"use client";

import { ReactNode, useState } from "react";
interface LayoutProps {
  renderHeader?: () => ReactNode;
  renderSidebarLeft?: (isOpen?: boolean) => ReactNode;
  renderMainContent?: () => ReactNode;
  renderSidebarRight?: () => ReactNode;
  renderFooter?: () => ReactNode;
}
const Layout = ({
  renderHeader,
  renderFooter,
  renderMainContent,
  renderSidebarLeft,
  renderSidebarRight,
}: LayoutProps) => {
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
      renderSidebarLeft={(isOpen?: boolean) => (
        <div>{isOpen ? "Open" : "Closed"}</div>
      )}
      renderMainContent={() => <div>MainContent</div>}
      renderSidebarRight={() => <div>SidebarRight</div>}
      renderFooter={() => <footer>Footer</footer>}
    />
  );
}
