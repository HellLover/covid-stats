import axios from 'axios';
import { CoronaGlobalStats, CoronaCountryStats } from './Interfaces'

const BaseURL = 'https://disease.sh/v3/covid-19';

export class CoronaStats {

    static async getGlobalStats(): Promise<CoronaGlobalStats | CoronaGlobalStats[]> {
        const res = await axios.get(BaseURL + "/all");
        return res.data;
    }

    static async getCountryStats(country: string): Promise<CoronaCountryStats | CoronaCountryStats[]> {
        if(!country) throw new TypeError("[CoronaStatsError] Missing the country name!")
        if(typeof country !== "string") {
            throw new TypeError(`[CoronaStatsError] Country name must be of type string, but received ${typeof country}`)
        }

        const res = await axios.get(`${BaseURL}/countries/${country}`);
        return res?.data;
    }

    static async fetchCountryFlag(country: string) {
        if(!country) throw new TypeError("[CoronaStatsError] Missing the country name!")
        if(typeof country !== "string") {
            throw new TypeError(`[CoronaStatsError] Country name must be of type string, but received ${typeof country}`)
        }

        const res = await axios.get(`${BaseURL}/countries/${country}`);
        return res?.data?.countryInfo?.flag;
    }

}