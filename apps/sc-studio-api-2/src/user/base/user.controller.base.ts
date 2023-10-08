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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { UserRewardFindManyArgs } from "../../userReward/base/UserRewardFindManyArgs";
import { UserReward } from "../../userReward/base/UserReward";
import { UserRewardWhereUniqueInput } from "../../userReward/base/UserRewardWhereUniqueInput";
import { SmartContractFindManyArgs } from "../../smartContract/base/SmartContractFindManyArgs";
import { SmartContract } from "../../smartContract/base/SmartContract";
import { SmartContractWhereUniqueInput } from "../../smartContract/base/SmartContractWhereUniqueInput";
import { UserSpentFindManyArgs } from "../../userSpent/base/UserSpentFindManyArgs";
import { UserSpent } from "../../userSpent/base/UserSpent";
import { UserSpentWhereUniqueInput } from "../../userSpent/base/UserSpentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @common.Get("/:id/rewards")
  @ApiNestedQuery(UserRewardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserReward",
    action: "read",
    possession: "any",
  })
  async findManyRewards(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserReward[]> {
    const query = plainToClass(UserRewardFindManyArgs, request.query);
    const results = await this.service.findRewards(params.id, {
      ...query,
      select: {
        appliedAt: true,
        createdAt: true,
        expiredAt: true,
        id: true,
        log: true,
        point: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rewards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectRewards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rewards: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rewards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateRewards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rewards: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rewards")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectRewards(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rewards: {
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
  @common.Get("/:id/smartContracts")
  @ApiNestedQuery(SmartContractFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SmartContract",
    action: "read",
    possession: "any",
  })
  async findManySmartContracts(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<SmartContract[]> {
    const query = plainToClass(SmartContractFindManyArgs, request.query);
    const results = await this.service.findSmartContracts(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/smartContracts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectSmartContracts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SmartContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContracts: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/smartContracts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateSmartContracts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SmartContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContracts: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/smartContracts")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectSmartContracts(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: SmartContractWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartContracts: {
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
  @common.Get("/:id/userSpents")
  @ApiNestedQuery(UserSpentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserSpent",
    action: "read",
    possession: "any",
  })
  async findManyUserSpents(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserSpent[]> {
    const query = plainToClass(UserSpentFindManyArgs, request.query);
    const results = await this.service.findUserSpents(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userSpents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectUserSpents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSpentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userSpents: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userSpents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUserSpents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSpentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userSpents: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userSpents")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectUserSpents(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSpentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userSpents: {
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
