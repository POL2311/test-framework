import {test,expect} from '@playwright/test';
import schema from '../data/schema.json';
import Ajv from 'ajv'
const ajv = new Ajv();
const productSchema = schema;
const validateProduct = ajv.compile(productSchema);

//happy path test
test.describe('API Testing con playwright & schema validation', () => {
    test('GET /products/1 - debe de responder 200 y cumplir con el schema', async({ request })=>{
        const response = await request.get('https://dummyjson.com/products/1');
        expect(response.status()).toBe(200);
        const body = response.json();
        expect(response.headers()['content-type']).toContain('application/json');
        const valid = productSchema()
    })
})