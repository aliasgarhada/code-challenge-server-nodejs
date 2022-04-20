const TemperatureService = require("./TemperatureService");
const beerCatalog = require("../util/const");

describe('test getTemperature', () => {
    test('success', async () => {
        const service = new TemperatureService()
        const response = await service.getTemperature('2')
        expect(response).toBeTruthy()
        expect(response.product).toEqual(beerCatalog[2].name)
        expect(response.temperature).toEqual(expect.anything())
        expect(response.status).not.toEqual('undefined')
    })

    test('invalid productId', async () => {
        const service = new TemperatureService()
        const response = await service.getTemperature('8')
        expect(response).toBeTruthy()
        expect(response.product).toEqual('invalid product')
        expect(response.temperature).toBeFalsy()
        expect(response.status).toEqual('invalid status')
    })

    test('service url not reachable', async () => {
        const service = new TemperatureService()
        jest.spyOn(service,'getServiceUrl').mockReturnValue('https://blah-blah-url-invalid.com')
        await expect(async()=> service.getTemperature('2')).rejects.toThrow('request to https://blah-blah-url-invalid.com/ failed, reason: getaddrinfo ENOTFOUND blah-blah-url-invalid.com')
    })
})

describe('test getAllTemperatures', () => {
    test('success', async () => {
        const service = new TemperatureService()
        const response = await service.getAllTemperatures()
        expect(response.length).toEqual(6)
        for (i = 0; i < 6; i++) {
            expect(response[i].product).toEqual(beerCatalog[i + 1].name)
            expect(response[i].temperature).toEqual(expect.anything())
            expect(response.status).not.toEqual('undefined')
        }
    })
})