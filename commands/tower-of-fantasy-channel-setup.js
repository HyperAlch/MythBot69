const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const roleWidget = require("../helpers/roleWidget");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tower-of-fantasy-channel-setup')
		.setDescription('Set up your tower of fantasy widget'),
	async execute(interaction) {
		let roleWidget = require("../helpers/roleWidget")
		let widget = roleWidget.create(
			"Tower of Fantasy",
			"If you want to be able to see and interact with Tower of Fantasy content, grab this role",
			"join-tower-of-fantasy",
			"leave-tower-of-fantasy"
		)
		await interaction.reply(widget);
	},
};
