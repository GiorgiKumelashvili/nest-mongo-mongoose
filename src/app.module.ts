import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationModule } from './modules/organisation/organisation.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/TestingMongoose'),
    OrganisationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
