import Ajv from 'ajv';
let ajv = new Ajv({ allErrors: true }); // `allErrors` has been set to true
ajv.addSchema(require('./json-schema'), 'schema');

app.get('/post/:id', (req, res) => {
	ajv.validate('schema', req.body)
});

app.get((req, res) => {
  ajv.validate(req.body)
})
