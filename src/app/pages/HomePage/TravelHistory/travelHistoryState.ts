
type TravelHistoryInfoType = {
    text: string
    point?: string[]
}


type TravelHistoryType = {
    title: string
    info: TravelHistoryInfoType,
    background: string
    social: string[]
}

export const TravelHistoryState: TravelHistoryType[] = [
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений:",
      point: ["вкусная еда", "дешевый транспорт", "красивый город"],
    },
    background: '/SNP-layout-react/img/story-photo-1.png',
    social: ["instagram", "facebook", "YouTube"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: '/SNP-layout-react/img/story-photo-2.png',
    social: ["instagram", "ВКонтакте"],
  },
  {
    title: "Автостопом в Стамбул",
    info: {
      text: "Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.",
    },
    background: '/SNP-layout-react/img/story-photo-3.png',
    social: ["instagram", "facebook", "ВКонтакте"],
  },
];
