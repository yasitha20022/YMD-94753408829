const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD?g0Q4wE',
    PORT: process.env.PORT || 7860,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
