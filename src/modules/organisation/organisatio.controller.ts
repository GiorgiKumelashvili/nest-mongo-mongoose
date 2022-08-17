import { Controller, Get, Render } from '@nestjs/common';

@Controller('organisation')
export class OrganisationController {
  @Get()
  @Render('organisation/index')
  getOrganisation() {
    return {};
  }
}
