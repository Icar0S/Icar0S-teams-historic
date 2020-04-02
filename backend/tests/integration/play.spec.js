const request = require('supertest');

const app = require('../../src/app');

describe('PLAY', () => {
    it('should be able to create a new match', async() => {
        const response = await request(app).post('/times').send({
            nome: "Ceara SC",
            site: "cearasc.com.br",
            email: "ceara@vozao.com",
            contato: "+55 85963210021",
            cidade: "Fortaleza",
            uf: "CE"
        });

    });
});