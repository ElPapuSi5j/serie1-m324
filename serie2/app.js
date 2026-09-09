console.log('Applicazione Serie 2');

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
