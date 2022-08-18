import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganisationModule } from './modules/organisation/organisation.module';
import { TestControler } from './temp/test.controller';
import { Car, CarSchema, User, UserSchema } from './temp/user.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/TestingMongoose'),
    OrganisationModule,
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Car.name, schema: CarSchema },
    ]),
  ],
  controllers: [AppController, TestControler],
  providers: [AppService],
})
export class AppModule {}
