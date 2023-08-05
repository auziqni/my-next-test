import React from "react";
import { csmenu } from "@/lib/constants";

export default function CsMenu() {
  return (
    <main className="">
      <ul>
        {csmenu.map(function (menu) {
          return (
            <main key={menu.id} className="p-5">
              <li>
                <a href={"/csmenu/" + menu.href}>{menu.label}</a>
              </li>
            </main>
          );
        })}
      </ul>
    </main>
  );
}
