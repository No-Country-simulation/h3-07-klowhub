import HeaderClient from "./components/HeaderClient";

export default function Header() {
  return (
    <header className="min-h-20 bg-[url('/assets/backgrounds/headerBackground.png')] flex px-3 items-center gap-3 justify-between relative pt-5 w-full">
      <div className="absolute h-full w-full left-0 bg-[#1F202699]/40 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md"></div>
      <nav className="flex gap-2 xl:gap-6 items-center justify-between z-10 w-full">
        <HeaderClient />
      </nav>
    </header>
  );
}
