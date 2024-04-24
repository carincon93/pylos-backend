import { Controller, Get, HttpCode } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello()
    }

    @Get('healthcheck')
    @HttpCode(200) // Devuelve un código de estado HTTP 200 (OK)
    healthCheck(): { ok: boolean } {
        return { ok: true }
    }
}
