# OpenVM OBC Reader Documentation

This document explains the functionality of the `Reader` class, which reads and interprets Oxygen
Byte Code (OBC) in the OpenVM project.

## Table of Contents

- [Introduction](#introduction)
- [Constructor](#constructor)
- [Methods](#methods)
  - [compile](#compile)

## Introduction

The `Reader` class is designed to interpret and execute Oxygen Byte Code (OBC) instructions. It
reads a sequence of OBC commands, performs the specified actions, and updates the state of the
associated `LongMemory` and `stdout` (standard output) accordingly.

## Constructor

```javascript
/**
 * @param {string[] | string[][]} source - Source code in OBC format.
 * @param {LongMemory} memory - Instance of LongMemory or SHM for memory operations.
 */
constructor(source, memory) {
  // Implementation details...
}
```

- source: Source code in OBC format.
- memory: Instance of LongMemory or SHM for memory operations.

## Methods

### compile

```javascript
/**
 * @param {Array<string> | Array<string>[]} source - Source code in OBC format.
 */
compile(source) {
  // Implementation details...
}

```

This method takes an array of OBC commands, interprets each command, and executes the corresponding
actions. It updates the state of the associated LongMemory and stdout based on the executed
commands.

The following OBC commands are supported:

[Commands Documentation](https://github.com/kad1rr/openvm/blob/master/docs/commands.md)
