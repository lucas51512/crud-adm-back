import { Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';

@ApiTags("Autorizações")
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @IsPublic()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(@Request() req: AuthRequest){
        console.log(req.user);
        
        return this.authService.login(req.user);
    }
}
