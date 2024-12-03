import Image from "next/image";
import DashCard from "../DashCard";

const QuestionCard = ({
  title,
  contenido,
  autor,
  fecha,
  plataforma,
  estado,
}: {
  title: string;
  autor: string;
  fecha: string;
  plataforma: string;
  estado: string;
  contenido: string;
}) => {
  return (
    <DashCard classNames="my-6 grid grid-cols-7 items-center w-full">
      <div className="col-span-3">
        <h4 className="py-2">{title}</h4>
        <p>{contenido}</p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Image
          src="/assets/avatars/foto1.png"
          className="rounded-full"
          alt="avatar"
          width={50}
          height={50}
        />
        <p>{autor}</p>
      </div>
      <p className="text-center">{fecha}</p>
      <p className="text-center">{plataforma}</p>
      <p className="text-center">{estado}</p>
    </DashCard>
  );
};

export default QuestionCard;
