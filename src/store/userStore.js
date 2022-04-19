import { makeAutoObservable } from "mobx";
const {
      xhrRequest,
      openLink,
      showError,
      getExtensionVersion,
      getUxpVersion,
      getAppVersion,
      getOSInformation,
    } = require("../lib/Utils");

class User {
  isAuth = false;
  constructor() {
    makeAutoObservable(this);
  }
  loginUser() {
    this.isAuth = true;
var BASE_URL = 'https://www.remove.bg';
//BASE_URL = 'http://192.168.0.26:8443';
var BASE_API = 'https://api.remove.bg';
//BASE_API = 'http://192.168.0.26:9443';


var API_ENDPOINTS = {
  ACCOUNT: BASE_API + '/v1.0/account',
  PHOTOSHOP : BASE_API + '/v1.0/apps/photoshop?v=',
  //PHOTOSHOP: BASE_API + '/v1.0/apps/android?v=', // FOR TESTING ONLY
  REMOVEBG: BASE_API + '/v1.0/removebg',
  IMPROVE: BASE_API + '/v1.0/improve',
  PS_AUTH_REQUEST: BASE_URL + '/api/ps_auth/request',
  PS_AUTH_LOGIN: BASE_URL + '/api/ps_auth/login',
};


    xhrRequest(`https://www.remove.bg/api/ps_auth/request/new`, "GET")
      .then((response) => {
        console.log(response);
        return response.id;
      })
      .then((rid) => {
        console.log("rid: " + rid);
        
        openLink(`${API_ENDPOINTS.PS_AUTH_LOGIN}/${rid}`);

        xhrRequest(`${API_ENDPOINTS.PS_AUTH_REQUEST}/${rid}/token`, "GET")
          .then((tokenResponse) => {
                console.log(tokenResponse.token)
            // settings.ACCESS_TOKEN = tokenResponse.token;
            // SettingsDialog.validateApiKey().then(() => {
            //   return tokenResponse.token;
            // });
          })
          .catch((err) => {
            if (err) {
              error(err);
              SettingsDialog.setOauthButtonEnabled(enabled);
              showError(
                "Error: " +
                  err +
                  " - Please visit remove.bg/help/remove-bg-for-photoshop or contact us at support@remove.bg."
              );
            }
          });
      })
      .catch((err) => {
        if (err) {
          error(err);
          SettingsDialog.setOauthButtonEnabled(enabled);
          showError(
            "Error: " +
              err +
              " - Please visit remove.bg/help/remove-bg-for-photoshop or contact us at support@remove.bg."
          );
        }
      });
  }
  logoutUser() {
    this.isAuth = false;
  }
  sendKey(){
    this.isAuth = true;
  }
}
export default new User();
