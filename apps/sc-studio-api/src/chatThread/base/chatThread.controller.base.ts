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
import { ChatThreadService } from "../chatThread.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChatThreadCreateInput } from "./ChatThreadCreateInput";
import { ChatThreadWhereInput } from "./ChatThreadWhereInput";
import { ChatThreadWhereUniqueInput } from "./ChatThreadWhereUniqueInput";
import { ChatThreadFindManyArgs } from "./ChatThreadFindManyArgs";
import { ChatThreadUpdateInput } from "./ChatThreadUpdateInput";
import { ChatThread } from "./ChatThread";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChatThreadControllerBase {
  constructor(
    protected readonly service: ChatThreadService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChatThread })
  @nestAccessControl.UseRoles({
    resource: "ChatThread",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: ChatThreadCreateInput
  ): Promise<ChatThread> {
    return await this.service.create({
      data: {
        ...data,

        chatMessages: data.chatMessages
          ? {
              connect: data.chatMessages,
            }
          : undefined,

        expertId: data.expertId
          ? {
              connect: data.expertId,
            }
          : undefined,

        rates: data.rates
          ? {
              connect: data.rates,
            }
          : undefined,

        userId: {
          connect: data.userId,
        },
      },
      select: {
        chatMessages: {
          select: {
            id: true,
          },
        },

        chatType: true,
        closedAt: true,
        createdAt: true,

        expertId: {
          select: {
            id: true,
          },
        },

        id: true,

        rates: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ChatThread] })
  @ApiNestedQuery(ChatThreadFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChatThread",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<ChatThread[]> {
    const args = plainToClass(ChatThreadFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        chatMessages: {
          select: {
            id: true,
          },
        },

        chatType: true,
        closedAt: true,
        createdAt: true,

        expertId: {
          select: {
            id: true,
          },
        },

        id: true,

        rates: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ChatThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatThread",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ChatThreadWhereUniqueInput
  ): Promise<ChatThread | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        chatMessages: {
          select: {
            id: true,
          },
        },

        chatType: true,
        closedAt: true,
        createdAt: true,

        expertId: {
          select: {
            id: true,
          },
        },

        id: true,

        rates: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userId: {
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
  @swagger.ApiOkResponse({ type: ChatThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatThread",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ChatThreadWhereUniqueInput,
    @common.Body() data: ChatThreadUpdateInput
  ): Promise<ChatThread | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          chatMessages: data.chatMessages
            ? {
                connect: data.chatMessages,
              }
            : undefined,

          expertId: data.expertId
            ? {
                connect: data.expertId,
              }
            : undefined,

          rates: data.rates
            ? {
                connect: data.rates,
              }
            : undefined,

          userId: {
            connect: data.userId,
          },
        },
        select: {
          chatMessages: {
            select: {
              id: true,
            },
          },

          chatType: true,
          closedAt: true,
          createdAt: true,

          expertId: {
            select: {
              id: true,
            },
          },

          id: true,

          rates: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          userId: {
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
  @swagger.ApiOkResponse({ type: ChatThread })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChatThread",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ChatThreadWhereUniqueInput
  ): Promise<ChatThread | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          chatMessages: {
            select: {
              id: true,
            },
          },

          chatType: true,
          closedAt: true,
          createdAt: true,

          expertId: {
            select: {
              id: true,
            },
          },

          id: true,

          rates: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          userId: {
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
}
