import Cards from "@/components/Cards";
import CreateIcon from "@/icons/CreateIcon";

export default function Home() {
  return (
    <main className="min-h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl">All my notes</h1>
        <a
          href="#"
          className="bg-emerald-700 hover:bg-emerald-800 flex items-center justify-center w-52 gap-2 text-white py-2 rounded-md"
        >
          <span>
            <CreateIcon color={"#fff"} width={20} height={20} />
          </span>
          Crea una nueva nota
        </a>
      </div>
      <Cards />
    </main>
  );
}
