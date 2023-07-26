import { apimenu } from "@/lib/constants";

export default function page() {
  return (
    <main className="">
      <ul>
        {apimenu.map(function (menu) {
          return (
            <main className="p-5">
              <li key={menu.label}>
                <a href={"/apipage/" + menu.href}>{menu.label}</a>
              </li>
            </main>
          );
        })}
      </ul>
    </main>
  );
}
