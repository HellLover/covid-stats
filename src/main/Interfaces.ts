export interface CountryInfo {
    iso2: string
    iso3: string
    flag: string
}

export interface CoronaGlobalStats {
    cases: number
    todayCases: number
    deaths: number
    todayDeaths: number
    active: number
    critical: number
    tests: number
    population: number
    affectedCountries: number
}

export interface CoronaCountryStats {
    country: string
    continent: string
    cases: number
    todayCases: number
    deaths: number
    todayDeaths: number
    active: number
    critical: number
    tests: number
    population: number
    affectedCountries: number
    countryInfo: CountryInfo[]
}