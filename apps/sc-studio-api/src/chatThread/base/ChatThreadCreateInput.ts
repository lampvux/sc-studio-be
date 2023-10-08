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
import { ChatMessageWhereUniqueInput } from "../../chatMessage/base/ChatMessageWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { RateWhereUniqueInput } from "../../rate/base/RateWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ChatThreadCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChatMessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChatMessageWhereUniqueInput)
  @IsOptional()
  @Field(() => ChatMessageWhereUniqueInput, {
    nullable: true,
  })
  chatMessages?: ChatMessageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  chatType?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  closedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  expertId?: string | null;

  @ApiProperty({
    required: false,
    type: () => RateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RateWhereUniqueInput)
  @IsOptional()
  @Field(() => RateWhereUniqueInput, {
    nullable: true,
  })
  rates?: RateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  userId?: UserWhereUniqueInput | null;
}

export { ChatThreadCreateInput as ChatThreadCreateInput };