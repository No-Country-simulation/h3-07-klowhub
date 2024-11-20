"use client"
import { Card, Image, Button, CardBody, CardFooter } from '@nextui-org/react';
import { Chip } from "@nextui-org/chip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { FC } from 'react';
import StarsCalification from '../../common/StarsCalification';
import Tags from '../../common/Tags';
import PlatformCard from '../CardPlatform';
import CardContain from '../../common/CardContain';

interface CardShopProps {
  isFor: "course" | "app"
  // imageURL: string;
  // type:"Lección" | "Curso";
  // title: string;
  // description: string;
  platform?: "AppSheet" | "Power Apps";
  // tags: string[];
  // totalCalification: number;
  // price: number;
}

const CardShop: FC<CardShopProps> = ({ isFor, platform }) => {
  return (
    <CardContain
      size={isFor === "course" ? "md" : "xs"}
      type='course'
      title='Dominando el desarrollo de aplicaciones con AppSheet'
      urlImage={`https://via.placeholder.com/${isFor === "course" ? "448" : "330"}x200`}
      alt='Dominando el desarrollo de aplicaciones con AppSheet'
      cardFooter={<>
        <Button startContent={<FontAwesomeIcon size='lg' className="mr-0.5" icon={faCartPlus} />} variant="flat" className="bg-purple-800 text-white hover:bg-purple-700 rounded-lg px-4">
          Añadir al carrito
        </Button>
        <Button variant='light' color="secondary" className=' min-w-28 rounded-lg text-purple-300'>
          Ver detalles
        </Button>
      </>}
    >
      <p className="text-gray-200 py-1 overflow-hidden text-ellipsis line-clamp-3">
        Conviértete en un experto en AppSheetHub y aprende a crear aplicaciones sin escribir una sola línea de código.
      </p>

      {/* Plataforma */}
      <PlatformCard value={platform ?? "AppSheet"} />

      {/* Etiquetas */}
      <Tags tags={["Logística", "Optimización", "Inventarios"]} />

      {/* Información adicional */}
      <div>
        <div className="flex items-center gap-3">
          <span className='font-bold'>3</span>
          <StarsCalification value={3} />
          <span className='text-gray-500' >(136)</span>
        </div>
        <h4 className="font-bold text-xl pt-2">$80.000</h4>
      </div>

    </CardContain>
  );
};

export default CardShop;
