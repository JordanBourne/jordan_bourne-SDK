jest.mock('https', () => ({
    request: {}
}))
  
// import { IncomingMessage } from 'http'
import { Stream } from 'stream'
import httpsMock from 'https'
import { call } from '../../theOneApi'

class MockResponse extends Stream {
    statusCode: Number

    constructor(statusCode) {
        super()
        this.statusCode = statusCode
    }
}

describe('Get Movies Call', () => {
    test('No options called default route with no params', async () => {
        const dataStream = new MockResponse(200)
        httpsMock.request = jest.fn().mockImplementation((_, callback) => {

            callback(dataStream)

            dataStream.emit('data', '{')
            dataStream.emit('data', '"test": "response"')
            dataStream.emit('data', '}')

            dataStream.emit('close')
        })

        const response = await call('apiKey', 'GET', 'my-path')

        expect(response).toEqual({ test: 'response'})
        expect(httpsMock.request).toHaveBeenCalledWith({
                protocol:'https:',
                hostname: 'the-one-api.dev',
                headers: {
                    Authorization: 'bearer ' + 'apiKey'
                },
                method: 'GET',
                path: 'my-path'
            }, 
            expect.any(Function)
        )
    })
})