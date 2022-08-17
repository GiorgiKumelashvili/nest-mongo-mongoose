import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organisation, OrganisationDocument } from './organisation.model';

@Injectable()
export class OrganisationRepository {
  constructor(
    @InjectModel(Organisation.name)
    private readonly organisationModel: Model<OrganisationDocument>,
  ) {}

  createOrganisation(organisation: Organisation) {
    const tempOrganisation = new this.organisationModel(organisation);

    tempOrganisation.save((err, doc) => {
      console.log('========');
      console.log(err);
      console.log(doc);
    });
  }
}
