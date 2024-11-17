"use client"
import CardContain from '@/components/common/CardContain'
import { Button } from '@nextui-org/button'
import { FC } from 'react'
import CardPlatform from '../CardPlatform'

interface CardsShopConnectProps {
    // imageURL: string;
    // title: string;
}

const CardShopConnect: FC<CardsShopConnectProps> = () => {
    return (
        <CardContain
            title="Martin Fernandez"
            size='xs'
            height='h-[386px]'
            urlImage='https://via.placeholder.com/330x200'
            alt='Conecta con el profesional Martin Fernandez'
            cardFooter={<Button variant='light' color='secondary' className='text-purple-300' fullWidth>
                Ver detalles
            </Button>}
        >
            <CardPlatform value='AppSheet' />

        </CardContain>
    )
}

export default CardShopConnect