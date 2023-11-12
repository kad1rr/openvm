# OpenVM Commands Documentation

This document provides detailed information about the commands used in OpenVM. Each command is
represented by a mnemonic and a corresponding hexadecimal opcode.

## Table of Contents

- [add](#add)
- [mov](#mov)
- [sub](#sub)
- [mul](#mul)
- [div](#div)
- [mod](#mod)
- [jmp](#jmp)
- [set](#set)
- [put](#put)
- [movs](#movs)
- [cmps](#cmps)
- [cmp](#cmp)
- [exit](#exit)

## add

- **Mnemonic:** add
- **Opcode:** 3a
- **Description:** Adds two values.

## mov

- **Mnemonic:** mov
- **Opcode:** 8b
- **Description:** Moves data from one location to another.

## sub

- **Mnemonic:** sub
- **Opcode:** 0c
- **Description:** Subtracts one value from another.

## mul

- **Mnemonic:** mul
- **Opcode:** 7d
- **Description:** Multiplies two values.

## div

- **Mnemonic:** div
- **Opcode:** 0e
- **Description:** Divides one value by another.

## mod

- **Mnemonic:** mod
- **Opcode:** 0f
- **Description:** Calculates the remainder of the division of one value by another.

## jmp

- **Mnemonic:** jmp
- **Opcode:** r2
- **Description:** Unconditional jump to a specified location.

## set

- **Mnemonic:** set
- **Opcode:** p3
- **Description:** Sets a value at a specified location.

## put

- **Mnemonic:** put
- **Opcode:** x5
- **Description:** Puts a value into a specific register.

## movs

- **Mnemonic:** movs
- **Opcode:** 1v
- **Description:** Moves a string of bytes from one location to another.

## cmp

- **Mnemonic:** cmp
- **Opcode:** pp
- **Description:** Compares two values.

## mod

- **Mnemonic:** mod
- **Opcode:** ff
- **Description:** Calculates the remainder of the division of one value by another.

## exit

- **Mnemonic:** exit
- **Opcode:** aa
- **Description:** Exits the program.

## Note

- Some mnemonics like `put` and `mod` appear multiple times in the provided code. It's recommended
  to clarify their usage in the codebase for accurate documentation.
