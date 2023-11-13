# OpenVM Short-Term Memory (SHM) Documentation

This document provides information about the `SHM` class, which represents short-term memory in the
OpenVM project.

## Table of Contents

- [Introduction](#introduction)
- [Constructor](#constructor)
- [Methods](#methods)
  - [set](#set)
  - [get](#get)

## Introduction

The `SHM` class is designed to simulate short-term memory in the OpenVM project. Unlike long-term
memory, the contents of short-term memory are periodically reset, making it suitable for temporary
storage or quick access during program execution.

## Constructor

```javascript
/**
 * @param {number} size - Size of memory bases.
 * @param {number} length - Number of memory cells in each base.
 * @param {number} delay - Delay (in milliseconds) for resetting the memory periodically.
 */
constructor(size = 10, length = 25, delay = 100) {
  // Implementation details...
}
```

- size: Size of memory bases.
- length: Number of memory cells in each base.
- delay: Delay (in milliseconds) for resetting the memory periodically.

## Methods

### set

```javascript
/**
 * @param {number} stack - Index of memory base.
 * @param {number} cell - Index of memory cell within the base.
 * @param {number} value - Value to be set in the memory cell.
 */
set(stack, cell, value) {
  // Implementation details...
}

```

This method sets the value of a specific memory cell identified by the base index and cell index.

### get

```javascript
/**
 * @param {number} stack - Index of memory base.
 * @param {number} cell - Index of memory cell within the base.
 * @returns {number} - The value stored in the specified memory cell.
 */
get(stack, cell) {
  // Implementation details...
}
```

This method retrieves the value stored in a specific memory cell identified by the base index and
cell index.
