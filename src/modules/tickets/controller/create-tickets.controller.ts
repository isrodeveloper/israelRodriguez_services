import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTicketsService } from '../service/create-tickets.service';
import { Ticket } from '../model/ticket.entity';
import { CreateTicketDto, PaginationQueryDto, UpdateTicketDto } from '../../../common';

@Controller('create-tickets')
export class CreateTicketsController {
    constructor(private readonly ticketService: CreateTicketsService){}

    @Post()
    createTicket(@Body() message:CreateTicketDto):Promise<Ticket>{
        console.log(message instanceof CreateTicketDto);
        return this.ticketService.createTicket(message)
    }

    @Get()
    getTicketAll(): Promise<Ticket[]>{  
        return this.ticketService.getTicketAll();
    }

    @Get(':id')
    getTicketId(@Param('id')id:number):Promise<Ticket>{
        return this.ticketService.getTicketId(id);
    }
    /*
    @Patch(':id')
    updateTicket(@Param('id')id:number, @Body() ticket:UpdateTicketDto):Promise<Ticket>{
        return this.ticketService.updateTicket(id, ticket);
    @Get()
    getTicketAll(): Promise<Ticket[]>{  
        return this.ticketService.getTicketAll();
    }*/
}
    
