import { VM } from '../src/openvm.js'
import fs from 'fs'

const vm = new VM()
const file = fs.readFileSync('./test/your-file.o', {
  encoding: 'utf8',
})
vm.run(file)
