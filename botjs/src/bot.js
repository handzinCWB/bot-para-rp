const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = '!'
////////////////////////////////////////
client.on('ready',() => {
    console.log('bot está ligado');
});




client.on('message', msg => {
  if (msg.content === prefix + 'dev') {
    msg.reply('meu dev é o DaviZIN#1627')
  }
});




client.on('message', msg => {
  if (msg.content === prefix + 'githubdev') {
    msg.reply('https://github.com/handzinCWB')
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'stats') {
    msg.reply('**SERVER ON**')
  }
});






client.on('message', msg => {
  if (msg.content === prefix + 'ip') {
    msg.reply('ip do seu server')
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'ts') {
    msg.reply('id do seu server do ts')
  }
});







client.login('seu token do bot') // faça o token em https://discord.com/developers/applications