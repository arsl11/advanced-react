"use client"

import React, { useCallback, useContext, useState } from "react";

const MenuContext = React.createContext(false);

const MenuAccordion = ({ children }) => {
    const [activeGroup, setActiveGroup] = useState();

    // stable link
    const switchGroup = useCallback((title) => {
        setActiveGroup((activeGroup) => activeGroup === title ? undefined : title)
    }, [])

    return <MenuContext.Provider value={{ activeGroup, switchGroup }}>{children}</MenuContext.Provider>
}

MenuAccordion.Group = function MenuGroup({ children, title }) {
    const { activeGroup, switchGroup } = useContext(MenuContext);

    return <div>
        <button onClick={() => switchGroup(title)}>{title}</button>
        {activeGroup === title && <div>{children}</div>}
    </div>
}

MenuAccordion.Item = function MenuItem({ children, title }) {
    return <div>{title}</div>
}

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



