import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';
import * as hbs from 'hbs';
import * as hbsUtilsFunc from 'hbs-utils';
import * as handlebarsLayouts from 'handlebars-layouts';
import { ServeStaticOptions } from '@nestjs/platform-express/interfaces/serve-static-options.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const hbsUtils = hbsUtilsFunc(hbs);
  const opts: ServeStaticOptions = {
    prefix: '/src/assets',
  };

  app.useStaticAssets(path.join(__dirname, './assets'), opts);
  app.setBaseViewsDir(path.join(__dirname, './views'));
  app.setViewEngine('hbs');

  const partialsIncludes: Array<string> = [
    './views/organisation',
    './views/partials',
  ];

  partialsIncludes.forEach((inc) => {
    const orgPartials = path.join(__dirname, inc);
    hbs.registerPartials(orgPartials);
    hbsUtils.registerWatchedPartials(orgPartials);
  });

  hbs.handlebars.registerHelper(handlebarsLayouts(hbs.handlebars));
  hbs.handlebars.registerHelper('helper_name', () => 'helper value');
  hbs.handlebars.registerHelper('loud', (aString) => aString.toUpperCase());
  hbs.handlebars.registerHelper('print_person', function () {
    return this.firstname + ' ' + this.lastname;
  });

  await app.listen(3000);
}

bootstrap();
