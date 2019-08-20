export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
  case 'smog-moviethoughtclient.herokuapp.com':
    APIURL = 'https://smog-moviethoughtserver.herokuapp.com'
    break;
  default:
    APIURL = 'http://localhost:3000';
}
