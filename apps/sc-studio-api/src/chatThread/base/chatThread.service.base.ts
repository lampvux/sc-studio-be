/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ChatThread, ChatMessage, Rate, User } from "@prisma/client";

export class ChatThreadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ChatThreadCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadCountArgs>
  ): Promise<number> {
    return this.prisma.chatThread.count(args);
  }

  async findMany<T extends Prisma.ChatThreadFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadFindManyArgs>
  ): Promise<ChatThread[]> {
    return this.prisma.chatThread.findMany(args);
  }
  async findOne<T extends Prisma.ChatThreadFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadFindUniqueArgs>
  ): Promise<ChatThread | null> {
    return this.prisma.chatThread.findUnique(args);
  }
  async create<T extends Prisma.ChatThreadCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadCreateArgs>
  ): Promise<ChatThread> {
    return this.prisma.chatThread.create<T>(args);
  }
  async update<T extends Prisma.ChatThreadUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadUpdateArgs>
  ): Promise<ChatThread> {
    return this.prisma.chatThread.update<T>(args);
  }
  async delete<T extends Prisma.ChatThreadDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatThreadDeleteArgs>
  ): Promise<ChatThread> {
    return this.prisma.chatThread.delete(args);
  }

  async getChatMessages(parentId: string): Promise<ChatMessage | null> {
    return this.prisma.chatThread
      .findUnique({
        where: { id: parentId },
      })
      .chatMessages();
  }

  async getRates(parentId: string): Promise<Rate | null> {
    return this.prisma.chatThread
      .findUnique({
        where: { id: parentId },
      })
      .rates();
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.chatThread
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}