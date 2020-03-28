import { Module } from '@nestjs/common';
import { C001Controller } from './c001.controller';
import { S001Service } from './s001.service';

@Module({
  controllers: [C001Controller],
  providers:[S001Service]
})
export class M001Module {}
