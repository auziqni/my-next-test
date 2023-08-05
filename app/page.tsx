import Link from "next/link";

import { dashmenu } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="">
      <ul>
        {dashmenu.map(function (menu) {
          return (
            <main key={menu.id} className="p-5">
              <li>
                <a href={"/" + menu.href}>{menu.label}</a>
              </li>
            </main>
          );
        })}
      </ul>
    </main>
  );
}
