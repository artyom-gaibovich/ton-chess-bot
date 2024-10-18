import {DIConstants} from "../constants/DI.constants";
import {Injectable} from "@nestjs/common";
import {Ctx, Hears, Update} from "nestjs-puregram";
import {TelegramContextModel} from "./telegram-bot.interface";
import {ConfigService} from "@nestjs/config";
import {EnvConstants} from "../constants/env.constants";

@Update()
@Injectable()
export class TelegramBotController {
    constructor(private configService: ConfigService) {
    }

    @Hears('/start')
    async start(@Ctx() telegramContext: TelegramContextModel): Promise<void> {
        const result = telegramContext
        await telegramContext.send("-", {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Сделать заказ!', web_app: {
                            url: this.configService.get(EnvConstants.WebAppUrl)
                        }
                    }]
                ]
            }
        })
    }
}
