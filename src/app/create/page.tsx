"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNoteStore } from "@/store/useStore";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const setNote = useNoteStore((state) => state.setNote); // Obtener la función de tu tienda

  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    setNote(title, content); // Guardar en el estado global
    setTitle(""); // Limpiar el título
    setContent(""); // Limpiar el contenido
  };

  return (
    <section className="flex flex-col gap-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título de la página"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Actualizar el estado local
          className="w-full p-3 border text-lg text-neutral-600"
        />

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent} // Actualizar el contenido local
          modules={modules}
          className="h-full bg-white"
        />

        <button type="submit">Crear</button>
      </form>
    </section>
  );
}
