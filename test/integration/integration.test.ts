import { getMovies } from '../../index'

describe('Get Movies Call',() => {
    test('No options called default route with no params', async () => {
        const movies = await getMovies(process.env.API_KEY, { limit: 1, includeNames: ['The Lord of the Rings Series'] })
        expect(movies).toEqual({
            "docs": [{
                "_id": "5cd95395de30eff6ebccde56",
                "academyAwardNominations": 30,
                "academyAwardWins": 17,
                "boxOfficeRevenueInMillions": 2917,
                "budgetInMillions": 281,
                "name": "The Lord of the Rings Series",
                "rottenTomatoesScore": 94,
                "runtimeInMinutes": 558
            }],
            "limit": 1,
            "offset": 0,
            "page": 1,
            "pages": 1,
            "total": 1
        })
    })
    test('Error response', async () => {
        try {
            await getMovies('bad-api-key', { limit: 1, includeNames: ['The Lord of the Rings Series'] })
            expect(true).toBe(false) // should not get here
        } catch (err) {
            expect(err).toBe('Bad response from server: 401')
        }
        
    })
})