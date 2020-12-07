console.log("beep!");

require('dotenv').config();

const Discord = require('discord.js');
const HangmanGame=require('./hangman-game')
const client = new Discord.Client();

client.login(process.env.BOTTOKEN);
const serverID =(process.env.SERVERID);
const channelID = (process.env.CHANELID);

const express = require('express');

const hangman = new HangmanGame(client);

client.on('ready', () => {
    console.log('Ready!');
  });

    //hangman game start
  client.on('message', gotMessage);

  function gotMessage(msg) {
    console.log(msg.content);
    if(msg.content==="!hangman"){
    //  msg.reply('startting');
    hangman.newGame(msg);
    }
  }


