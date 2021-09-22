import move from "./move.ts";
import component_move from "./component_move.ts";

const commands: Record<string, Function> = {
  move,
  component_move,
};

export default commands;
