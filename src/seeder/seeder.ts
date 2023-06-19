import { User } from "../model/user.entity";
import { Injectable, Logger } from "@nestjs/common";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class Seeder {
  private readonly logger = new Logger(Seeder.name);

  userRepo: Repository<User>;

  buildSeeder() {
    this.logger.log("Getting repositories...");
    this.userRepo = getRepository(User);
  }

  async cleanDatabase() {
    this.logger.log("Clean database...");
    await this.userRepo.delete({});
  }

  async seed() {
    // call constructor-like
    this.buildSeeder();

    // clean db
    await this.cleanDatabase();
  }
}
