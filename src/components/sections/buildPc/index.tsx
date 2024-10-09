import { ExternalLink } from "lucide-react";

export default function BuildPC() {
  return (
    <section className="h-[70vh] w-full center-col !justify-start-start bg-background mt-20">
      <div className="h-full w-[94%] relative">
        <img
          className="h-[100%] w-full object-cover rounded-2xl absolute"
          src={
            "https://www.neweggbusiness.com/smartbuyer/wp-content/uploads/DARK_FLASH_TOWER_WEBREADY-08678.jpg"
          }
        />
        <div className="h-[100%] w-full bg-[rgba(0,0,0,0.5)] rounded-2xl absolute center-col text-background ">
          <h1 className="text-8xl font-poppinsSemibold">Construa seu PC</h1>
          <p className="text-xl font-poppinsLight">
            Escolha suas peças e monte seu PC do seu jeito!
          </p>
          <a
            href={"/construa-seu-pc"}
            className="center bg-background w-[20%] rounded-2xl space-x-6 py-3 text-foreground mt-8"
          >
            <span>Saiba Mais</span>
            <ExternalLink size={20} strokeWidth={1} />
          </a>
        </div>
      </div>
    </section>
  );
}
