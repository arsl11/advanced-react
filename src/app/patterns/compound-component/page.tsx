"use client";

import React, { ReactNode, useCallback, useContext, useState } from "react";

interface MenuContextType {
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}

interface MenuAccordionProps {
  children?: ReactNode;
}

const MenuContext = React.createContext<MenuContextType | null>(null);

const MenuAccordion = ({ children }: MenuAccordionProps) => {
  const [activeGroup, setActiveGroup] = useState<string>();

  // stable link
  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeGroup) =>
      activeGroup === title ? undefined : title
    );
  }, []);

  return (
    <MenuContext.Provider value={{ activeGroup, switchGroup }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => {
  const menuContext = useContext(MenuContext);

  if (!menuContext) {
    throw new Error("useMenu has to be used within <MenuContext.Provider>");
  }

  return menuContext;
};

interface MenuGroupProps {
  children?: React.ReactNode;
  title: string;
}

MenuAccordion.Group = function MenuGroup({ children, title }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useMenu();

  return (
    <div>
      <button onClick={() => switchGroup(title)}>{title}</button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

interface MenuItemProps {
  title: string;
}

MenuAccordion.Item = function MenuItem({ title }: MenuItemProps) {
  return <div>{title}</div>;
};

export default function CompoundComponent() {
  return (
    <MenuAccordion>
      <MenuAccordion.Item title="Главная" />
      <MenuAccordion.Group title="Фильмы">
        <MenuAccordion.Item title="Топ" />
        <MenuAccordion.Item title="Любимые" />
        <MenuAccordion.Item title="Популярные" />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Сериалы">
        <MenuAccordion.Item title="Топ" />
        <MenuAccordion.Item title="Любимые" />
        <MenuAccordion.Item title="Популярные" />
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Служебное">
        <MenuAccordion.Item title="О нас" />
        <MenuAccordion.Item title="Вопросы" />
        <MenuAccordion.Item title="Ответы" />
      </MenuAccordion.Group>
    </MenuAccordion>
  );
}
