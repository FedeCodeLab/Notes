import CreateIcon from "@/icons/CreateIcon";
import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";
import Link from "next/link";

export default function Card() {
  return (
    <Link href="/note">
      <article className="bg-white hover:bg-slate-100 border rounded-lg p-6 gap-2 flex flex-col cursor-pointer">
        <div className="flex gap-2">
          <div>
            <h3 className="font-semibold">
              Hoy tuve un sueño acerca de una vida pasada
            </h3>
          </div>

          <button className="bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
            <TrashIcon color={"#fff"} width={16} height={16} />
          </button>

          <button className="bg-emerald-700 hover:bg-emerald-800 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
            <EditIcon color={"#fff"} width={16} height={16} />
          </button>
        </div>
        <p className="text-sm text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </article>
    </Link>
  );
}
