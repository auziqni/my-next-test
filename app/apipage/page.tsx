import { apimenu } from "@/lib/constants";

export default function page() {
  return (
    <main className="">
      <ul>
        {apimenu.map(function (menu) {
          return (
            <main key={menu.label} className="p-5">
              <li>
                <a href={"/apipage/" + menu.href}>{menu.label}</a>
              </li>
            </main>
          );
        })}
      </ul>
    </main>
  );
}
