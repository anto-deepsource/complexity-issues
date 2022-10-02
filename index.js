const init = async (core, proc) => {	

}

const cli = async (argv = [], opts = {}) => {	

}

const myAdapter = (core) => ({	
  readdir: async (path, options) => [],
});


test("should create server auth adapter", async () => {		
  return expect(basicScaffold("auth", "server")).resolves.toBe(true);
});

(
  async function init() {	

  }
)();

module.exports = {
  async listen() {	
  },

  init: async () => {

  },

  readdir: (vfs) => async (path) => [],
}
