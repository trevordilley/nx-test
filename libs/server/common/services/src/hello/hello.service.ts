import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  hello(name: string) {
    return `server common says hello to ${name}`
  }
}
