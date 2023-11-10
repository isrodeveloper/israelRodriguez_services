import { IsString } from "class-validator";

export class CreateTicketDto {
    @IsString()
    readonly message: string;
}
