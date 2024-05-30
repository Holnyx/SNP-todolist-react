
import travelPhoto1 from '@/../public/img/travel-photo-1.png'
import travelPhoto2 from '@/../public/img/travel-photo-2.png'
import travelPhoto3 from '@/../public/img/travel-photo-3.png'
import travelPhoto4 from '@/../public/img/travel-photo-4.png'
import travelPhoto5 from '@/../public/img/travel-photo-5.png'
import travelPhoto6 from '@/../public/img/travel-photo-6.png'
import travelPhoto7 from '@/../public/img/travel-photo-7.png'
import travelPhoto8 from '@/../public/img/travel-photo-8.png'
import travelPhoto9 from '@/../public/img/travel-photo-9.png'
import travelPhoto10 from '@/../public/img/travel-photo-10.png'
import travelPhoto11 from '@/../public/img/travel-photo-11.png'
import travelPhoto12 from '@/../public/img/travel-photo-12.png'
import travelPhoto13 from '@/../public/img/travel-photo-13.png'
import { StaticImageData } from "next/image";


export type TravelPhotoStateType = {
  src: StaticImageData;
  alt: string;
  class?: string;
  classViewport?: string;
};

export const travelPhotoState: TravelPhotoStateType[] = [
  { src: travelPhoto1, alt: "Путешествие в горы" },
  { src: travelPhoto2, alt: "Путешествие в горы", class: "image-off" },
  { src: travelPhoto3, alt: "Путешествие в горы", class: "image-off-viewport" },
  { src: travelPhoto4, alt: "Путешествие в горы" },
  { src: travelPhoto5, alt: "Путешествие в горы" },
  { src: travelPhoto6, alt: "Путешествие в горы", class: "image-off-viewport" },
  { src: travelPhoto7, alt: "Путешествие в горы", class: "image-off" },
  { src: travelPhoto8, alt: "Путешествие в горы" },
  { src: travelPhoto9, alt: "Путешествие в горы" },
  { src: travelPhoto10, alt: "Путешествие в горы" },
  { src: travelPhoto11, alt: "Путешествие в горы" },
  {
    src: travelPhoto12,
    alt: "Путешествие в горы",
    class: "image-off-viewport",
  },
  { src: travelPhoto13, alt: "Путешествие в горы", class: "image-off" },
];
