import CreateIcon from "@/icons/CreateIcon";
import EditIcon from "@/icons/EditIcon";
import TrashIcon from "@/icons/TrashIcon";
import Link from "next/link";

interface CardProps {
  id: string;
  title: string;
  content: string;
}

export default function Card({ id, title, content }: CardProps) {
  return (
    <Link href={`/note/${id}`}>
      <article className="bg-white hover:bg-slate-100 border rounded-lg p-6 gap-2 flex flex-col cursor-pointer">
        <div className="flex gap-2">
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>

          <button className="bg-red-500 hover:bg-red-600 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
            <TrashIcon color={"#fff"} width={16} height={16} />
          </button>

          <button className="bg-emerald-700 hover:bg-emerald-800 rounded-full w-8 h-8 p-2 flex items-center justify-center text-white">
            <EditIcon color={"#fff"} width={16} height={16} />
          </button>
        </div>
        <p className="text-sm text-zinc-500">{content}</p>
      </article>
    </Link>
  );
}
