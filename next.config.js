const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        apiURL: 'http://localhost:3000'
      }
    };
  } else {
    return {
      env: {
        apiURL: 'https://api.altr.app'
      }
    };
  }
};
