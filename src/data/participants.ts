import { PersonEnum } from "../model/PersonEnum";

export const participantColours: Record<PersonEnum, string> = {
  [PersonEnum.UNKNOWN]: "#A0AEC0",
  [PersonEnum.JD]: "#63B3ED",
  [PersonEnum.RBR]: "#F6AD55",
  [PersonEnum.LN]: "#B794F4",
};

export const participantShortNames: Record<PersonEnum, string> = {
  [PersonEnum.UNKNOWN]: "",
  [PersonEnum.JD]: "JD",
  [PersonEnum.RBR]: "Ricardo",
  [PersonEnum.LN]: "Lucas",
};
