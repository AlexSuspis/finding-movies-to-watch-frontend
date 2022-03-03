export class Result {
    constructor(
        public name: String,
        // public url: String,
        public countries: String[],
        public description: String,
        public streamingProviders: String[]
    ) { }

    getDescription() {
        return this.description;
    }
}

export var mock_results = [
    new Result('Saving Private Ryan', ['Portugal', 'United Kingdom', 'United States'], 'Nice film', ['Amazon', 'Netflix', 'HBO']),
    new Result('Fury', ['United Kingdom', 'United States'], 'cool', ['HBO']),
    new Result('Amelie', ['France'], 'Great', ['Netflix']),
    new Result('The Pianist', ['United States'], 'cool', ['Netflix', 'Amazon Prime']),
    new Result('Die Hard', ['India', 'Portugal', 'United Kingdom', 'United States'], 'Nice film', ['Amazon', 'Netflix', 'HBO']),
    new Result('Shrek', ['United Kingdom', 'United States'], 'cool', ['HBO']),
    new Result('Suspiria', ['France'], 'Great', ['Netflix']),
    new Result('Tree of Life', ['United States'], 'cool', ['Netflix', 'Amazon Prime']),
]