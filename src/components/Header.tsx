import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white border-zinc-300">
      <div className="flex w-[90%] mx-auto justify-between py-4 items-center">
        <Link href="/" className="text-xl">
          Notes
        </Link>
        <nav>
          <ul className="flex gap-4 text-sm items-center">
            <li>Sobre el proyecto</li>
            <li>Contacto</li>
            <button className="border py-2 px-4 rounded-md bg-emerald-700 text-white hover:bg-emerald-800">
              Portfolio
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}
