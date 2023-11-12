import { Module } from '@nestjs/common';
import { CreateTicketsController } from '../Controllers/create-tickets.controller';
import { CreateTicketsService } from '../service/create-tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './ticket.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Ticket])],
    controllers:[CreateTicketsController],
    providers: [CreateTicketsService],
})
export class TicketsModule {}
