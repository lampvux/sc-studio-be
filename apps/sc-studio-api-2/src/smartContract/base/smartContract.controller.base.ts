/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SmartContractService } from "../smartContract.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SmartContractCreateInput } from "./SmartContractCreateInput";
import { SmartContractWhereInput } from "./SmartContractWhereInput";
import { SmartContractWhereUniqueInput } from "./SmartContractWhereUniqueInput";
import { SmartContractFindManyArgs } from "./SmartContractFindManyArgs";
import { SmartContractUpdateInput } from "./SmartContractUpdateInput";
import { SmartContract } from "./SmartContract";
import { SmartContractLogFindManyArgs } from "../../smartContractLog/base/SmartContractLogFindManyArgs";
import { SmartContractLog } from "../../smartContractLog/base/SmartContractLog";
import { SmartContractLogWhereUniqueInput } from "../../smartContractLog/base/SmartContractLogWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SmartContractControllerBase {
  constructor(
    protected readonly service: SmartContractService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SmartContract })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: SmartContractCreateInput
  ): Promise<SmartContract> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        functionalSpec: true,
        id: true,
        name: true,
        requirements: true,
        sourceCodeUrl: true,
        status: true,
        testCase: true,
        testScriptUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SmartContract] })
  @ApiNestedQuery(SmartContractFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<SmartContract[]> {
    const args = plainToClass(SmartContractFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        functionalSpec: true,
        id: true,
        name: true,
        requirements: true,
        sourceCodeUrl: true,
        status: true,
        testCase: true,
        testScriptUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SmartContractWhereUniqueInput
  ): Promise<SmartContract | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        functionalSpec: true,
        id: true,
        name: true,
        requirements: true,
        sourceCodeUrl: true,
        status: true,
        testCase: true,
        testScriptUrl: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SmartContractWhereUniqueInput,
    @common.Body() data: SmartContractUpdateInput
  ): Promise<SmartContract | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          deployedAt: true,
          description: true,
          functionalSpec: true,
          id: true,
          name: true,
          requirements: true,
          sourceCodeUrl: true,
          status: true,
          testCase: true,
          testScriptUrl: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SmartContract })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SmartContractWhereUniqueInput
  ): Promise<SmartContract | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          deployedAt: true,
          description: true,
          functionalSpec: true,
          id: true,
          name: true,
          requirements: true,
          sourceCodeUrl: true,
          status: true,
          testCase: true,
          testScriptUrl: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/smartContractLogs")
  @ApiNestedQuery(SmartContractLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartContractLog",
    action: "read",
    possession: "any",
  })
  async findManySmartContractLogs(
    @common.Req() request: Request,
    @common.Param() params: SmartContractWhereUniqueInput
  ): Promise<SmartContractLog[]> {
    const query = plainToClass(SmartContractLogFindManyArgs, request.query);
    const results = await this.service.findSmartContractLogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        log: true,

        smartContract: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/smartContractLogs")
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "update",
    possession: "any",
  })
  async connectSmartContractLogs(
    @common.Param() params: SmartContractWhereUniqueInput,
    @common.Body() body: SmartContractLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContractLogs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/smartContractLogs")
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "update",
    possession: "any",
  })
  async updateSmartContractLogs(
    @common.Param() params: SmartContractWhereUniqueInput,
    @common.Body() body: SmartContractLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContractLogs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/smartContractLogs")
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "update",
    possession: "any",
  })
  async disconnectSmartContractLogs(
    @common.Param() params: SmartContractWhereUniqueInput,
    @common.Body() body: SmartContractLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContractLogs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
