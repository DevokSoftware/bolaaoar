import { PersonEnum } from "../model/PersonEnum";
import * as NBAIcons from "../logos/index.js";

export interface PredictionPick {
  person: PersonEnum;
  prediction: string;
  portrait?: string;
  finalists?: { name: string; icon: NBAIcons.Icon }[];
}

export interface SeasonPrediction {
  title: string;
  picks: PredictionPick[];
}

export const predictions2627: SeasonPrediction[] = [
  {
    title: "Defensive Player of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Victor Wembanyama", portrait: "victor-wembanyama.png" },
      { person: PersonEnum.RBR, prediction: "Scottie Barnes", portrait: "scottie-barnes.png" },
      { person: PersonEnum.LN, prediction: "Walker Kessler", portrait: "walker-kessler.png" },
    ],
  },
  {
    title: "Rookie of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Caleb Wilson", portrait: "caleb-wilson.png" },
      { person: PersonEnum.RBR, prediction: "Cam Boozer", portrait: "cam-boozer.png" },
      { person: PersonEnum.LN, prediction: "Darryn Peterson", portrait: "darryn-peterson.png" },
    ],
  },
  {
    title: "Coach of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Erik Spoelstra", portrait: "erik-spoelstra.jpg" },
      { person: PersonEnum.RBR, prediction: "Darko Rajaković", portrait: "darko-rajakovic.png" },
      { person: PersonEnum.LN, prediction: "Will Hardy", portrait: "will-hardy.jpg" },
    ],
  },
  {
    title: "Sixth Man of the Year",
    picks: [
      { person: PersonEnum.JD, prediction: "Neemias Queta", portrait: "neemias-queta.png" },
      { person: PersonEnum.RBR, prediction: "Payton Pritchard", portrait: "payton-pritchard.png" },
      { person: PersonEnum.LN, prediction: "Ajay Mitchell", portrait: "ajay-mitchell.png" },
    ],
  },
  {
    title: "Most Improved Player",
    picks: [
      { person: PersonEnum.JD, prediction: "Dylan Harper", portrait: "dylan-harper.png" },
      { person: PersonEnum.RBR, prediction: "Brandon Miller", portrait: "brandon-miller.png" },
      { person: PersonEnum.LN, prediction: "Ty Jerome", portrait: "ty-jerome.png" },
    ],
  },
  {
    title: "MVP",
    picks: [
      { person: PersonEnum.JD, prediction: "Luka Dončić", portrait: "luka-doncic.png" },
      { person: PersonEnum.RBR, prediction: "Nikola Jokić", portrait: "nikola-jokic.png" },
      { person: PersonEnum.LN, prediction: "Victor Wembanyama", portrait: "victor-wembanyama.png" },
    ],
  },
  {
    title: "Finals",
    picks: [
      {
        person: PersonEnum.JD, prediction: "Thunder vs 76ers",
        finalists: [{ name: "Oklahoma City Thunder", icon: NBAIcons.OKC }, { name: "Philadelphia 76ers", icon: NBAIcons.PHI }],
      },
      {
        person: PersonEnum.RBR, prediction: "Thunder vs Pacers",
        finalists: [{ name: "Oklahoma City Thunder", icon: NBAIcons.OKC }, { name: "Indiana Pacers", icon: NBAIcons.IND }],
      },
      {
        person: PersonEnum.LN, prediction: "Thunder vs Raptors",
        finalists: [{ name: "Oklahoma City Thunder", icon: NBAIcons.OKC }, { name: "Toronto Raptors", icon: NBAIcons.TOR }],
      },
    ],
  },
];
