export default function Create() {
  return (
    <section className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Título de la página"
        className="w-full p-3 border text-lg text-neutral-600"
      />
      <textarea
        name=""
        id=""
        placeholder="Escribe algo"
        className="w-full min-h-80 max-h-96 p-3 border"
      ></textarea>
    </section>
  );
}
