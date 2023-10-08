/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ServerLogWhereUniqueInput } from "../../serverLog/base/ServerLogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ServerLogUpdateManyWithoutServersInput {
  @Field(() => [ServerLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerLogWhereUniqueInput],
  })
  connect?: Array<ServerLogWhereUniqueInput>;

  @Field(() => [ServerLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerLogWhereUniqueInput],
  })
  disconnect?: Array<ServerLogWhereUniqueInput>;

  @Field(() => [ServerLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ServerLogWhereUniqueInput],
  })
  set?: Array<ServerLogWhereUniqueInput>;
}

export { ServerLogUpdateManyWithoutServersInput as ServerLogUpdateManyWithoutServersInput };
