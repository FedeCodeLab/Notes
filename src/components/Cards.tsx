"use client";

import { useNoteStore } from "@/store/useStore";
import Card from "./Card";

export default function Cards() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {notes.map((note) => (
        <Card
          key={note.id}
          id={note.id.toString()}
          title={note.title}
          content={note.content}
        />
      ))}
    </section>
  );
}
