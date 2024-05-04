
import { Injectable } from '@nestjs/common';
import { User } from './types/user';

@Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }

export class UserService {
   getUserById(id: string): string {
    // Implement logic to handle the ID (e.g., fetch user data by ID)
    return `User with ID ${id}`;
  }
  registration(userarg: User) {
    return userarg;
  }
}

