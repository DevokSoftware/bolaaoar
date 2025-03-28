import { ConferenceEnum } from "../model/ConferenceEnum";
import { PersonEnum } from "../model/PersonEnum";
import { ITeam } from "../model/Team";
import * as NBAIcons from "../logos/index.js";

export function getPicksFromSeason2223(): ITeam[] {
  const picks: ITeam[] = [
    {
      id: 1,
      name: "Atlanta Hawks",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ATL,
      pick: 7,
      wins: 41,
    },
    {
      id: 2,
      name: "Boston Celtics",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BOS,
      pick: 3,
      wins: 57,
    },
    {
      id: 4,
      name: "Brooklyn Nets",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BKN,
      pick: 6,
      wins: 45,
    },
    {
      id: 5,
      name: "Charlotte Hornets",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHA,
      pick: 15,
      wins: 27,
    },
    {
      id: 6,
      name: "Chicago Bulls",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHI,
      pick: 10,
      wins: 40,
    },
    {
      id: 7,
      name: "Cleveland Cavaliers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CLE,
      pick: 2,
      wins: 51,
    },
    {
      id: 8,
      name: "Dallas Mavericks",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DAL,
      pick: 8,
      wins: 38,
    },
    {
      id: 9,
      name: "Denver Nuggets",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DEN,
      pick: 3,
      wins: 53,
    },
    {
      id: 10,
      name: "Detroit Pistons",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.DET,
      pick: 12,
      wins: 17,
    },
    {
      id: 11,
      name: "Golden State Warriors",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.GSW,
      pick: 2,
      wins: 44,
    },
    {
      id: 14,
      name: "Houston Rockets",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.HOU,
      pick: 14,
      wins: 22,
    },
    {
      id: 15,
      name: "Indiana Pacers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.IND,
      pick: 14,
      wins: 35,
    },
    {
      id: 16,
      name: "Los Angeles Clippers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAC,
      pick: 4,
      wins: 44,
    },
    {
      id: 17,
      name: "Los Angeles Lakers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAL,
      pick: 9,
      wins: 43,
    },
    {
      id: 19,
      name: "Memphis Grizzlies",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MEM,
      pick: 7,
      wins: 51,
    },
    {
      id: 20,
      name: "Miami Heat",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIA,
      pick: 4,
      wins: 44,
    },
    {
      id: 21,
      name: "Milwaukee Bucks",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIL,
      pick: 1,
      wins: 58,
    },
    {
      id: 22,
      name: "Minnesota Timberwolves",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MIN,
      pick: 5,
      wins: 42,
    },
    {
      id: 23,
      name: "New Orleans Pelicans",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.NOP,
      pick: 6,
      wins: 42,
    },
    {
      id: 24,
      name: "New York Knicks",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.NYK,
      pick: 9,
      wins: 47,
    },
    {
      id: 25,
      name: "Oklahoma City Thunder",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.OKC,
      pick: 15,
      wins: 40,
    },
    {
      id: 26,
      name: "Orlando Magic",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ORL,
      pick: 13,
      wins: 34,
    },
    {
      id: 27,
      name: "Philadelphia 76ers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.PHI,
      pick: 5,
      wins: 54,
    },
    {
      id: 28,
      name: "Phoenix Suns",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.PHX,
      pick: 1,
      wins: 45,
    },
    {
      id: 29,
      name: "Portland Trail Blazers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.POR,
      pick: 11,
      wins: 33,
    },
    {
      id: 30,
      name: "Sacramento Kings",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAC,
      pick: 10,
      wins: 48,
    },
    {
      id: 31,
      name: "San Antonio Spurs",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAS,
      pick: 13,
      wins: 22,
    },
    {
      id: 38,
      name: "Toronto Raptors",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.TOR,
      pick: 8,
      wins: 41,
    },
    {
      id: 40,
      name: "Utah Jazz",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.UTA,
      pick: 12,
      wins: 37,
    },
    {
      id: 41,
      name: "Washington Wizards",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.WAS,
      pick: 11,
      wins: 35,
    },
  ];

  return picks;
}

export function getPicksFromSeason2324(): ITeam[] {
  const picks: ITeam[] = [
    {
      id: 1,
      name: "Atlanta Hawks",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ATL,
      pick: 5,
      wins: 36,
    },
    {
      id: 2,
      name: "Boston Celtics",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BOS,
      pick: 1,
      wins: 64,
    },
    {
      id: 4,
      name: "Brooklyn Nets",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BKN,
      pick: 7,
      wins: 32,
    },
    {
      id: 5,
      name: "Charlotte Hornets",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHA,
      pick: 15,
      wins: 21,
    },
    {
      id: 6,
      name: "Chicago Bulls",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHI,
      pick: 12,
      wins: 39,
    },
    {
      id: 7,
      name: "Cleveland Cavaliers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CLE,
      pick: 3,
      wins: 48,
    },
    {
      id: 8,
      name: "Dallas Mavericks",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DAL,
      pick: 10,
      wins: 50,
    },
    {
      id: 9,
      name: "Denver Nuggets",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DEN,
      pick: 1,
      wins: 57,
    },
    {
      id: 10,
      name: "Detroit Pistons",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.DET,
      pick: 13,
      wins: 14,
    },
    {
      id: 11,
      name: "Golden State Warriors",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.GSW,
      pick: 6,
      wins: 46,
    },
    {
      id: 14,
      name: "Houston Rockets",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.HOU,
      pick: 12,
      wins: 41,
    },
    {
      id: 15,
      name: "Indiana Pacers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.IND,
      pick: 9,
      wins: 47,
    },
    {
      id: 16,
      name: "Los Angeles Clippers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAC,
      pick: 4,
      wins: 51,
    },
    {
      id: 17,
      name: "Los Angeles Lakers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAL,
      pick: 3,
      wins: 47,
    },
    {
      id: 19,
      name: "Memphis Grizzlies",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MEM,
      pick: 5,
      wins: 27,
    },
    {
      id: 20,
      name: "Miami Heat",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIA,
      pick: 8,
      wins: 46,
    },
    {
      id: 21,
      name: "Milwaukee Bucks",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIL,
      pick: 2,
      wins: 49,
    },
    {
      id: 22,
      name: "Minnesota Timberwolves",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MIN,
      pick: 11,
      wins: 56,
    },
    {
      id: 23,
      name: "New Orleans Pelicans",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.NOP,
      pick: 8,
      wins: 49,
    },
    {
      id: 24,
      name: "New York Knicks",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.NYK,
      pick: 6,
      wins: 50,
    },
    {
      id: 25,
      name: "Oklahoma City Thunder",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.OKC,
      pick: 9,
      wins: 57,
    },
    {
      id: 26,
      name: "Orlando Magic",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ORL,
      pick: 10,
      wins: 47,
    },
    {
      id: 27,
      name: "Philadelphia 76ers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.PHI,
      pick: 4,
      wins: 47,
    },
    {
      id: 28,
      name: "Phoenix Suns",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.PHX,
      pick: 2,
      wins: 49,
    },
    {
      id: 29,
      name: "Portland Trail Blazers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.POR,
      pick: 15,
      wins: 21,
    },
    {
      id: 30,
      name: "Sacramento Kings",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAC,
      pick: 7,
      wins: 46,
    },
    {
      id: 31,
      name: "San Antonio Spurs",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAS,
      pick: 14,
      wins: 22,
    },
    {
      id: 38,
      name: "Toronto Raptors",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.TOR,
      pick: 11,
      wins: 25,
    },
    {
      id: 40,
      name: "Utah Jazz",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.UTA,
      pick: 13,
      wins: 31,
    },
    {
      id: 41,
      name: "Washington Wizards",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.WAS,
      pick: 14,
      wins: 15,
    },
  ];

  return picks;
}

export function getPicksFromSeason2425(): ITeam[] {
  const picks: ITeam[] = [
    {
      id: 1,
      name: "Atlanta Hawks",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ATL,
      pick: 9,
      wins: 0,
    },
    {
      id: 2,
      name: "Boston Celtics",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BOS,
      pick: 1,
      wins: 0,
    },
    {
      id: 4,
      name: "Brooklyn Nets",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.BKN,
      pick: 14,
      wins: 0,
    },
    {
      id: 5,
      name: "Charlotte Hornets",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHA,
      pick: 10,
      wins: 0,
    },
    {
      id: 6,
      name: "Chicago Bulls",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CHI,
      pick: 11,
      wins: 0,
    },
    {
      id: 7,
      name: "Cleveland Cavaliers",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.CLE,
      pick: 5,
      wins: 0,
    },
    {
      id: 8,
      name: "Dallas Mavericks",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DAL,
      pick: 4,
      wins: 0,
    },
    {
      id: 9,
      name: "Denver Nuggets",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.DEN,
      pick: 5,
      wins: 0,
    },
    {
      id: 10,
      name: "Detroit Pistons",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.DET,
      pick: 12,
      wins: 0,
    },
    {
      id: 11,
      name: "Golden State Warriors",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.GSW,
      pick: 7,
      wins: 0,
    },
    {
      id: 14,
      name: "Houston Rockets",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.HOU,
      pick: 9,
      wins: 0,
    },
    {
      id: 15,
      name: "Indiana Pacers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.IND,
      pick: 6,
      wins: 0,
    },
    {
      id: 16,
      name: "Los Angeles Clippers",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAC,
      pick: 13,
      wins: 0,
    },
    {
      id: 17,
      name: "Los Angeles Lakers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.LAL,
      pick: 10,
      wins: 0,
    },
    {
      id: 19,
      name: "Memphis Grizzlies",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MEM,
      pick: 6,
      wins: 0,
    },
    {
      id: 20,
      name: "Miami Heat",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIA,
      pick: 8,
      wins: 0,
    },
    {
      id: 21,
      name: "Milwaukee Bucks",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.MIL,
      pick: 3,
      wins: 0,
    },
    {
      id: 22,
      name: "Minnesota Timberwolves",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.MIN,
      pick: 3,
      wins: 0,
    },
    {
      id: 23,
      name: "New Orleans Pelicans",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.NOP,
      pick: 11,
      wins: 0,
    },
    {
      id: 24,
      name: "New York Knicks",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.NYK,
      pick: 2,
      wins: 0,
    },
    {
      id: 25,
      name: "Oklahoma City Thunder",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.OKC,
      pick: 1,
      wins: 0,
    },
    {
      id: 26,
      name: "Orlando Magic",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.ORL,
      pick: 7,
      wins: 0,
    },
    {
      id: 27,
      name: "Philadelphia 76ers",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.PHI,
      pick: 4,
      wins: 0,
    },
    {
      id: 28,
      name: "Phoenix Suns",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.PHX,
      pick: 2,
      wins: 0,
    },
    {
      id: 29,
      name: "Portland Trail Blazers",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.POR,
      pick: 15,
      wins: 0,
    },
    {
      id: 30,
      name: "Sacramento Kings",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAC,
      pick: 8,
      wins: 0,
    },
    {
      id: 31,
      name: "San Antonio Spurs",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.SAS,
      pick: 12,
      wins: 0,
    },
    {
      id: 38,
      name: "Toronto Raptors",
      chosenBy: PersonEnum.LN,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.TOR,
      pick: 13,
      wins: 0,
    },
    {
      id: 40,
      name: "Utah Jazz",
      chosenBy: PersonEnum.JD,
      conference: ConferenceEnum.WEST,
      icon: NBAIcons.UTA,
      pick: 14,
      wins: 0,
    },
    {
      id: 41,
      name: "Washington Wizards",
      chosenBy: PersonEnum.RBR,
      conference: ConferenceEnum.EAST,
      icon: NBAIcons.WAS,
      pick: 15,
      wins: 0,
    },
  ];

  return picks;
}
