export const environment = {
  production: true,
  backend: {
    api: "https://api.vvcb.cz",
    socketio: "https://api.vvcb.cz/ws"
  },
  keycloak: {
    issuer: 'https://auth.lukasmatuska.cz/realms/vvcb',
    redirectUri: 'https://vvcb.cz/',
    clientId: 'frontend',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: true,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
