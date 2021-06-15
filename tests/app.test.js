const { Corona } = require("../lib/cjs/index");

Corona.fetchCountryFlag("America")
.then(console.log)
.catch(() => {})

Corona.getCountryStats("America")
.then(console.log)
.catch(() => {})

Corona.getGlobalStats()
.then(console.log)
.catch(() => {})