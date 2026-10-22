import { PersonEnum } from "../model/PersonEnum";

export interface SeasonPrediction {
  title: string;
  picks: { person: PersonEnum; prediction: string }[];
}

export const predictions2627: SeasonPrediction[] = [
  {
    title: "Defensive Player of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Victor Wembanyama" },
      { person: PersonEnum.RBR, prediction: "Scottie Barnes" },
      { person: PersonEnum.LN, prediction: "Walker Kessler" },
    ],
  },
  {
    title: "Rookie of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Caleb Wilson" },
      { person: PersonEnum.RBR, prediction: "Cam Boozer" },
      { person: PersonEnum.LN, prediction: "Darryn Peterson" },
    ],
  },
  {
    title: "Coach of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Erik Spoelstra" },
      { person: PersonEnum.RBR, prediction: "Darko Rajaković" },
      { person: PersonEnum.LN, prediction: "Will Hardy" },
    ],
  },
  {
    title: "Sixth Man of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Neemias Queta" },
      { person: PersonEnum.RBR, prediction: "Payton Pritchard" },
      { person: PersonEnum.LN, prediction: "Ajay Mitchell" },
    ],
  },
  {
    title: "Most Improved Player",
    picks: [
      { person: PersonEnum.JD, prediction: "Dylan Harper" },
      { person: PersonEnum.RBR, prediction: "Brandon Miller" },
      { person: PersonEnum.LN, prediction: "Ty Jerome" },
    ],
  },
  {
    title: "MVP",
    picks: [
      { person: PersonEnum.JD, prediction: "Luka Dončić" },
      { person: PersonEnum.RBR, prediction: "Nikola Jokić" },
      { person: PersonEnum.LN, prediction: "Victor Wembanyama" },
    ],
  },
  {
    title: "Finals",
    picks: [
      { person: PersonEnum.JD, prediction: "Thunder vs 76ers" },
      { person: PersonEnum.RBR, prediction: "Thunder vs Pacers" },
      { person: PersonEnum.LN, prediction: "Thunder vs Raptors" },
    ],
  },
];
