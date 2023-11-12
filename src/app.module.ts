import { Module } from '@nestjs/common';

import { TicketsModule } from './modules/tickets/model/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal:true}),
      DatabaseModule,
      TicketsModule
    ],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService){
    AppModule.port = +this.configService.get("PORT");
  }
}
