import https from 'https'

export async function call(apiKey: string, method: string, path: string) {
    return new Promise((resolve, reject) => {
        const req = https.request({
            protocol:'https:',
            hostname: 'the-one-api.dev',
            headers: {
                Authorization: 'bearer ' + apiKey
            },
            path,
            method
        }, (res) => {
            if (res.statusCode !== 200) {
                reject(`Bad response from server: ${res.statusCode}`)
                res.resume()
                return
            }
        
            let data = ''
        
            res.on('data', (chunk) => {
                data += chunk
            })
        
            res.on('close', () => {
                resolve(JSON.parse(data))
            })
        })
        

        req.on('error', (err) => reject(err))
        req.end()
    })
}