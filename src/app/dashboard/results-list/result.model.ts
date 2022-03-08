export class Result {
    constructor(
        public name: String,
        // public url: String,
        public countries: String[],
        public description: String,
        public streamingProviders: String[],
        public country_flag_urls: String[]
    ) { }

    getDescription() {
        return this.description;
    }
}

export var mock_results = [
    new Result('Saving Private Ryan', ['Portugal', 'United Kingdom'], 'Nice film', ['Amazon', 'Netflix', 'HBO'], ['http://www.geognos.com/api/en/countries/flag/PT.png', 'http://www.geognos.com/api/en/countries/flag/GB.png']),
    new Result('Fury', ['United Kingdom'], 'cool', ['HBO'], ['http://www.geognos.com/api/en/countries/flag/GB.png']),
    new Result('Amelie', ['France'], 'Great', ['Netflix'], ['http://www.geognos.com/api/en/countries/flag/FR.png']),
    new Result('The Pianist', ['United States'], 'cool', ['Netflix', 'Amazon Prime'], ['http://www.geognos.com/api/en/countries/flag/US.png']),
    new Result('Die Hard', ['India', 'Portugal'], 'Nice film', ['Amazon', 'Netflix', 'HBO'], ['http://www.geognos.com/api/en/countries/flag/IN.png', 'http://www.geognos.com/api/en/countries/flag/PT.png']),
    // new Result('Shrek', ['United Kingdom', 'France'], 'cool', ['HBO']),
    // new Result('Suspiria', ['France'], 'Great', ['Netflix']),
    // new Result('Tree of Life', ['United States'], 'cool', ['Netflix', 'Amazon Prime']),
]