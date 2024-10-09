import {
  ExternalLink,
  Headset,
  Mail,
  PhoneIcon,
  StoreIcon,
} from "lucide-react";

import {} from "lucide-react";

export default function ContactBanner() {
  return (
    <section className="h-[22vh] w-full center-col !justify-start-start bg-background mt-20">
      <div className="h-full w-[94%] relative grid grid-cols-[2.4fr_1fr] gap-x-3">
        <div className="h-[100%] w-full space-x-3 whitespace-nowrap bg-foreground rounded-2xl center text-background !justify-between px-8">
          <div className="center">
            <div className="h-[40px] w-[40px] center rounded-full bg-background text-primary">
              <Headset size={20} strokeWidth={1} />
            </div>

            <div className="center-col !items-start ml-2">
              <h1 className="text-xl font-poppinsSemibold">
                Atendimento Loja Virtual
              </h1>
              <p className="text-base font-poppinsLight">
                Segunda a sexta 8h às 18h
              </p>
            </div>
          </div>
          <div className="center">
            <div className="h-[40px] w-[40px] center rounded-full bg-background text-primary">
              <PhoneIcon size={20} strokeWidth={1} />
            </div>

            <div className="center-col !items-start ml-2">
              <h1 className="text-xl font-poppinsSemibold">
                Numero de contato
              </h1>
              <p className="text-base font-poppinsLight">(99) 3333-3333</p>
            </div>
          </div>
          <div className="center">
            <div className="h-[40px] w-[40px] center rounded-full bg-background text-primary">
              <Mail size={20} strokeWidth={1} />
            </div>

            <div className="center-col !items-start ml-2">
              <h1 className="text-xl font-poppinsSemibold">Email</h1>
              <p className="text-base font-poppinsLight">sac@loja.com.br</p>
            </div>
          </div>
        </div>
        <div className="h-[100%] w-full bg-primary rounded-2xl center text-background ">
          <div className="center">
            <div className="h-[40px] w-[40px] center rounded-full bg-background text-primary">
              <StoreIcon size={20} strokeWidth={1} />
            </div>

            <div className="center-col !items-start ml-2">
              <h1 className="text-xl font-poppinsSemibold">
                Loja física em São Paulo
              </h1>
              <p className="text-base font-poppinsLight">
                Segunda a sexta das 9h as 20h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
