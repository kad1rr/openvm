# OpenVM Long Memory Documentation

This document provides information about the `LongMemory` class, which represents non-resettable
accessible memory in the OpenVM project.

## Table of Contents

- [Introduction](#introduction)
- [Constructor](#constructor)
- [Methods](#methods)
  - [set](#set)
  - [get](#get)
  - [read](#read)

## Introduction

The `LongMemory` class is designed to simulate non-resettable accessible memory in the OpenVM
project. It is used to store and retrieve values in a persistent manner, allowing data to be
preserved across program executions.

## Constructor

```javascript
/**
 * @param {number} size - Number of memory stacks.
 * @param {number} length - Number of memory cells in each stack.
 * @param {number} interval - Interval (in milliseconds) for auto-saving the memory to a file.
 * @param {string} filePath - File path for saving the memory.
 */
constructor(size = 10, length = 25, interval = 100, filePath = './.mem') {
  // Implementation details...
}
```

- size: Number of memory stacks.
- length: Number of memory cells in each stack.
- interval: Interval (in milliseconds) for auto-saving the memory to a file.
- filePath: File path for saving the memory.

## Methods

### set

```javascript
/**
 * @param {number} stack - Index of memory stack.
 * @param {number} cell - Index of memory cell within the stack.
 * @param {number} value - Value to be set in the memory cell.
 * @returns {number} - The set value.
 */
set(stack, cell, value) {
  // Implementation details...
}
```

This method sets the value of a specific memory cell identified by the stack index and cell index.
It returns the set value.

### Get

```javascript
/**
 * @param {number} stack - Index of memory stack.
 * @param {number} cell - Index of memory cell within the stack.
 * @returns {number} - The value stored in the specified memory cell.
 */
get(stack, cell) {
  // Implementation details...
}

```

This method retrieves the value stored in a specific memory cell identified by the stack index and
cell index.

### Read

```javascript
/**
 * @returns {Array<Array<number | string>>} - The entire content of the memory.
 */
read() {
  // Implementation details...
}

```

This method reads the entire content of the memory from the file and returns it as a two-dimensional
array.
