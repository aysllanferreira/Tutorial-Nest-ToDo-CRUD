import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Default')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World endpoint' })
  @ApiResponse({ status: 200, description: 'Hello World' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  getHello(): string {
    return this.appService.getHello();
  }
}
