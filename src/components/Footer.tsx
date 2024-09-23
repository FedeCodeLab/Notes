import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";

export default function Footer() {
  return (
    <footer className="bg-slate-200 mt-auto">
      <div className="w-[90%] mx-auto flex justify-between py-12">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold">
            Hecho con Next.js por Federico Pablo Guzmán · Todos los derechos
            reservados.
          </p>
          <p className="text-sm text-zinc-600">federicoguzman.css@gmail.com</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/FedeCodeLab"
            target="_blank"
            className="transform hover:scale-110"
          >
            <Github color={"#222"} width={25} height={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/fedecodelab/"
            target="_blank"
            className="transform hover:scale-110"
          >
            <Linkedin color={"#222"} width={25} height={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
