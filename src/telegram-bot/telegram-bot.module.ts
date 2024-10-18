import {Module} from '@nestjs/common';
import {TelegramBotController} from "./telegram-bot.controller";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    providers: [TelegramBotController],
    controllers: []
})
export class TelegramBotModule {
}
