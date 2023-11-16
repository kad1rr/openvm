import { VM, OBCExecutor } from '../src/openvm.js'
import fs from 'fs'

const vm = new VM()
const file = fs.readFileSync('./test/your-file.o', {
  encoding: 'utf8',
})
vm.run(file)

const exe = new OBCExecutor('AES')
console.log(exe.generate(file))
