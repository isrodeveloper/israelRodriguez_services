import { Module } from '@nestjs/common';
import { CreateTicketsController } from './create-tickets.controller';
import { CreateTicketsService } from './create-tickets.service';

@Module({
    controllers:[CreateTicketsController],
    providers: [CreateTicketsService]
})
export class TicketsModule {}
