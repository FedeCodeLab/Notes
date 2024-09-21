import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";

export default function Card() {
  return (
    <article className="bg-white border rounded-lg p-6 gap-2 flex flex-col">
      <div className="flex gap-2">
        <h3 className="font-semibold">
          Hoy tuve un sueño acerca de una vida pasada
        </h3>

        <div className="">
          <EditIcon color={"#fff"} width={20} height={20} />
        </div>

        {/* <button className="bg-emerald-700 hover:bg-emerald-800 rounded-full  flex items-center justify-center text-white">
          <TrashIcon color={"#fff"} width={10} height={10} />
        </button> */}
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
