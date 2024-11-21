import Link from "next/link";

const NavLink = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link
      className="text-primario200 hover:text-primario500 text-xs xl:text-base"
      href={url}
    >
      {text}
    </Link>
  );
};

export default NavLink;
