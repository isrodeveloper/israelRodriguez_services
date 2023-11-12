import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import { Repository} from 'typeorm';

import { Ticket } from '../Model/ticket.entity';
import { NotFoundError } from 'rxjs';
import { CreateTicketDto, PaginationQueryDto } from '../../../common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateTicketsService {
    constructor(@InjectRepository(Ticket) private readonly ticketRepository: Repository<Ticket>){}
 
    createTicket({message} : CreateTicketDto){
        const ticket = this.ticketRepository.create({message})
        return this.ticketRepository.save(ticket)
     }

    async getTicketAll(): Promise<Ticket[]>{
        return await this.ticketRepository.find();
    } 

    async getTicketId(id:number): Promise<Ticket>{
        const ticket:Ticket = await this.ticketRepository.findOneBy({id: id});

        if(!ticket){
            throw new NotFoundException("no existe")
        }
        return ticket;
    }
    /*async updateTicket(id: number, {message} : CreateTicketDto){
        const ticket : Ticket = await this.ticketRepository.preload({
            id,message
        })
        if(!ticket){
            throw new NotFoundException("No encontrado")
        }
    
        return ticket;
    }*/
}

