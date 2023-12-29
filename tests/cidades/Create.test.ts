import { StatusCodes } from 'http-status-codes';
import { testServer } from './../jest.setup';


describe('Cidades - CREATE', () => {

	it('Cria registro', async () => {
		const res1 = await testServer.
			post('/cidades')
			.send({nome: 'Caxias do Sul'});

		expect(res1.statusCode).toEqual(StatusCodes.CREATED);
		expect(typeof res1.body).toEqual('number');
	});

	it('Nome menor que o exigido', async () => {
		const res1 = await testServer.
			post('/cidades')
			.send({nome: 'Ca'});

		expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
		expect(res1.body).toHaveProperty('errors.body.nome');
	});

});