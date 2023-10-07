export const environment = {
  production: true,
  backend: {
    api: "https://api.vvcb.cz",
    socketio: "https://api.vvcb.cz/ws"
  },
  middleware: {
    url: "https://mw.vvcb.cz",
  },
  keycloak: {
    issuer: 'https://auth.lukasmatuska.cz/realms/vvcb',
    redirectUri: window.location.origin,
    clientId: 'frontend',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: true,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};
