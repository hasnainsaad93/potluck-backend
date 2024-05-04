import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { email: 'prashant@gmail.com', password: 'prashant' }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  async updatePassword(email: string, newPassword: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
      this.users[userIndex].password = newPassword;
    } else {
      throw new Error('User not found');
    }
  }

  async updateUser(updatedUser: any): Promise<void> {
    const userIndex = this.users.findIndex(user => user.email === updatedUser.email);

    if (userIndex !== -1) {
    } else {
      throw new Error('User not found');
    }
  }
}
