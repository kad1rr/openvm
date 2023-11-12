# OpenVM Compiler Documentation

This document explains the functionality of the OpenVM compiler, which translates between OBC
(Oxygen Byte Code) and ORC (Oxygen Readable Code).

## Table of Contents

- [handleCommandsORC](#handlecommandsorc)
- [handleCommandsOBC](#handlecommandsobc)
- [CompileToOBC](#compiletoobc)
- [CompileToORC](#compiletoorc)

## handleCommandsORC

```javascript
/**
 * @param {string} action
 * @param {string} argument
 * @returns {Array} An array containing the translated action and the original argument.
 */
const handleCommandsORC = (action, argument) => {
  return [
    action
      .toLowerCase()
      .replace(COMMANDS.add, 'add')
      .replace(COMMANDS.cmp, 'cmp')
      .replace(COMMANDS.cmps, 'cmps')
      .replace(COMMANDS.div, 'div')
      .replace(COMMANDS.exit, 'exit')
      .replace(COMMANDS.jmp, 'jmp')
      .replace(COMMANDS.mod, 'mod')
      .replace(COMMANDS.mov, 'mov')
      .replace(COMMANDS.movs, 'movs')
      .replace(COMMANDS.mul, 'mul')
      .replace(COMMANDS.put, 'put')
      .replace(COMMANDS.set, 'set')
      .replace(COMMANDS.sub, 'sub'),
    argument,
  ]
}
```

This function takes an action and an argument, translates the action from OBC to ORC, and returns an
array containing the translated action and the original argument.

## handleCommandsOBC

```javascript
/**
 * @param {string} action
 * @param {string} argument
 * @returns {Array} An array containing the translated action and the original argument.
 */
const handleCommandsOBC = (action, argument) => {
  return [
    action
      .toLowerCase()
      .replace('add', COMMANDS.add)
      .replace('cmp', COMMANDS.cmp)
      .replace('cmps', COMMANDS.cmps)
      .replace('div', COMMANDS.div)
      .replace('exit', COMMANDS.exit)
      .replace('jmp', COMMANDS.jmp)
      .replace('mod', COMMANDS.mod)
      .replace('mov', COMMANDS.mov)
      .replace('movs', COMMANDS.movs)
      .replace('mul', COMMANDS.mul)
      .replace('put', COMMANDS.put)
      .replace('set', COMMANDS.set)
      .replace('sub', COMMANDS.sub),
    argument,
  ]
}
```

This function takes an action and an argument, translates the action from ORC to OBC, and returns an
array containing the translated action and the original argument.

## CompileToOBC

```javascript
/**
 * @param {string} data - Source code in ORC format.
 * @returns {Array} An array containing translated OBC commands.
 */
const CompileToOBC = data => {
  const source = data.split('\n')
  const obcCommands = []
  source.forEach(command => {
    const [action, argument] = command.split(' ')
    obcCommands.push(handleCommandsOBC(action, argument))
  })
  return obcCommands
}
```

This function takes source code in ORC format, splits it into commands, translates each command to
OBC, and returns an array containing the translated OBC commands.

## CompileToORC

```javascript
/**
 * @param {string} data - Source code in OBC format.
 * @returns {Array} An array containing translated ORC commands.
 */
const CompileToORC = data => {
  const source = data.split('\n')
  const orcCommands = []
  source.forEach(command => {
    const [action, argument] = command.split(' ')
    orcCommands.push(handleCommandsORC(action, argument))
  })
  return orcCommands
}
```

This function takes source code in OBC format, splits it into commands, translates each command to
ORC, and returns an array containing the translated ORC commands.
