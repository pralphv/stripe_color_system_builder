import { MUI_SAMPLE } from "../constants/slots";

const LOCAL_STORAGE_SAVE_SLOT = "custom";

export function saveToLocalStorage(state) {
  let saveSlot;
  try {
    saveSlot = state.activeSaveSlot.activeSaveSlot;
  } catch {
    return;
  }
  console.log(saveSlot)
  state = JSON.stringify(state);
  localStorage.setItem(saveSlot, state);
}

export function loadFromLocalStorage(slot = null) {
  try {
    slot = slot ? slot : LOCAL_STORAGE_SAVE_SLOT;
    let data = localStorage.getItem(slot);
    if (slot === "mui" && !data) {
      return MUI_SAMPLE;
    }
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (err) {
    return null;
  }
  return {};
}
