import { StaticImageData } from 'next/image';

type ItemsType = {
    title: string,
    value: string,
    background: StaticImageData | string
    id: string
}

export const items: ItemsType[] = [
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-1.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-2.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-3.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-4.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-5.png',
        id: ''
    },
    {
        title: 'Путешествие в горы',
        value: 'от 80 000 руб',
        background: '/SNP-layout-react/img/card-tour-photo-6.png',
        id: ''
    }
]