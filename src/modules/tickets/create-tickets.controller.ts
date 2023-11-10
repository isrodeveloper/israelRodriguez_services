import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTicketsService } from './create-tickets.service';
import { Ticket } from './ticket.entity';
import { CreateTicketDto, UpdateTicketDto } from './dto';

@Controller('create-tickets')
export class CreateTicketsController {
    constructor(private readonly ticketService: CreateTicketsService){}
    @Get()
    getCreateTickets(@Query() filterQuery): Ticket[]{
        const {searchTerm, orderBy}= filterQuery;
        return this.ticketService.getTicket();
    }

    @Get(':id')
    getCreateTicketsId(@Param('id')id:string):Ticket{
        return this.ticketService.getTickets(id);
    }

    @Post()
    createTicket(@Body() message:CreateTicketDto){
        console.log(message instanceof CreateTicketDto);
        return this.ticketService.creatrTicket(message)
    }

    @Patch(':id')
    updateTicket(@Param('id')id:string, @Body() ticket:UpdateTicketDto):Ticket{
        return this.ticketService.updateTicket(id, ticket);
    }

    @Delete(':id')
    removTicket(@Param('id') id:string){
        return this.ticketService.removeTicket(id);
    }

}
    
