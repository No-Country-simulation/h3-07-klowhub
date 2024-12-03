import Image from "next/image";

export default function HeaderServer() {
  return (
    <div className="">
      <Image
        src="/assets/icons/klowhub.png"
        alt="Klowhub logo"
        height={50}
        width={50}
        className="text-xs"
      />
    </div>
  );
}
