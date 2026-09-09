console.log('Versione finale: main + autenticazione');

function avviaApplicazione() {
  console.log('Applicazione avviata');
}

function login(username, password) {
  if (username && password) {
    console.log('Accesso effettuato');
    return true;
  }
  console.log('Credenziali mancanti');
  return false;
}

avviaApplicazione();
