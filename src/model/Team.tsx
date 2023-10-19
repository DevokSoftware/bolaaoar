import { ConferenceEnum } from "./ConferenceEnum";
import { PersonEnum } from "./PersonEnum";
import * as NBAIcons from "./../logos/index.js";
export class Team {
  id: string = "";
  name: string = "";
  conference: ConferenceEnum = ConferenceEnum.EMPTY;
  chosenBy: PersonEnum = PersonEnum.UNKNOWN;
  wins: number = 0;
  pick: number = 0;
  icon: NBAIcons.Icon = NBAIcons.EMPTY;

  constructor(
    id: string,
    name: string,
    chosenBy: PersonEnum,
    conference: ConferenceEnum,
    icon: NBAIcons.Icon,
    pick: number
  ) {
    this.id = id;
    this.name = name;
    this.chosenBy = chosenBy;
    this.conference = conference;
    this.icon = icon;
    this.pick = pick;
  }
}

export interface ITeam {
  id: number;
  name: string;
  conference: ConferenceEnum;
  chosenBy: PersonEnum;
  wins: number;
  pick: number;
  icon: NBAIcons.Icon;
}
