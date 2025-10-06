import { EmbedBuilder } from 'discord.js';

const BRAND_COLOR = 0xF1C40F; // gold/yellow
const BOT_DISPLAY_NAME = 'Light Services Ticket-bot';

export function createBrandEmbed(title, description) {
  const embed = new EmbedBuilder()
    .setColor(BRAND_COLOR)
    .setTitle(title || BOT_DISPLAY_NAME)
    .setDescription(description || null)
    .setFooter({ text: BOT_DISPLAY_NAME });
  return embed;
}

export function getBotDisplayName() {
  return BOT_DISPLAY_NAME;
}

import { EmbedBuilder } from 'discord.js';

const BRAND_COLOR = 0xF1C40F; // gold/yellow
const BOT_DISPLAY_NAME = 'Light Services Ticket-bot';

export function createBrandEmbed(title, description) {
  const embed = new EmbedBuilder()
    .setColor(BRAND_COLOR)
    .setTitle(title || BOT_DISPLAY_NAME)
    .setDescription(description || null)
    .setFooter({ text: BOT_DISPLAY_NAME });
  return embed;
}

export function getBotDisplayName() {
  return BOT_DISPLAY_NAME;
}


