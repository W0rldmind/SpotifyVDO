{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const albumArt = document.querySelector('#album-art img');\
const songName = document.querySelector('#song-name');\
const artistName = document.querySelector('#artist-name');\
const joinButton = document.querySelector('#join-button');\
\
// Replace YOUR_CLIENT_ID with your actual client ID\
const clientId = 'YOUR_CLIENT_ID';\
\
// Replace YOUR_REDIRECT_URI with your actual redirect URI\
const redirectUri = 'YOUR_REDIRECT_URI';\
\
let accessToken = '';\
let refreshToken = '';\
\
// This function retrieves the user's access token from the URL hash fragment\
function getAccessToken() \{\
  const hash = window.location.hash\
    .\
}