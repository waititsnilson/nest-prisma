import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import prisma from 'src/utils/prisma';

@Injectable()
export class UserService {
    async createUser({ username, password }) {
        if (!username || !password) {
            throw new HttpException("Error: All fields required!", HttpStatus.BAD_REQUEST)
        }
        const user = await prisma.user.create({ data: { username, password }});
        return user;
    }
    async loginUser({ username, password }) {
        const user = await prisma.user.findUnique({ where: { username }})
        if (!user) {
            throw new HttpException("Error: User not found!", HttpStatus.BAD_REQUEST)
        } else {
            if (user.password === password) {
                return user
            }
        }
    }
}

