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
import { ValidateNested, IsOptional, IsEnum, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { EnumChatThreadChatType } from "./EnumChatThreadChatType";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { RateWhereUniqueInput } from "../../rate/base/RateWhereUniqueInput";

@InputType()
class ChatThreadUpdateInput {
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
    enum: EnumChatThreadChatType,
  })
  @IsEnum(EnumChatThreadChatType)
  @IsOptional()
  @Field(() => EnumChatThreadChatType, {
    nullable: true,
  })
  chatType?: "expert" | "AI";

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
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  expertId?: UserWhereUniqueInput | null;

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
  userId?: UserWhereUniqueInput;
}

export { ChatThreadUpdateInput as ChatThreadUpdateInput };
