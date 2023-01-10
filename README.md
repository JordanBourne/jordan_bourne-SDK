# Installing

Using NPM

```
npm install jordan_bourne-sdk
```

Using Yarn

```
yarn add jordan_bourne-sdk
```

# Methods

`getMovies(apiKey: String, movieOptions?: MovieOptions)`

Returns list of Lord of the Rings movies accoring to passed in options

**Parameters**

 - `apiKey` - Your API key from https://the-one-api.dev/
 - `movieOptions` - `Object` - Optional parameter for customizing your movie search
    - `limit` - `Number` - Number of results to limit search to
    - `page` - `Number` - Page number
    - `offset` - `Number` - Offset number
    - `sort` - `Object` - Object detailing the field and direction to sort
        - `field` - `String` - One of the following fields
            - `name` | `runtimeInMinutes` | `budgetInMillions` | `boxOfficeRevenueInMillions` | `academyAwardNominations` | `academyAwardWins` | `rottenTomatoesScore`
        - `direction` - `String` - Sort directions
            - `asc` | `desc`
    - `includeNames` - `String[]` - List of movie names to include in results
    - `excludeNames` - `String[]` - List of movie names to exclude from results
    - `maxRuntimeInMinutes` - `Number` - Maximum runtime
    - `minRuntimeInMinutes` - `Number` - Minimum runtime
    - `runtimeInMinutes` - `Number` - Exact runtime
    - `maxBudgetInMillions` - `Number` - Maximum budget in millions
    - `minBudgetInMillions` - `Number` - Minimum budget in millions
    - `budgetInMillions` - `Number` - Exact budget in millions
    - `maxBoxOfficeRevenueInMillions` - `Number` - Maximum box office revenue in millions
    - `minBoxOfficeRevenueInMillions` - `Number` - Minimum box office revenue in millions
    - `boxOfficeRevenueInMillions` - `Number` - Exact box office revenue in millions
    - `maxAcademyAwardNominations` - `Number` - Maximum Academy Award nominations
    - `minAcademyAwardNominations` - `Number` - Minimum Academy Award nominations
    - `academyAwardNominations` - `Number` - Exact Academy Award nominations
    - `maxAcademyAwardWins` - `Number` - Maximum Academy Award wins
    - `minAcademyAwardWins` - `Number` - Minimum Academy Award wins
    - `academyAwardWins` - `Number` - Exact Academy Award wins
    - `maxRottenTomatoesScore` - `Number` - Maximum Rotten Tomatoes score
    - `minRottenTomatoesScore` - `Number` - Minimum Rotten Tomatoes score
    - `rottenTomatoesScore` - `Number` - Exact Rotten Tomatoes score

**Response**

 - `docs` - Array of movies
    - `_id` - ID
    - `academyAwardNominations` - `Number` - Academy Award Nominations
    - `academyAwardWins` - `Number` - Academy Award Wins
    - `boxOfficeRevenueInMillions` - `Number` - Box Office Revenue in Millions
    - `budgetInMillions` - `Number` - Budget In Millions
    - `name` - `Number` - Name
    - `rottenTomatoesScore` - `Number` - Rotten Tomatoes Score
    - `runtimeInMinutes` - `Number` - Runtime In Minutes
 - `limit` - `Number` - Number of movies response is limited to
 - `offset` - `Number` - Offset of start of list of movies
 - `page` - `Number` - Page number
 - `pages` - `Number` - Total number of pages
 - `total` - `Number` - Number of movies in response

# Example

```
const lotrSDK = require('jordan_bourne-sdk')

lotrSDK.getMovies(process.env.API_KEY, {
    maxBudgetInMillions: 200,
    minRuntimeInMinutes: 160,
    maxRuntimeInMinutes: 190
}).then(movies => {
    console.log(movies)
})
```

This will return the following response:

```
{
  docs: [
    {
      _id: '5cd95395de30eff6ebccde58',
      name: 'The Unexpected Journey',
      runtimeInMinutes: 169,
      budgetInMillions: 200,
      boxOfficeRevenueInMillions: 1021,
      academyAwardNominations: 3,
      academyAwardWins: 1,
      rottenTomatoesScore: 64
    },
    {
      _id: '5cd95395de30eff6ebccde5b',
      name: 'The Two Towers',
      runtimeInMinutes: 179,
      budgetInMillions: 94,
      boxOfficeRevenueInMillions: 926,
      academyAwardNominations: 6,
      academyAwardWins: 2,
      rottenTomatoesScore: 96
    },
    {
      _id: '5cd95395de30eff6ebccde5c',
      name: 'The Fellowship of the Ring',
      runtimeInMinutes: 178,
      budgetInMillions: 93,
      boxOfficeRevenueInMillions: 871.5,
      academyAwardNominations: 13,
      academyAwardWins: 4,
      rottenTomatoesScore: 91
    }
  ],
  total: 3,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1
}
```

# Settings up development of this repo

In order to set up the project:

```
npm install

npm run build
```

Get an API key from https://the-one-api.dev/ and then

```
cp .env.example .env
```

then replace `fill-me-in` with the new api key and `source .env` before running the integration test.

To run tests:

```
npm test # Runs all tests
npm run test-unit # Runs just unit tests
npm run test-integration # Runs just integration tests
```

To publish:

First update the package number in the `package.json` file

```
npm run build
npm publish
```