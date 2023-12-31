import { InputType, Field } from "@nestjs/graphql";
import { IsString ,IsNotEmpty, MaxLength, MinLength} from "class-validator";

@InputType()
export class CreateTicketDto {
   /* @MinLength(3, {
        message: 'El campo debe ser mayor a 3 carácteres',})
    @MaxLength(10, {
        message: 'El campo debe ser menor a 10 carácteres',})
    @IsNotEmpty({message: 'El campo es requerido'})
*/
    @Field()
    @IsString()
    //@Field({nullable:true})
    readonly tittle: string;

    @Field()
    @IsString()
    readonly description: string;

    @Field()
    @IsString()
    readonly priority: string;

    @Field()
    @IsString()
    readonly category: string;

    @Field()
    @IsString()
    readonly status: string;
}
