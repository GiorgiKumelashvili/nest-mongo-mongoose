import { Document, SchemaTypes, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { fieldJoin, fields } from 'src/common/helpers';

// import { v4 as uuid } from 'uuid';
// @Prop({ type: String, default: uuid })

@Schema({ timestamps: true })
export class Car {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop()
  color: string;
}

@Schema({ timestamps: true, collection: 'users' })
export class User {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Car.name })
  @Prop({ type: Car })
  car: Car;

  public static carColorField(): string {
    return fieldJoin(userFields.car, carFiels.color);
  }
}

export type CarDocument = Car & Document;
export const CarSchema = SchemaFactory.createForClass(Car);
export const carFiels = fields<Car>();

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
export const userFields = fields<User>();
