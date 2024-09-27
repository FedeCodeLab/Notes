"use client";

import { useParams } from "next/navigation";
import { useNoteStore } from "@/store/useStore";
import EditIcon from "@/icons/EditIcon";

export default function Note() {
  const { id } = useParams();
  const notes = useNoteStore((state) => state.notes);
  const note = notes.find((note) => note.id.toString() === id);

  if (!note) {
    return <p>Nota no encontrada</p>;
  }

  return (
    <div className="bg-white p-4 rounded-sm shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-semibold text-3xl">{note.title}</h1>

        <button className="bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1 justify-center rounded-md py-2 px-4 text-sm font-medium">
          <EditIcon color={"#fff"} width={20} height={20} /> Editar
        </button>
      </div>
      <p className="text-zinc-700">{note.content}</p>
    </div>
  );
}
