const fetch = require("node-fetch");
const beerCatalog = require("../util/const");


class TemperatureService {

    async getAllTemperatures() {
        const promises = []
        Object.keys(beerCatalog).forEach(id => {
            promises.push(this.getTemperature(id))
        })
        return await Promise.all(promises)
    }

    async getTemperature(productId) {
        try {
            if (this.isValidProductId(productId)) {
                const response = await fetch(
                    this.getServiceUrl(productId)
                )
                const responseJson = await response.json();
                const {temperature} = responseJson
                const beer = beerCatalog[productId]
                const status = this.deriveStatus(temperature, beer);
                return {product: beer.name, temperature, status}

            } else {
                return {product: 'invalid product', status: 'invalid status'}
            }
        } catch (error) {
            console.error(`Error occurred > getTemperature`, error)
            throw error
        }
    }

    getServiceUrl(productId) {
        return `https://temperature-sensor-service.herokuapp.com/sensor/${productId}`;
    }

    isValidProductId(productId) {
        return Object.keys(beerCatalog).includes(productId)
    }

    deriveStatus(temperature, beer) {
        let status = 'undefined'
        if (temperature < beer.minimumTemperature) {
            status = 'too low'
        } else if (temperature > beer.maximumTemperature) {
            status = 'too high'
        } else if (temperature >= beer.minimumTemperature && temperature <= beer.maximumTemperature) {
            status = 'all good'
        }
        return status;
    }
}

module.exports = TemperatureService