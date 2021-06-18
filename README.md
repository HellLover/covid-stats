# covid-stats
`covid-stats` is a simple module to get information about COVID-19. You can get information about global covid stats, about the specified country and also fetch the country flag.

# Examples
```js
const { Corona } = require("@helllover/covid-stats");

// Getting global COIVD-19 stats
Corona.getGlobalStats()
.then(console.log)
.catch(console.error)

// Getting information about the specified country
Corona.getCountryStats("America")
.then(console.log)
.catch(() => {}) // Disable error messages if someone provides an invalid country name

// Fetching the specified country flag
Corona.fetchCountryFlag("America")
.then(console.log)
.catch(() => {}) // Disable error messages if someone provides an invalid country name
```

# Discord
My Discord is: HellLover#9626
