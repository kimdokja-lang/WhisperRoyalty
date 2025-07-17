export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '+923127594339', // Replace with actual owner number
    ownerNumbers: ['+923127594339@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JGR1ZhNHcvcnpoZXV4TjZCMnY1Q01saFB2R2FXQVVtYVVLUGhxT1NXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDBsa0ZTbzBEOHFXRit2UExHemJxTzkrNDdjUWV1KytUaTYrSXp3UU93MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTGJDYUxkbFRwYmo3S0NIeWNXNXJ0WmIyZGlmakE0bkM4VCtabnFMd1hZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvWFdEUm8wVkZ6Wmp1SWpndTRocndpY2Z2aWhycUpLSTRWcFI5bkdWVVdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVPc3NDWVQ0ODRLMk5hd1BxL1ZKeWpVNGI1Q3lqSzlhYzlMU0VIK21Xa0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZFR0IvVW42dm51QjJYTXFDYUxBT0lFRzNISGsxREVML1ZjdGpPRkw4bkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUxDSVBCNm92ZUMra3VXamQ2Wi9kSi9FU0p6UWM1SzMyVzMxbjhMdkUwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnZyQnR6MG1jaDBoWWNJRlVtR1ppR2gwMDdzclBOMnZmSlFzZjZNV3lIST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpDMSs2ZUx3aXFjV09YWlNnNWpFdHVuRWIzWWswcmhtS05YdSt3Rjh1M2tZZk1TcHpGa3FwOWhJeTRma2ZTLzBqb0Voem5mVXZZRmpOZnNjeEVaR2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODYsImFkdlNlY3JldEtleSI6Ii9xNjhaUTFTdUpYUjdVRGNLL25JUU16RFYxRjgrckFZQWpjdU40bFlVcG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTI3NTk0MzM5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlFODhEOEUxMkRDOTUxQTk0RTZDMTA1MjkyM0NBMkVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI3NDQ5OTJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNzU5NDMzOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RkY3RkIwNTZGMDdDNjcyRUI4M0MxNjM1QzgyMDY3OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNzQ0OTk3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjc1OTQzMzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTU1NjYwMDg2ODlDNEFDNzhEOTFGMTAwRjc5NDZBMkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Mjc0NTAyNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQU1CTUxKV1IiLCJtZSI6eyJpZCI6IjkyMzEyNzU5NDMzOToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjAzMDAyMzg0MjczNDA5OjFAbGlkIiwibmFtZSI6IvCdkJPhtIXwnZCtICDimK/vuI7jgI4g4piY0pzqgKRNIOGXquGOvuGPpvCdlYHhl6njgI8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvMHRXMFFqSWpqd3dZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVjRDZ4QWJzd1VXY01Hd1RJcHViSTY2NXJVNnRyTXRsenZ3a1BMcit2RFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhnTFkyL1doU0ZVWXh4bU1zUDB5d29LUlBxNFo4ZUdzM08zRW9BU24vRFM1MHc0YWdpNFRDbFBDcWtyeDYydDY1YmsyZjBPakoxUGNKN1VhcXR1eEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJSYWtkSVZmRjVmZDVxaWczaG5BTUJ6UHAxdXdCQk1YekZ1cVVCcGtuWTN0RW51UmltUmRXdzB4M05aYnpML3dKV1ZIamlJVno1YXZzQTYwbkJtc1ZqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzEyNzU5NDMzOToxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZIQStzUUc3TUZGbkRCc0V5S2JteU91dWExT3JhekxaYzc4SkR5Ni9ydzEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Mjc0NDk4NCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdWRCJ9",  //get from the link in the README.md

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "", // Get from https://platform.openai.com/account/api-keys
    truecallerId: 'a1i0x--L2j_d8lF4BTFZ7e3p0t',
    truecallerId: process.env.TRUECALLER_ID || '',

    // Profile Pictures
    profilePics: [
        'https://files.catbox.moe/mq8b1n.png',
        'https://files.catbox.moe/dm7w9d.jpeg',
        'https://files.catbox.moe/0j5tnz.jpeg',
        'https://files.catbox.moe/b7wnah.jpeg',
        'https://files.catbox.moe/oo7yfn.jpeg',
        'https://files.catbox.moe/57l61y.jpeg',
        'https://files.catbox.moe/q64syc.jpeg'
    ],

    // Anti-spam settings
    antiSpam: {
        enabled: false,
        maxMessages: 5,
        timeWindow: 60000, // 1 minute
        cooldownTime: 30000 // 30 seconds
    }
};
