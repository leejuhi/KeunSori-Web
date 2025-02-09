export const transInstrument = (instrument: string) => {
  switch (instrument) {
    case "vocal":
      return "보컬";
    case "guitar":
      return "기타";
    case "bass":
      return "베이스";
    case "keyboard":
      return "키보드";
    case "drum":
      return "드럼";
    default:
      return "악기";
  }
};
