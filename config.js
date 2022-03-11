//
//
//
let CF = {
    appName: "node-server-boilerplate",
    appVersion: "0.0.1",
    port: 5152,
    baseURL : "http://localhost",
}

CF.publicURL    = CF.baseURL + ':' + CF.port.toString()
CF.apiURL       = CF.publicURL + '/api'

module.exports = CF
