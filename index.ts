import { call } from "./theOneApi"

export type MovieOptions = {
    limit?: Number,
    page?: Number,
    offset?: Number,
    sort?: {
        field: 'name' |
               'runtimeInMinutes' |
               'budgetInMillions' |
               'boxOfficeRevenueInMillions' |
               'academyAwardNominations' |
               'academyAwardWins' |
               'rottenTomatoesScore',
        direction: 'asc' | 'desc'
    },
    includeNames?: String[],
    excludeNames?: String[],
    maxRuntimeInMinutes?: Number,
    minRuntimeInMinutes?: Number,
    runtimeInMinutes?: Number,
    maxBudgetInMillions?: Number,
    minBudgetInMillions?: Number,
    budgetInMillions?: Number,
    maxBoxOfficeRevenueInMillions?: Number,
    minBoxOfficeRevenueInMillions?: Number,
    boxOfficeRevenueInMillions?: Number,
    maxAcademyAwardNominations?: Number,
    minAcademyAwardNominations?: Number,
    academyAwardNominations?: Number,
    maxAcademyAwardWins?: Number,
    minAcademyAwardWins?: Number,
    academyAwardWins?: Number,
    maxRottenTomatoesScore?: Number,
    minRottenTomatoesScore?: Number,
    rottenTomatoesScore?: Number
}

export async function getMovies(apiKey: string, movieOptions?: MovieOptions) {
    let path = '/v2/movie?'

    if (movieOptions) {
        if (movieOptions.limit) {
            path += `limit=${movieOptions.limit}&`
        }
    
        if (movieOptions.page) {
            path += `page=${movieOptions.page}&`
        }
    
        if (movieOptions.offset) {
            path += `offset=${movieOptions.offset}&`
        }
    
        if (movieOptions.sort) {
            path += `sort=${movieOptions.sort.field}:${movieOptions.sort.direction}&`
        }
    
        if (movieOptions.includeNames) {
            path += `name=${movieOptions.includeNames.map(
                name => name.replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, '%20')
            ).join(',')}&`
        }
    
        if (movieOptions.excludeNames) {
            path += `name!=${movieOptions.excludeNames.map(
                name => name.replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, '%20')
            ).join(',')}&`
        }
    
        if (movieOptions.maxRuntimeInMinutes) {
            path += `runtimeInMinutes<=${movieOptions.maxRuntimeInMinutes}&`
        }
    
        if (movieOptions.minRuntimeInMinutes) {
            path += `runtimeInMinutes>=${movieOptions.minRuntimeInMinutes}&`
        }
    
        if (movieOptions.runtimeInMinutes) {
            path += `runtimeInMinutes=${movieOptions.runtimeInMinutes}&`
        }
    
        if (movieOptions.maxBudgetInMillions) {
            path += `budgetInMillions<=${movieOptions.maxBudgetInMillions}&`
        }
    
        if (movieOptions.minBudgetInMillions) {
            path += `budgetInMillions>=${movieOptions.minBudgetInMillions}&`
        }
    
        if (movieOptions.budgetInMillions) {
            path += `budgetInMillions=${movieOptions.budgetInMillions}&`
        }
    
        if (movieOptions.maxBoxOfficeRevenueInMillions) {
            path += `boxOfficeRevenueInMillions<=${movieOptions.maxBoxOfficeRevenueInMillions}&`
        }
    
        if (movieOptions.minBoxOfficeRevenueInMillions) {
            path += `boxOfficeRevenueInMillions>=${movieOptions.minBoxOfficeRevenueInMillions}&`
        }
    
        if (movieOptions.boxOfficeRevenueInMillions) {
            path += `boxOfficeRevenueInMillions=${movieOptions.boxOfficeRevenueInMillions}&`
        }
    
        if (movieOptions.maxAcademyAwardNominations) {
            path += `academyAwardNominations<=${movieOptions.maxAcademyAwardNominations}&`
        }
    
        if (movieOptions.minAcademyAwardNominations) {
            path += `academyAwardNominations>=${movieOptions.minAcademyAwardNominations}&`
        }
    
        if (movieOptions.academyAwardNominations) {
            path += `academyAwardNominations=${movieOptions.academyAwardNominations}&`
        }
    
        if (movieOptions.maxAcademyAwardWins) {
            path += `academyAwardWins<=${movieOptions.maxAcademyAwardWins}&`
        }
    
        if (movieOptions.minAcademyAwardWins) {
            path += `academyAwardWins>=${movieOptions.minAcademyAwardWins}&`
        }
    
        if (movieOptions.academyAwardWins) {
            path += `academyAwardWins=${movieOptions.academyAwardWins}&`
        }
    
        if (movieOptions.maxRottenTomatoesScore) {
            path += `rottenTomatoesScore<=${movieOptions.maxRottenTomatoesScore}&`
        }
    
        if (movieOptions.minRottenTomatoesScore) {
            path += `rottenTomatoesScore>=${movieOptions.minRottenTomatoesScore}&`
        }
    
        if (movieOptions.rottenTomatoesScore) {
            path += `rottenTomatoesScore=${movieOptions.rottenTomatoesScore}&`
        }
    }

    return await call(apiKey, 'GET', path.slice(0, path.length - 1))
}
