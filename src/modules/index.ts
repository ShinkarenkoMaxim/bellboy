import { Composer } from "grammy";
import { Context } from "../config/context";
import { getWelcomeMessage } from "../config/constants";
import { getLinkedName } from "../utils/getLinkedName";

const composer = new Composer<Context>();

composer.on(":new_chat_members", async (ctx) => {
  const linkedName = getLinkedName(ctx.from);
  const msg = getWelcomeMessage(linkedName);

  await ctx.reply(msg);
});

export default composer;
