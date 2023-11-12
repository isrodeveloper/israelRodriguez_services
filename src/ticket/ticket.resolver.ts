import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateTicketsService } from 'src/modules/tickets/service/create-tickets.service';
 
import { Query } from '@nestjs/graphql';
import { Ticket } from 'src/modules/tickets/Model/ticket.entity';
import { CreateTicketDto } from 'src/modules/tickets/dto/create-ticket.dto';

@Resolver()
export class TicketResolver {
    constructor(private ticketService: CreateTicketsService){}

    @Query((returns) => [Ticket])
    ticket(){
       return this.ticketService.getTicketsAll();
    }

    @Mutation(returns => Ticket)
    createTicket(@Args('ticketInput') ticketInput: CreateTicketDto){
        return  this.ticketService.createTicket(ticketInput);
    }
    
}
