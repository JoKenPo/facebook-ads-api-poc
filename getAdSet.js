
'use strict';
require('dotenv').config()

const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdSet = bizSdk.AdSet;
const Campaign = bizSdk.Campaign;

const access_token = process.env.ACCESS_TOKEN;
const app_secret = process.env.APP_SECRET;
const app_id = process.env.APP_ID;
const account_id = process.env.AD_ACCOUNT_ID;
const campaign_id = process.env.CAMPAIGN_ID;

const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(`act_${account_id}`)
const adSet = new AdSet(`act_${account_id}`)
const campagin = new Campaign(`${campaign_id}`)
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

let fields, params;
fields = [
  'adset_id',
  'adset_name',
  'reach',
  'impressions',
  'spend',
  'ctr',
  'cpc',
  'cpm',
];
params = {
//   'name' : 'My First AdSet',
//   'lifetime_budget' : '20000',
//   'start_time' : '2023-09-01T09:24:18-0700',
//   'end_time' : '2023-10-26T09:24:18-0700',
//   'campaign_id' : '120330000386235813',
//   'bid_amount' : '500',
//   'billing_event' : 'IMPRESSIONS',
//   'optimization_goal' : 'POST_ENGAGEMENT',
//   'targeting' : {'age_min':20,'age_max':24,'behaviors':[],'genders':[1],'geo_locations':{'countries':['US'],'regions':[{'key':'4081'}],'cities':[{'key':'777934','radius':10,'distance_unit':'mile'}]},'interests':[{'id':'<adsInterestID>','name':'<adsInterestName>'}],'life_events':[],'facebook_positions':['feed'],'publisher_platforms':['facebook','audience_network']},
//   'status' : 'ACTIVE',

// {"since":"2023-09-19","until":"2023-10-20"}
'level' : 'adset',
};

adSet.getInsights(
  fields,
  params
)
.then((adSet) => {
  console.log("Deu bom: ",adSet)
  return true
})
.catch((error)=> {
  console.log("Erro: ", error)
  return false
})
