// Commands
// https://github.com/kad1rr/openvm/blob/master/docs/commands.md

const COMMANDS = {
  add: '3a',
  mov: '8b',
  sub: '0c',
  mul: '7d',
  div: '0e',
  mod: '0f',
  jmp: 'r2',
  set: 'p3',
  put: 'g4',
  movs: '1v',
  cmp: 'pp',
  mod: 'ff',
  exit: 'aa',
  put: 'x5',
  comment: ';',
  run: 'o1',
  imp: 'q0',
  $imp: 'q1',
  del: '9g',
  if: 'p4',
}

export default COMMANDS
