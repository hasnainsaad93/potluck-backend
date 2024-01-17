import { Controller, Get, Post, Body, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }): Promise<string> {
    const { email, password } = credentials;

    const validEmail = 'prashant@gmail.com';
    const validPassword = 'prashant';

    if (email === validEmail && password === validPassword) {
      return 'Login successful';
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}