"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
//Create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of Matchreader and pass in something satisfying the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//Now we can reference matchReader.matches
// const dateOfFirstMatch = matchReader.matches[0][0]
// console.log(`Man United won ${manUnitedWins} games`)
