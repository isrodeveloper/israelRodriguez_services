import { Injectable, NotFoundException } from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { NotFoundError } from 'rxjs';
import { CreateTicketDto } from './dto';

@Injectable()
export class CreateTicketsService {
    private tickets: Ticket []=[
        {
            id:'1',
            message:"dsd"
        },
    
    ];
    
    getTicket(): Ticket[]{
        return this.tickets;
    } 

    getTickets(id: string): Ticket{
        const ticket = this.tickets.find((item) => item.id === id);
        if(!ticket){
            throw new NotFoundException("no existe")
        }
        return ticket;
    }

    creatrTicket({message} : CreateTicketDto){
        this.tickets.push({
            id:(Math.floor(Math.random() * 2000) +1).toString(),
            message
        });
    }
    updateTicket(id: string, {message} : CreateTicketDto){
        const ticket : Ticket = this.getTickets(id)
        ticket.message = message;
        return ticket;
    }

    removeTicket(id : string){
        const index = this.tickets.findIndex((ticket) =>ticket.id ===id);
        if(index >0){
            this.tickets.splice(index,1)
        }
    }

}