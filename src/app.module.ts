import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {join} from 'path';

import { TicketsModule } from './modules/tickets/tickets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'),
    }),
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
