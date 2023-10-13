
'use strict';
require('dotenv').config()

const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const access_token = process.env.ACCESS_TOKEN;
const app_secret = process.env.APP_SECRET;
const app_id = process.env.APP_ID;
const account_id = process.env.AD_ACCOUNT_ID;

const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(`act_${account_id}`)
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  // 'name' : 'My First Campaign',
  // 'objective' : 'PAGE_LIKES',
  // 'status' : 'PAUSED',
  // 'special_ad_categories' : [],
  objective: "OUTCOME_LEADS",
  special_ad_categories: [],
  name: "Campaign Name",
  bid_strategy: "LOWEST_COST_WITHOUT_CAP",
  buying_type: "AUCTION",
  status: "ACTIVE",
  spend_cap: 10000000,
  daily_budget: 5000,
};
const campaigns = account.createCampaign(
  fields,
  params
);
logApiCallResult('campaigns api call complete.', campaigns);

