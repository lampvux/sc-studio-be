/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatThreadWhereInput } from "./ChatThreadWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChatThreadListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChatThreadWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadWhereInput)
  @IsOptional()
  @Field(() => ChatThreadWhereInput, {
    nullable: true,
  })
  every?: ChatThreadWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChatThreadWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadWhereInput)
  @IsOptional()
  @Field(() => ChatThreadWhereInput, {
    nullable: true,
  })
  some?: ChatThreadWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChatThreadWhereInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadWhereInput)
  @IsOptional()
  @Field(() => ChatThreadWhereInput, {
    nullable: true,
  })
  none?: ChatThreadWhereInput;
}
export { ChatThreadListRelationFilter as ChatThreadListRelationFilter };