// Setup enviroment
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });

// Import all dependencies
import { Bot } from "grammy";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import { parseMode } from "@grammyjs/parse-mode";

import { Context } from "./config/context";
import modules from "./modules";

const bot = new Bot<Context>(process.env.TOKEN);
const throttler = apiThrottler();

bot.api.config.use(parseMode("HTML")); // default formatting replies as HTML
bot.api.config.use(throttler);

bot.catch(console.error);

bot.use(modules);

bot.start();
