import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader';

//Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of Matchreader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

//Now we can reference matchReader.matches

// const dateOfFirstMatch = matchReader.matches[0][0]


// console.log(`Man United won ${manUnitedWins} games`)