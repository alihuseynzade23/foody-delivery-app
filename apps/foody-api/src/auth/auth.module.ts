import { Module } from "@nestjs/common";
import { AuthController } from "./auth.contoller";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: []
})

export class AuthModule {}