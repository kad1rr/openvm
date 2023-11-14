import { VM } from 'openvm'
import fs from 'fs'

const vm = new VM()
const file = fs.readFileSync('./your-file.o', {
  encoding: 'utf8',
})
vm.run(file)