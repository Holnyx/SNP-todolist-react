
import { StaticImageData } from "next/image";
import storyPhoto1 from "../../../../../public/img/story-photo-1.png";
import storyPhoto2 from "../../../../../public/img/story-photo-2.png";
import storyPhoto3 from "../../../../../public/img/story-photo-3.png";


type TravelHistoryInfoType = {
    text: string
    point?: string[]
}


type TravelHistoryType = {
    title: string
    info: TravelHistoryInfoType,
    background: StaticImageData
    social: string[]
}

export const TravelHistoryState: TravelHistoryType[] = [
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
      point: ["вкусная еда", "дешевый транспорт", "красивый город"],
    },
    background: storyPhoto1,
    social: ["instagram", "facebook", "YouTube"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: storyPhoto2,
    social: ["instagram", "ВКонтакте"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: storyPhoto3,
    social: ["instagram", "facebook", "ВКонтакте"],
  },
];
