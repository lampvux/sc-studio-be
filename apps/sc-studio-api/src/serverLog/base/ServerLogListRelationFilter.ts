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
import { ServerLogWhereInput } from "./ServerLogWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ServerLogListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ServerLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ServerLogWhereInput)
  @IsOptional()
  @Field(() => ServerLogWhereInput, {
    nullable: true,
  })
  every?: ServerLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServerLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ServerLogWhereInput)
  @IsOptional()
  @Field(() => ServerLogWhereInput, {
    nullable: true,
  })
  some?: ServerLogWhereInput;

  @ApiProperty({
    required: false,
    type: () => ServerLogWhereInput,
  })
  @ValidateNested()
  @Type(() => ServerLogWhereInput)
  @IsOptional()
  @Field(() => ServerLogWhereInput, {
    nullable: true,
  })
  none?: ServerLogWhereInput;
}
export { ServerLogListRelationFilter as ServerLogListRelationFilter };