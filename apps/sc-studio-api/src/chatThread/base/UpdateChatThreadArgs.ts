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
import { ChatThreadWhereUniqueInput } from "./ChatThreadWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChatThreadUpdateInput } from "./ChatThreadUpdateInput";

@ArgsType()
class UpdateChatThreadArgs {
  @ApiProperty({
    required: true,
    type: () => ChatThreadWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadWhereUniqueInput)
  @Field(() => ChatThreadWhereUniqueInput, { nullable: false })
  where!: ChatThreadWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChatThreadUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChatThreadUpdateInput)
  @Field(() => ChatThreadUpdateInput, { nullable: false })
  data!: ChatThreadUpdateInput;
}

export { UpdateChatThreadArgs as UpdateChatThreadArgs };
