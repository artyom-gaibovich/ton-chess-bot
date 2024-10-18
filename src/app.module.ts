import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {TelegramBotModule} from './telegram-bot/telegram-bot.module';
import {TelegramModule} from "nestjs-puregram";
import {EnvConstants} from "./constants/env.constants";

@Module({
    imports: [
        TelegramBotModule,
		TelegramModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                token: configService.get(EnvConstants.BotToken),
            }),
        }),
        ConfigModule.forRoot({isGlobal: true}),
    ],
    providers: [],
    controllers: [],
})
export class AppModule {
}
