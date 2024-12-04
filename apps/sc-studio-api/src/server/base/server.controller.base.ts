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
import { ServerService } from "../server.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ServerCreateInput } from "./ServerCreateInput";
import { ServerWhereInput } from "./ServerWhereInput";
import { ServerWhereUniqueInput } from "./ServerWhereUniqueInput";
import { ServerFindManyArgs } from "./ServerFindManyArgs";
import { ServerUpdateInput } from "./ServerUpdateInput";
import { Server } from "./Server";
import { ServerCostFindManyArgs } from "../../serverCost/base/ServerCostFindManyArgs";
import { ServerCost } from "../../serverCost/base/ServerCost";
import { ServerCostWhereUniqueInput } from "../../serverCost/base/ServerCostWhereUniqueInput";
import { ServerLogFindManyArgs } from "../../serverLog/base/ServerLogFindManyArgs";
import { ServerLog } from "../../serverLog/base/ServerLog";
import { ServerLogWhereUniqueInput } from "../../serverLog/base/ServerLogWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ServerControllerBase {
  constructor(
    protected readonly service: ServerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Server })
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ServerCreateInput): Promise<Server> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        id: true,
        name: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Server] })
  @ApiNestedQuery(ServerFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Server[]> {
    const args = plainToClass(ServerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        id: true,
        name: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Server })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ServerWhereUniqueInput
  ): Promise<Server | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        deployedAt: true,
        description: true,
        id: true,
        name: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Server })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() data: ServerUpdateInput
  ): Promise<Server | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          deployedAt: true,
          description: true,
          id: true,
          name: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Server })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ServerWhereUniqueInput
  ): Promise<Server | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          deployedAt: true,
          description: true,
          id: true,
          name: true,
          status: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/serverCosts")
  @ApiNestedQuery(ServerCostFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ServerCost",
    action: "read",
    possession: "any",
  })
  async findManyServerCosts(
    @common.Req() request: Request,
    @common.Param() params: ServerWhereUniqueInput
  ): Promise<ServerCost[]> {
    const query = plainToClass(ServerCostFindManyArgs, request.query);
    const results = await this.service.findServerCosts(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/serverCosts")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async connectServerCosts(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerCostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverCosts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/serverCosts")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async updateServerCosts(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerCostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverCosts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/serverCosts")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async disconnectServerCosts(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerCostWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverCosts: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/serverLogs")
  @ApiNestedQuery(ServerLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ServerLog",
    action: "read",
    possession: "any",
  })
  async findManyServerLogs(
    @common.Req() request: Request,
    @common.Param() params: ServerWhereUniqueInput
  ): Promise<ServerLog[]> {
    const query = plainToClass(ServerLogFindManyArgs, request.query);
    const results = await this.service.findServerLogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        log: true,

        serverId: {
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

  @common.Post("/:id/serverLogs")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async connectServerLogs(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverLogs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/serverLogs")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async updateServerLogs(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverLogs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/serverLogs")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async disconnectServerLogs(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: ServerLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      serverLogs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/userId")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findManyUserId(
    @common.Req() request: Request,
    @common.Param() params: ServerWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUserId(params.id, {
      ...query,
      select: {
        billingInformation: true,
        code_2Fa: true,
        createdAt: true,
        email: true,
        enabled_2Fa: true,
        expiredAt_2Fa: true,
        firstName: true,
        googleUid: true,
        id: true,
        lastName: true,
        loggedInAt: true,
        publicWalletAddress: true,
        roles: true,
        status: true,
        tokenExpirationAt: true,
        type_2Fa: true,
        updatedAt: true,
        username: true,
        userToken: true,
        verifiedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async connectUserId(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async updateUserId(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userId")
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "update",
    possession: "any",
  })
  async disconnectUserId(
    @common.Param() params: ServerWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
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
