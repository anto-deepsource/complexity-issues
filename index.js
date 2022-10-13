const init = async (core, proc) => {
  console.log(1)
}

const cli = async (argv = [], opts = {}) => {
  console.log(1)
}

const myAdapter = (core) => ({
  readdir: async (path, options) => [],
});


test("should create server auth adapter", async () => {
  return expect(basicScaffold("auth", "server")).resolves.toBe(true);
});

(
  async function init() {
    console.log(1)
  }
)();

module.exports = {
  async listen() {
    console.log(1)
  },

  init: async () => {
    console.log(1)
  },

  readdir: (vfs) => async (path) => [],
}
