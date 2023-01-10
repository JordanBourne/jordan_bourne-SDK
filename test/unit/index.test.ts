let mockCall = jest.fn()
jest.mock('../../theOneApi', () => ({
    call: mockCall
}))

import { getMovies } from '../../index'

describe('Get Movies Call', () => {
    beforeEach(() => {
        mockCall.mockRestore()
    })
    test('No options called default route with no params', async () => {
        await getMovies('apiKey', )
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie')
    })
    test('Handle parameter: limit', async () => {
        await getMovies('apiKey', { limit: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?limit=10')
    })
    test('Handle parameter: page', async () => {
        await getMovies('apiKey', { page: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?page=10')
    })
    test('Handle parameter: offset', async () => {
        await getMovies('apiKey', { offset: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?offset=10')
    })
    test('Handle parameter: sort', async () => {
        await getMovies('apiKey', { sort: { field: 'name', direction: 'asc' } })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?sort=name:asc')
    })
    test('Handle parameter: includeNames', async () => {
        await getMovies('apiKey', { includeNames: ['The Hobbit', 'Return of the King'] })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?name=The%20Hobbit,Return%20of%20the%20King')
    })
    test('Handle parameter: excludeNames', async () => {
        await getMovies('apiKey', { excludeNames: ['The Hobbit', 'Return of the King'] })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?name!=The%20Hobbit,Return%20of%20the%20King')
    })
    test('Handle parameter: maxRuntimeInMinutes', async () => {
        await getMovies('apiKey', { maxRuntimeInMinutes: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?runtimeInMinutes<=10')
    })
    test('Handle parameter: minRuntimeInMinutes', async () => {
        await getMovies('apiKey', { minRuntimeInMinutes: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?runtimeInMinutes>=10')
    })
    test('Handle parameter: runtimeInMinutes', async () => {
        await getMovies('apiKey', { runtimeInMinutes: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?runtimeInMinutes=10')
    })
    test('Handle parameter: maxBudgetInMillions', async () => {
        await getMovies('apiKey', { maxBudgetInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?budgetInMillions<=10')
    })
    test('Handle parameter: minBudgetInMillions', async () => {
        await getMovies('apiKey', { minBudgetInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?budgetInMillions>=10')
    })
    test('Handle parameter: budgetInMillions', async () => {
        await getMovies('apiKey', { budgetInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?budgetInMillions=10')
    })
    test('Handle parameter: maxBoxOfficeRevenueInMillions', async () => {
        await getMovies('apiKey', { maxBoxOfficeRevenueInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?boxOfficeRevenueInMillions<=10')
    })
    test('Handle parameter: minBoxOfficeRevenueInMillions', async () => {
        await getMovies('apiKey', { minBoxOfficeRevenueInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?boxOfficeRevenueInMillions>=10')
    })
    test('Handle parameter: boxOfficeRevenueInMillions', async () => {
        await getMovies('apiKey', { boxOfficeRevenueInMillions: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?boxOfficeRevenueInMillions=10')
    })
    test('Handle parameter: maxAcademyAwardNominations', async () => {
        await getMovies('apiKey', { maxAcademyAwardNominations: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardNominations<=10')
    })
    test('Handle parameter: minAcademyAwardNominations', async () => {
        await getMovies('apiKey', { minAcademyAwardNominations: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardNominations>=10')
    })
    test('Handle parameter: academyAwardNominations', async () => {
        await getMovies('apiKey', { academyAwardNominations: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardNominations=10')
    })
    test('Handle parameter: maxAcademyAwardWins', async () => {
        await getMovies('apiKey', { maxAcademyAwardWins: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardWins<=10')
    })
    test('Handle parameter: minAcademyAwardWins', async () => {
        await getMovies('apiKey', { minAcademyAwardWins: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardWins>=10')
    })
    test('Handle parameter: academyAwardWins', async () => {
        await getMovies('apiKey', { academyAwardWins: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?academyAwardWins=10')
    })
    test('Handle parameter: maxRottenTomatoesScore', async () => {
        await getMovies('apiKey', { maxRottenTomatoesScore: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?rottenTomatoesScore<=10')
    })
    test('Handle parameter: minRottenTomatoesScore', async () => {
        await getMovies('apiKey', { minRottenTomatoesScore: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?rottenTomatoesScore>=10')
    })
    test('Handle parameter: rottenTomatoesScore', async () => {
        await getMovies('apiKey', { rottenTomatoesScore: 10 })
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', '/v2/movie?rottenTomatoesScore=10')
    })
    test('Handle multiple parameters', async () => {
        await getMovies('apiKey', {
            limit: 10,
            page: 10,
            offset: 10,
            sort: { field: 'name', direction: 'asc' },
            includeNames: ['The Hobbit', 'Return of the King'],
            excludeNames: ['The Hobbit', 'Return of the King'],
            maxRuntimeInMinutes: 10,
            minRuntimeInMinutes: 10,
            runtimeInMinutes: 10,
            maxBudgetInMillions: 10,
            minBudgetInMillions: 10,
            budgetInMillions: 10,
            maxBoxOfficeRevenueInMillions: 10,
            minBoxOfficeRevenueInMillions: 10,
            boxOfficeRevenueInMillions: 10,
            maxAcademyAwardNominations: 10,
            minAcademyAwardNominations: 10,
            academyAwardNominations: 10,
            maxAcademyAwardWins: 10,
            minAcademyAwardWins: 10,
            academyAwardWins: 10,
            maxRottenTomatoesScore: 10,
            minRottenTomatoesScore: 10,
            rottenTomatoesScore: 10
        })

        const expectedPath = '/v2/movie?'
            + 'limit=10&'
            + 'page=10&'
            + 'offset=10&'
            + 'sort=name:asc&'
            + 'name=The%20Hobbit,Return%20of%20the%20King&'
            + 'name!=The%20Hobbit,Return%20of%20the%20King&'
            + 'runtimeInMinutes<=10&'
            + 'runtimeInMinutes>=10&'
            + 'runtimeInMinutes=10&'
            + 'budgetInMillions<=10&'
            + 'budgetInMillions>=10&'
            + 'budgetInMillions=10&'
            + 'boxOfficeRevenueInMillions<=10&'
            + 'boxOfficeRevenueInMillions>=10&'
            + 'boxOfficeRevenueInMillions=10&'
            + 'academyAwardNominations<=10&'
            + 'academyAwardNominations>=10&'
            + 'academyAwardNominations=10&'
            + 'academyAwardWins<=10&'
            + 'academyAwardWins>=10&'
            + 'academyAwardWins=10&'
            + 'rottenTomatoesScore<=10&'
            + 'rottenTomatoesScore>=10&'
            + 'rottenTomatoesScore=10'
        
        expect(mockCall).toHaveBeenCalledWith('apiKey', 'GET', expectedPath)
    })
})