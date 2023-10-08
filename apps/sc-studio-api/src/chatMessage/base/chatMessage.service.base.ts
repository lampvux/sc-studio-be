/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ChatMessage, ChatThread, User } from "@prisma/client";

export class ChatMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ChatMessageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageCountArgs>
  ): Promise<number> {
    return this.prisma.chatMessage.count(args);
  }

  async findMany<T extends Prisma.ChatMessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageFindManyArgs>
  ): Promise<ChatMessage[]> {
    return this.prisma.chatMessage.findMany(args);
  }
  async findOne<T extends Prisma.ChatMessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageFindUniqueArgs>
  ): Promise<ChatMessage | null> {
    return this.prisma.chatMessage.findUnique(args);
  }
  async create<T extends Prisma.ChatMessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageCreateArgs>
  ): Promise<ChatMessage> {
    return this.prisma.chatMessage.create<T>(args);
  }
  async update<T extends Prisma.ChatMessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageUpdateArgs>
  ): Promise<ChatMessage> {
    return this.prisma.chatMessage.update<T>(args);
  }
  async delete<T extends Prisma.ChatMessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatMessageDeleteArgs>
  ): Promise<ChatMessage> {
    return this.prisma.chatMessage.delete(args);
  }

  async getThread(parentId: string): Promise<ChatThread | null> {
    return this.prisma.chatMessage
      .findUnique({
        where: { id: parentId },
      })
      .thread();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.chatMessage
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}