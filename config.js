const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aCYEwSQI#qCJRqB3_L5HTBe2opIFHlP1Ww9GtlaQX06O-DSCnPFA",
MONGODB: process.env.MONGODB || "mongodb+srv://kitzudew2006:Dewanjana2023@cluster0.0ov7l.mongodb.net/",//enter mongo db url
};
