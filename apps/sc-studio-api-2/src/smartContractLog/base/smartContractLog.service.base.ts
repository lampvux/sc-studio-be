/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SmartContractLog, SmartContract } from "@prisma/client";

export class SmartContractLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SmartContractLogCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogCountArgs>
  ): Promise<number> {
    return this.prisma.smartContractLog.count(args);
  }

  async findMany<T extends Prisma.SmartContractLogFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogFindManyArgs>
  ): Promise<SmartContractLog[]> {
    return this.prisma.smartContractLog.findMany(args);
  }
  async findOne<T extends Prisma.SmartContractLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogFindUniqueArgs>
  ): Promise<SmartContractLog | null> {
    return this.prisma.smartContractLog.findUnique(args);
  }
  async create<T extends Prisma.SmartContractLogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogCreateArgs>
  ): Promise<SmartContractLog> {
    return this.prisma.smartContractLog.create<T>(args);
  }
  async update<T extends Prisma.SmartContractLogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogUpdateArgs>
  ): Promise<SmartContractLog> {
    return this.prisma.smartContractLog.update<T>(args);
  }
  async delete<T extends Prisma.SmartContractLogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartContractLogDeleteArgs>
  ): Promise<SmartContractLog> {
    return this.prisma.smartContractLog.delete(args);
  }

  async getSmartContract(parentId: string): Promise<SmartContract | null> {
    return this.prisma.smartContractLog
      .findUnique({
        where: { id: parentId },
      })
      .smartContract();
  }
}