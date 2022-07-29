import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './Dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private UserService: UserService) {}


    @Get("/")
    getUsers() {
        return this.UserService.getUsers;
    }

    @Post("create")
    @HttpCode(200)
     createUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.UserService.createUser(createUserDto);
    }

    @Post("login")
    @HttpCode(200)
    loginUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.UserService.loginUser(createUserDto)
    }
}
