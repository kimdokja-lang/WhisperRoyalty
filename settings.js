export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '2347049044897@s.whatsapp.net', // Replace with actual owner number
    ownerNumbers: ['2347049044897@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FiM1Q1VS9lbHhoY3pEYUNRRnlOZUxYWWN0L2hnMzhXb3JzZXIrRGtrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWVIdTFjek9vaHI4K3d3UjRCZVZFVC9BL2JSRkxQbGs2M2dnQS9kWmNTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQUp0L0dYUlNxSGFHa2ZRU3oyUHAxRGMzMUFOcjZJNW1rR3NmREtVNUdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSUV5Y05SQmZ0V2FscTIyQ3N0SktVZW5HTW1VS3I4RXY0dGgwVm13THl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDTkJpeHRtL05hQWxMSGZ1amlzT2dDRkI2U2ZESVhMVmRacDlGbWVUMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxRVNwNG1lbDBOR3dSb0lDelJmVytxOU5nRG9ZSE1neUJhTm55TlEwelU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09TbnJObldtaGxEU2tqbUllT1NFOGVabFJCdXJVQXc4TFp4akR0bVRIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWQ3QVpFTkticW1qSEw1eDhpRWQ3WVdITm5aMDlqWi9YWW45Y2ZrbkFVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImIvZ09KaEh3dkhlUUdETWpWd1N3ZGxpOEFLQ0MyWmRtNDNhd3ZxRG1qVm9qSUtlaGpjUEFXVXFvRDhHRUw5cDhtdHRVd29rSDlNYTlaZE04a2VRR2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJaWldNUlNFS3ozZHFUVnhPdGdSb1FmcFZsTHZOL1BxUzJXL2I1L25zS0xZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDkwNDQ4OTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUFEQzYwNEUyRDM1RkJDRDRBMEQzN0MyQThGMkJBODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjE1MTE0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0OTA0NDg5N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCOTUzMThDQ0Y2REEwMURCODY1QTg3QTNFNzBENTY2NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyMTUxMTQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ3MDQ5MDQ0ODk3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk3RkE2QjVGRjJDNkE5ODBCNzZGNUQxRTA5QzhBODExIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIxNTExNzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlpGUFdBTkE1IiwibWUiOnsiaWQiOiIyMzQ3MDQ5MDQ0ODk3OjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjEyNDcyNzAzMjY2ODQ3OjE1QGxpZCIsIm5hbWUiOiJ5b3VyIEhpZ2huZXNzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM1JzNmNDRU1Eb3ZzTUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyLzRuS2Ewa1NETXB6U2IrbjZQWWVoSU9VZVRmNm9zaFRRM0k3bnkweWxjPSIsImFjY291bnRTaWduYXR1cmUiOiJXN2UxdmhqN2owVVpMZEoxNFQzYmhLQjlQTXdsbzRwb2ltOEpwT3V6VmtXWUhVd055eHBwOE5nblU4aVpyMEpMdS9Kd3QzWEpYYUVTc0VqWTk2ZHBBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSFRWZWV4dVkzRXh2SCtvYlJkdVFid1NpM1dCaTdZRHNmQ3FyZG9HV2g5Q3V0a3A1QU1GcGhoajRmSzVmcjhkcWE2V0RWMFN1VW5Xa0JoZ2RKSUx2amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQ5MDQ0ODk3OjE1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR2K0p5bXRKRWd6S2MwbS9wK2oySG9TRGxIazMrcUxJVTBOeU81OHRNcFgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjE1MTEzOSwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLbm8ifQ==",  //get from the link in the README.md

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "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", // Get from https://platform.openai.com/account/api-keys
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