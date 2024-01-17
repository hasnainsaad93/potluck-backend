// user.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserById(id: string): string {
    // Implement logic to handle the ID (e.g., fetch user data by ID)
    return `User with ID ${id}`;
  }
}
