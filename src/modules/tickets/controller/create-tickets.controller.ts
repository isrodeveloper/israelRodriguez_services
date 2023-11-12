import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTicketsService } from '../service/create-tickets.service';
import { Ticket } from '../model/ticket.entity';
import { CreateTicketDto, PaginationQueryDto, UpdateTicketDto } from '../../../common';

@Controller('create-tickets')
export class CreateTicketsController {
    constructor(private readonly ticketService: CreateTicketsService){}
    @Get()
    getCreateTickets(@Query() pagination: PaginationQueryDto): Promise<Ticket[]>{
        return this.ticketService.getTickets(pagination);
    }

    @Get(':id')
    getTicket(@Param('id')id:number):Promise<Ticket>{
        return this.ticketService.getTicket(id);
    }

    @Post()
    createTicket(@Body() message:CreateTicketDto):Promise<Ticket>{
        console.log(message instanceof CreateTicketDto);
        return this.ticketService.creatrTicket(message)
    }

    @Patch(':id')
    updateTicket(@Param('id')id:number, @Body() ticket:UpdateTicketDto):Promise<Ticket>{
        return this.ticketService.updateTicket(id, ticket);
    }

    @Delete(':id')
    removTicket(@Param('id') id:number): Promise<void>{
        return this.ticketService.removeTicket(id);
    }

}
    
