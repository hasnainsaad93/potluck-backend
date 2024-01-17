import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './types/user';

@Controller('users')
export class UserController {
  
  constructor(private readonly userService: UserService) {

    
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
  registeration(@Body() userarg: User) {  
    
    return this.userService.registration(userarg);
    }

    @Post("forgot")
  forgotpassword(@Body() userarg: User) {  
    console.log(userarg);
    return this.userService.registration(userarg);
    }
}

