import { Injectable } from '@nestjs/common';
import { User } from './types/user';

@Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }

export class UserService {
  registration(userarg: User) {
    return userarg;
  }
}

