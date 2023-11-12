# OpenVM

OpenVM is a simple virtual machine designed for educational purposes. It includes a set of commands
and compilers to execute Oxygen Byte Code (OBC) and provides different types of memory, such as
long-term memory and short-term memory.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Oxygen Byte Code (OBC):** Execute programs written in OBC using the OpenVM virtual machine.
- **Long Memory:** Simulate non-resettable accessible memory with the `LongMemory` class.
- **Short-Term Memory (SHM):** Simulate short-term memory with the `SHM` class.
- **Compiler:** Translate between OBC and ORC (Oxygen Readable Code) using the provided compiler.
- **Reader:** Interpret and execute OBC commands using the `Reader` class.

## Installation

```bash
bun i openvm
# or
npm i openvm
# or
yarn add openvm
# or
pnpm i openvm
```

## Usage

```javascript
import { VM } from 'openvm'
import fs from 'fs'

const vm = new VM()
const file = fs.readFileSync('your-file.o', {
  encoding: 'utf8',
})
vm.run(file)
```

Just import your Oxygen Readable Code file and create a new VM instance.
Now you are ready to run your code.

## License
[MIT](https://github.com/kad1rr/openvm/blob/master/LICENSE)