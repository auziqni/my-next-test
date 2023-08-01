import React from "react";
import { csmenu } from "@/lib/constants";

export default function page() {
  return (
    <main className="">
      <ul>
        {csmenu.map(function (menu) {
          return (
            <main className="p-5">
              <li key={menu.label}>
                <a href={"/csmenu/" + menu.href}>{menu.label}</a>
              </li>
            </main>
          );
        })}
      </ul>
    </main>
  );
}
