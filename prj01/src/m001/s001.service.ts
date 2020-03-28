import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class S001Service {
  getHello(name = 'JHONSON'): string {
    return `Hello ${name}! `;
  }


  fakerData() {
    let ret = [];
    for (let i: number = 0; i < 20; i++) {
      ret.push({ name: faker.name.findName(),
                 email: faker.internet.email(),
                 creditCard: faker.helpers.createCard() })
    }
    return ret;
    //  var randomName = faker.name.findName(); // Rowan Nikolaus
    //  var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    //  var randomCard = faker.helpers.createCard(); // random contact card containing many properties

  }
}
