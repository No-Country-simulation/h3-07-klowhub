"use client"
import CardContain from '@/components/common/CardContain'
import { Button } from '@nextui-org/button'
import { FC } from 'react'
import CardPlatform from '../CardPlatform'
import { Image } from '@nextui-org/react'

interface CardsShopConnectProps {
    // imageURL: string;
    // title: string;
    platform?: "AppSheet" | "Power Apps";
}

const CardShopConnect: FC<CardsShopConnectProps> = ({ platform }) => {
    return (
        <CardContain
            title="Martin Fernandez"
            size='xs'
            height='min-h-[386px]'
            urlImage='https://via.placeholder.com/330x200'
            alt='Conecta con el profesional Martin Fernandez'
            cardFooter={<Button variant='light' color='secondary' className='text-purple-300' fullWidth>
                Ver detalles
            </Button>}
        >
            <CardPlatform value={platform ?? 'AppSheet'} />
            <p className='flex gap-1.5 items-center'>
                <Image
                    src='/assets/icons/cardConnect.svg'
                    alt='Icono de conexión'
                    width={23}
                    height={23}
                />
                50 Sesiones (35 Reseñas)
            </p>
            <p>Español</p>
            <h4 className="font-bold text-xl pt-2">6UD / Hora</h4>

        </CardContain >
    )
}

export default CardShopConnect