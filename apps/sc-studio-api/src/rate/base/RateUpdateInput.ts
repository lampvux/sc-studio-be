/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field, Float } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatThreadWhereUniqueInput } from "../../chatThread/base/ChatThreadWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { Decimal } from "decimal.js";

@InputType()
class RateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ChatThreadWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadWhereUniqueInput)
  @IsOptional()
  @Field(() => ChatThreadWhereUniqueInput, {
    nullable: true,
  })
  chatThreads?: ChatThreadWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  log?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Float, {
    nullable: true,
  })
  rating?: Decimal;
}

export { RateUpdateInput as RateUpdateInput };
