import { PersonEnum } from "./PersonEnum";

export class PersonScore {
  person: PersonEnum = PersonEnum.UNKNOWN;
  wins: number = 0;

  constructor(person: PersonEnum, wins: number) {
    this.person = person;
    this.wins = wins;
  }
}

export interface IPersonScore {
  person: PersonEnum;
  wins: number;
}
