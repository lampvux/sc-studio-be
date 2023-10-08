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
import { SmartContractLogWhereUniqueInput } from "./SmartContractLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SmartContractLogUpdateInput } from "./SmartContractLogUpdateInput";

@ArgsType()
class UpdateSmartContractLogArgs {
  @ApiProperty({
    required: true,
    type: () => SmartContractLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SmartContractLogWhereUniqueInput)
  @Field(() => SmartContractLogWhereUniqueInput, { nullable: false })
  where!: SmartContractLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SmartContractLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => SmartContractLogUpdateInput)
  @Field(() => SmartContractLogUpdateInput, { nullable: false })
  data!: SmartContractLogUpdateInput;
}

export { UpdateSmartContractLogArgs as UpdateSmartContractLogArgs };
