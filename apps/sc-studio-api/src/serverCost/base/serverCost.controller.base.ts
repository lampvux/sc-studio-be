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
import { ServerCostService } from "../serverCost.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ServerCostCreateInput } from "./ServerCostCreateInput";
import { ServerCostWhereInput } from "./ServerCostWhereInput";
import { ServerCostWhereUniqueInput } from "./ServerCostWhereUniqueInput";
import { ServerCostFindManyArgs } from "./ServerCostFindManyArgs";
import { ServerCostUpdateInput } from "./ServerCostUpdateInput";
import { ServerCost } from "./ServerCost";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ServerCostControllerBase {
  constructor(
    protected readonly service: ServerCostService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServerCost })
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ServerCostCreateInput
  ): Promise<ServerCost> {
    return await this.service.create({
      data: {
        ...data,

        serverId: data.serverId
          ? {
              connect: data.serverId,
            }
          : undefined,
      },
      select: {
        cost: true,
        createdAt: true,
        endTime: true,
        id: true,

        serverId: {
          select: {
            id: true,
          },
        },

        startTime: true,
        unit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ServerCost] })
  @ApiNestedQuery(ServerCostFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ServerCost[]> {
    const args = plainToClass(ServerCostFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        cost: true,
        createdAt: true,
        endTime: true,
        id: true,

        serverId: {
          select: {
            id: true,
          },
        },

        startTime: true,
        unit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServerCost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ServerCostWhereUniqueInput
  ): Promise<ServerCost | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        cost: true,
        createdAt: true,
        endTime: true,
        id: true,

        serverId: {
          select: {
            id: true,
          },
        },

        startTime: true,
        unit: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ServerCost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ServerCostWhereUniqueInput,
    @common.Body() data: ServerCostUpdateInput
  ): Promise<ServerCost | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          serverId: data.serverId
            ? {
                connect: data.serverId,
              }
            : undefined,
        },
        select: {
          cost: true,
          createdAt: true,
          endTime: true,
          id: true,

          serverId: {
            select: {
              id: true,
            },
          },

          startTime: true,
          unit: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: ServerCost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ServerCostWhereUniqueInput
  ): Promise<ServerCost | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          cost: true,
          createdAt: true,
          endTime: true,
          id: true,

          serverId: {
            select: {
              id: true,
            },
          },

          startTime: true,
          unit: true,
          updatedAt: true,
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
}