"use client";

import React, { useState } from "react";

import {
  Armchair,
  ChevronRight,
  CircleUser,
  CircuitBoard,
  Computer,
  Cpu,
  Fan,
  HardDrive,
  Headphones,
  Headset,
  Heart,
  Home,
  Info,
  Keyboard,
  KeyboardMusic,
  MemoryStick,
  Menu,
  Monitor,
  Mouse,
  PcCase,
  PencilRuler,
  Search,
  ShoppingCart,
  UserRound,
  Videotape,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import BreadCrumb from "../breadcrumb";

interface HeaderLinkProps {
  title: string;
  href: string;
  icon?: any;
  isActive: boolean;
}

interface AccountProps {
  isAuth: boolean;
}

const links = [
  {
    title: "Placa Mãe",
    href: "/motherboard",
    icon: <CircuitBoard strokeWidth={1.5} />,
  },
  { title: "Processador", href: "/processor", icon: <Cpu strokeWidth={1.5} /> },
  {
    title: "Memoria RAM",
    href: "/ram",
    icon: <MemoryStick strokeWidth={1.5} />,
  },
  {
    title: "Fonte",
    href: "/power-supply",
    icon: <KeyboardMusic strokeWidth={1.5} />,
  },
  {
    title: "Placa de Video",
    href: "/video-card",
    icon: <Videotape strokeWidth={1.5} />,
  },
  {
    title: "Gabinetes",
    href: "/gabinetes",
    icon: <PcCase strokeWidth={1.5} />,
  },
  { title: "Cadeira", href: "/chair", icon: <Armchair strokeWidth={1.5} /> },
  { title: "Monitor", href: "/monitor", icon: <Monitor strokeWidth={1.5} /> },
  { title: "Teclado", href: "/keyboard", icon: <Keyboard strokeWidth={1.5} /> },
  { title: "Mouse", href: "/mouse", icon: <Mouse strokeWidth={1.5} /> },
  { title: "Fone", href: "/headphone", icon: <Headphones strokeWidth={1.5} /> },
  { title: "SSDs", href: "/hard-drive", icon: <HardDrive strokeWidth={1.5} /> },
  { title: "Coolers", href: "/cooler", icon: <Fan strokeWidth={1.5} /> },
];

const linksConfig = [
  {
    title: "Minha Conta",
    href: "/account",
    icon: <CircleUser strokeWidth={1.5} />,
  },
  { title: "Processador", href: "/processor", icon: <Cpu strokeWidth={1.5} /> },
  {
    title: "Quem Somos",
    href: "/sobre",
    icon: <Info strokeWidth={1.5} />,
  },
  {
    title: "Atendimento ao Cliente",
    href: "/atendimento",
    icon: <Headset strokeWidth={1.5} />,
  },
  {
    title: "Como comprar",
    href: "/tutorial",
    icon: <ShoppingCart strokeWidth={1.5} />,
  },
];

const HeaderLink: React.FC<HeaderLinkProps> = ({
  title,
  href,
  icon,
  isActive,
}) => {
  return (
    <a href={href} className={`${isActive ? "active" : ""} center space-x-2`}>
      {icon}
      <span>{title}</span>
    </a>
  );
};

const SearchBar: React.FC = () => {
  return (
    <div className="bg-light rounded-3xl h-[45px] px-4 center w-full">
      <Search className="text-foreground" size={14} strokeWidth={1.5} />
      <input
        placeholder="Pesquisar seu produto"
        className="w-full bg-transparent px-4 text-foreground text-sm"
      />
    </div>
  );
};

const MenuLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="center space-x-2 h-[45px] px-6 bg-primary text-white rounded-3xl focus:outline-none"
      >
        <span className="text-sm">Menu</span>
        <Menu className="ml-2" size={14} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-screen min-h-screen py-5 pl-5 bg-[#00000070] shadow-lg !justify-start center rounded-lg z-[999] left-0 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ left: "-130%" }}
              animate={{ left: "15px" }}
              exit={{ left: "-130%" }}
              transition={{ duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className={`absolute z-30 bg-white w-[500px] h-[95%] rounded-2xl center-col !justify-start overflow-hidden`}
            >
              <div className="overflow-y-scroll w-full py-7  px-4 center-col !justify-start menu-scroll">
                <img
                  src="https://static.pichau.com.br/logo-pichau-2021.png"
                  className=" h-[45px] object-cover grayscale"
                />
                <button className="center my-6 transition-all hover:grayscale-[10%] space-x-2 w-full min-h-[55px] px-6 bg-primary text-white rounded-2xl focus:outline-none">
                  <span>Monte seu PC</span>
                  <PencilRuler className="ml-2" size={16} />
                </button>

                <h3 className="w-full text-start font-poppinsRegular">
                  Categorias
                </h3>

                <ul className="flex flex-col w-full center-col !items-start space-y-3 my-3">
                  {links.map((link) => (
                    <li
                      key={link.title}
                      className="opacity-80 transition-all hover:opacity-100"
                    >
                      <HeaderLink {...link} isActive={false} />
                    </li>
                  ))}
                </ul>

                <h3 className="w-full font-poppinsRegular text-start mt-2">
                  Ajuda e Configurações
                </h3>

                <ul className="flex flex-col w-full center-col !items-start space-y-3 my-3">
                  {linksConfig.map((link) => (
                    <li
                      key={link.title}
                      className="opacity-80 transition-all hover:opacity-100"
                    >
                      <HeaderLink {...link} isActive={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FavotireButton: React.FC = () => {
  return (
    <button className="center h-[45px] min-w-[45px] bg-transparent text-foreground border border-solid border-foreground rounded-full focus:outline-none">
      <Heart size={16} strokeWidth={1.5} />
    </button>
  );
};

const ShoppingCartButton: React.FC = () => {
  return (
    <button className="center ml-3 h-[45px] min-w-[45px] bg-transparent text-foreground border border-solid border-foreground rounded-full focus:outline-none">
      <ShoppingCart size={16} strokeWidth={1.5} />
    </button>
  );
};

const AccountContainer: React.FC<AccountProps> = ({ isAuth }) => {
  return (
    <div>
      {!isAuth ? (
        <button className="center h-[45px] min-w-[45px] bg-transparent text-foreground border border-solid border-foreground rounded-full focus:outline-none">
          <UserRound size={16} strokeWidth={1.5} />
        </button>
      ) : (
        <button
          className="
            h-[45px] px-5 bg-transparent border border-solid border-foregrond text-foreground 
            font-poppinsLight text-sm rounded-full transition-all
            hover:bg-foreground hover:text-background hover:border-foreground
          "
        >
          Minha conta
        </button>
      )}
    </div>
  );
};

const ScrollingText = () => {
  const items = Array(20).fill("DESCONTO DE ATÉ 40% EM PLACAS DE VÍDEO");

  return (
    <Marquee className="w-full bg-foreground py-1">
      {items.map((item, index) => (
        <div className="center" key={index}>
          <span className="mx-4 text-background text-base font-poppinsBold">
            {item}
          </span>
          <div className="h-[5px] w-[5px] rounded-full bg-background"></div>
        </div>
      ))}
    </Marquee>
  );
};
export default function Header({ hasBreadcrumb }: { hasBreadcrumb?: boolean }) {
  return (
    <header className="w-full center-col absolute top-0">
      <ScrollingText />
      <div className="h-[90px] center w-full !justify-between px-8">
        <img
          className="h-[32px] object-cover opacity-80 grayscale"
          src="https://www.pichau.com.br/logo-pichau.png"
        />
        <div className="center w-[50%] space-x-2">
          <SearchBar />
          <MenuLinks />
        </div>

        <div className="h-full center ">
          <FavotireButton />
          <ShoppingCartButton />
          <div className="h-[35px] w-[1px] bg-foreground opacity-70 !mx-3"></div>
          <AccountContainer isAuth={false} />
        </div>
      </div>
      {hasBreadcrumb && (
        <BreadCrumb
          homeElement={<Home size={18} />}
          separator={<ChevronRight size={16} className="mx-1" />}
        />
      )}
    </header>
  );
}
