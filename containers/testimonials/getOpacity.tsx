import Position from "./Position";

export default (val: Position) => {
  if (val === "current") return 1;
  return 0.4;
};
