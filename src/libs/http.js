// Http library for OpenVM
// https://github.com/kad1rr/openvm/blob/master/docs/librarys.md
import http from 'http'

class Http {
  constructor(memory) {
    this.memory = memory
    this.handles = []

    for (let i = 0; i < memory.length; i++) {
      for (let j = 1; i < memory.length; i++) {
        if (
          this.memory.get(this.memory.length - 4, i) !== 0 &&
          this.memory.get(this.memory.length - 4, j) !== 0
        ) {
          this.handles.push(
            this.memory.get(this.memory.length - 4, i),
            this.memory.get(this.memory.length - 4, j),
          )
        }
      }
    }
  }

  handle() {
    this.server = http.createServer((req, res) => {
      this.handles.forEach(handle => {
        const method = handle[0].split(':')[0] || 'get'
        const url = handle[0].split(':')[1] || handle
        const context = handle[1]

        if (req.method === method && req.url === url) {
          res.write(context)
          res.end()
        }
      })
    })
    this.server.listen(3333)
  }
}

export default Http
