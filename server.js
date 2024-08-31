function editHexmap(hexmap){
    // Client-side script to handle Google Sheets API
    let CLIENT_ID = '118215344916755926624';
    let API_KEY = 'dcae814defa5e6556ac155afb672e8de6a8c3fc4';
    let DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    let SCOPES = "https://www.googleapis.com/auth/spreadsheets";

    function handleClientLoad() {
        gapi.load('client:auth2', initClient);
    }

    function initClient() {
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(() => {
            document.getElementById('authorize_button').onclick = handleAuthClick;
            document.getElementById('signout_button').onclick = handleSignoutClick;
        });
    }

    function handleAuthClick() {
        gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignoutClick() {
        gapi.auth2.getAuthInstance().signOut();
    }

    function updateSheet() {
        gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: '1Spq-Xf83L65rQlLtYvNQO22BevyMSqjeRr-r6IRvn_o',
            range: 'Feuille 1!A1',
            valueInputOption: 'RAW',
            resource: { values: [[ "Hello, World!" ]] }
        }).then(response => {
            console.log('Sheet updated', response);
        }, error => {
            console.error('Error updating sheet', error);
        });
    }
}
