import { Injectable } from '@nestjs/common'
import * as fs from 'fs'
import * as path from 'path'

@Injectable()
export class LecturaService {
    private readingsAnfora: any[]

    constructor() {
        const filePath = path.join(__dirname, '../..', 'data', 'anfora-readings.json')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        this.readingsAnfora = JSON.parse(fileContents)
    }

    getLecturasAnfora(): any[] {
        return this.readingsAnfora
    }
}
