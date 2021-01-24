import fs from 'fs';
import { MatchResult } from './MatchResult'

type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader<Type> {
    // Convention is to call this T as generic name for TypeOfData
    data: Type[] = [];

    constructor(public filename: string){}

    abstract mapRow(row: string[]): Type;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map( this.mapRow)
    }
}