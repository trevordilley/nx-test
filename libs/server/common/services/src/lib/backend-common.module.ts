import { Module } from '@nestjs/common';
import {HelloService} from "../hello/hello.service";

@Module({
  controllers: [],
  providers: [HelloService],
  exports: [],
})
export class BackendCommonModule { }
