import { Repository } from 'typeorm';
import { User } from '../model/user.entity';

export class BaseEntityRepository<T> extends Repository<T> {
}
