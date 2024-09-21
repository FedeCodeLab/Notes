import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";
import TrashIcon2 from "@/icons/TrashIcon2";

export default function Card() {
  return (
    <article className="bg-white hover:bg-slate-100 border rounded-lg p-6 gap-2 flex flex-col cursor-pointer">
      <div className="flex gap-2">
        <h3 className="font-semibold">
          Hoy tuve un sueño acerca de una vida pasada
        </h3>

        <button className="bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
          <TrashIcon2 color={"#fff"} width={16} height={16} />
        </button>

        <button className="bg-emerald-700 hover:bg-emerald-800 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
          <EditIcon color={"#fff"} width={16} height={16} />
        </button>
      </div>
      <p className="text-sm text-zinc-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </article>
  );
}
