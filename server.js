import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import fs from "fs/promises";

const credentials = await fs.readFile('credentials.json', 'utf-8');

let credentials_parsed = JSON.parse(credentials);

const auth = new GoogleAuth({
  credentials_parsed,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const authClient = auth.fromJSON(credentials_parsed);

const sheets = google.sheets({ version: 'v4', auth: authClient });

function editHexmap(hexmap){
  sheets.spreadsheets.values.update({
    spreadsheetId:"1Spq-Xf83L65rQlLtYvNQO22BevyMSqjeRr-r6IRvn_o",
    range:"Feuille 1!A1",
    valueInputOption: "RAW",
    resource:{values:[["Hello world"]]}
  });
}
