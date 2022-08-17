import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Organisation {
  @Prop()
  name: string;

  @Prop()
  evaluation: number;

  @Prop()
  employees: string[];
}

export type OrganisationDocument = Organisation & Document;
export const OrganisationSchema = SchemaFactory.createForClass(Organisation);
