/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServerCostWhereInput } from "./ServerCostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ServerCostOrderByInput } from "./ServerCostOrderByInput";

@ArgsType()
class ServerCostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServerCostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ServerCostWhereInput, { nullable: true })
  @Type(() => ServerCostWhereInput)
  where?: ServerCostWhereInput;

  @ApiProperty({
    required: false,
    type: [ServerCostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ServerCostOrderByInput], { nullable: true })
  @Type(() => ServerCostOrderByInput)
  orderBy?: Array<ServerCostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ServerCostFindManyArgs as ServerCostFindManyArgs };