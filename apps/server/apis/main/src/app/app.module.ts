import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BackendCommonModule, HelloService} from "@foreman/server-common-services";

@Module({
  imports: [BackendCommonModule],
  controllers: [AppController],
  providers: [AppService, HelloService],
})
export class AppModule {}
