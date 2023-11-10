import { IsString } from "class-validator";

export class UpdateTicketDto {
    @IsString()
    readonly message: string;
}
