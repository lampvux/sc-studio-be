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
import { UserSpentWhereInput } from "./UserSpentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserSpentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserSpentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSpentWhereInput)
  @IsOptional()
  @Field(() => UserSpentWhereInput, {
    nullable: true,
  })
  every?: UserSpentWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSpentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSpentWhereInput)
  @IsOptional()
  @Field(() => UserSpentWhereInput, {
    nullable: true,
  })
  some?: UserSpentWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSpentWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSpentWhereInput)
  @IsOptional()
  @Field(() => UserSpentWhereInput, {
    nullable: true,
  })
  none?: UserSpentWhereInput;
}
export { UserSpentListRelationFilter as UserSpentListRelationFilter };
