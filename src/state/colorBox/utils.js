import { ID_DELIMITER } from "../../constants/colorGradient";

export function separateIdSubId(id) {
  const delimitedStrings = id.split(ID_DELIMITER);
  return { id: delimitedStrings[0], subId: delimitedStrings[1] };
}
