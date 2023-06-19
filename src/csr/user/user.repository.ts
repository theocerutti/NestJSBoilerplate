import { EntityRepository } from "typeorm";
import { User } from "model/user.entity";
import { BaseEntityRepository } from "../../utils/BaseEntityRepository";

@EntityRepository(User)
export class UserRepository extends BaseEntityRepository<User> {
}
