import { Injectable } from '@nestjs/common';
import {HelloService} from "@foreman/server-common-services";
import {common} from "@foreman/common";

@Injectable()
export class AppService {
  constructor(private readonly helloService: HelloService) {
  }
  getData(): { message: string } {
    console.log(common())
    console.log(this.helloService.hello("Internal API"))
    return { message: 'Welcome to internal!' };
  }
}
