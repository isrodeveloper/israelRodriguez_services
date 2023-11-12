import { Module } from '@nestjs/common';
import { CreateTicketsController } from './controller/create-tickets.controller';
import { CreateTicketsService } from './service/create-tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './model/ticket.entity';
import { TicketResolver } from 'src/ticket/ticket.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers:[CreateTicketsController],
    providers: [CreateTicketsService, TicketResolver],
})
export class TicketsModule {}
