import { Module } from "@nestjs/common";
import { Bcrypt } from "./bcrpty/bcrpty";

@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [],
    exports: [Bcrypt],
})
export class AuthModule {};