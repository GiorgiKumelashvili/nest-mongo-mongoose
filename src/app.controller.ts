import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {
      first: 'initial text',

      firstname: 'Yehuda',
      lastname: 'Katz',

      people: [
        {
          firstname: 'Nils',
          lastname: 'Knappmeier',
        },
        {
          firstname: 'Yehuda',
          lastname: 'Katz',
        },
      ],
    };
  }

  @Get('test')
  @Render('test/test_view')
  testingLayout(){
    return {
      title: 'Layout Test',
      items: [
        'apple',
        'orange',
        'banana'
      ]
    }
  }

  @Get('/testing')
  getHello(): string {
    return this.appService.getHello();
  }
}
