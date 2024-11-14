"use client"
import { Card, Image, Button, CardBody, CardFooter } from '@nextui-org/react';
import { Chip } from "@nextui-org/chip";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons/faCartPlus';
import { FC } from 'react';
import StarsCalification from '../common/StarsCalification';
import Tags from '../common/Tags';
import PlatformCard from './PlatformCard';

interface CouserCardProps {
  // imageURL: string;
  // type:"Lección" | "Curso";
  // title: string;
  // description: string;
  // platform: string;
  // tags: string[];
  // totalCalification: number;
  // price: number;
}

const CourseCard: FC<CouserCardProps> = () => {
  return (
    <Card className="shadow-lg max-w-sm bg-[#1F2937] text-white rounded-lg overflow-hidden">
      {/* Imagen y Etiqueta Superior */}
      <CardBody className="p-0 relative">
        <Image
          src="https://via.placeholder.com/384x200" // Reemplazar con la URL de la imagen
          width="100%"
          height={200}
          className='objet-cover z-10'
          alt="App preview"
          radius='none'
        />
        <Chip variant="solid" size='lg' className="absolute top-2 bg-green-200 left-2 z-20">
          <span className='font-semibold text-green-600'>
            Lección
          </span>
        </Chip>

        <div className="absolute top-2 right-2 z-20">
          <FontAwesomeIcon icon={faHeart} size="lg" className="hover:text-red-400 cursor-pointer transition-colors" />
        </div>
      </CardBody>

      {/* Contenido de la Tarjeta */}
      <CardBody className='px-4 pt-3 pb-0 space-y-3 text-sm relative'>
        <h5 className="font-bold leading-normal pr-3 text-ellipsis overflow-hidden text-nowrap">
          Dominando el desarrollo de aplicaciones con AppSheet
        </h5>
        <FontAwesomeIcon icon={faEllipsisVertical} className="absolute top-0 right-1 text-white/50 hover:text-white/85 cursor-pointer px-3 py-1 rounded-full hover:bg-gray-500/30 transition" size='lg' />
        <p className="text-gray-200">
          Conviértete en un experto en AppSheetHub y aprende a crear aplicaciones sin escribir una sola línea de código.
        </p>

        {/* Plataforma */}
        <PlatformCard value={"AppSheet"} />

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
      </CardBody>

      {/* Botones de Acción */}
      <CardFooter className="px-4 py-5 gap-x-5">
        <Button startContent={<FontAwesomeIcon size='lg' className="mr-0.5" icon={faCartPlus} />} variant="flat" className="bg-purple-800 text-white hover:bg-purple-700 rounded-lg px-3">
          Añadir al carrito
        </Button>
        <Button variant='light' color="secondary" className='px-3 rounded-lg text-purple-300'>
          Ver detalles
        </Button>
      </CardFooter>
    </Card >
  );
};

export default CourseCard;
