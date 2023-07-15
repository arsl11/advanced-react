"use client"

import Link from "next/link";
import { MenuAccordion } from "./patterns/compound-component/page";

export default function Home() {
  return (
    <MenuAccordion>
      <MenuAccordion.Group title="Patterns">
          <MenuAccordion.Item>
            <Link href="/patterns/compound-component">Compound component</Link>
          </MenuAccordion.Item>
          <MenuAccordion.Item>
            <Link href="/patterns/render-prop">Render prop</Link>
          </MenuAccordion.Item>
          <Link href="/patterns/hoc">HOC</Link>
      </MenuAccordion.Group>
      <MenuAccordion.Group title="Optimization">
        <MenuAccordion.Item>
          <Link href="/optimization/state-location">State location</Link>
        </MenuAccordion.Item>
      </MenuAccordion.Group>
    </MenuAccordion>
  );
}
