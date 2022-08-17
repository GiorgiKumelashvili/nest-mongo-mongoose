import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as hbs from 'hbs';
import * as hbsUtilsFunc from 'hbs-utils';
import * as handlebarsLayouts from 'handlebars-layouts'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const hbsUtils = hbsUtilsFunc(hbs);

  app.useStaticAssets(path.join(__dirname, './assets'), { prefix: '/src/assets' });
  app.setBaseViewsDir(path.join(__dirname, './views'));



  app.setViewEngine('hbs');

  const partialsDir = path.join(__dirname, './views/partials');
  hbs.registerPartials(partialsDir);
  hbsUtils.registerWatchedPartials(partialsDir);
  hbs.handlebars.registerHelper(handlebarsLayouts(hbs.handlebars));
  hbs.handlebars.registerHelper('helper_name', () => 'helper value');
  hbs.handlebars.registerHelper('loud', (aString) => aString.toUpperCase());
  hbs.handlebars.registerHelper('print_person', function () {
    return this.firstname + ' ' + this.lastname;
  });

  await app.listen(3000);
}

bootstrap();
