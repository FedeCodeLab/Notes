"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Create() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <section className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Título de la página"
        className="w-full p-3 border text-lg text-neutral-600"
      />

      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        className="h-full bg-white"
      />
    </section>
  );
}
