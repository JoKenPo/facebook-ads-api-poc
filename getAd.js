/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

'use strict';
require('dotenv').config()

const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const AdsInsights = bizSdk.AdsInsights;

const access_token = process.env.ACCESS_TOKEN;
const app_secret = process.env.APP_SECRET;
const app_id = process.env.APP_ID;
const ad_account_id = `act_${process.env.AD_ACCOUNT_ID}`;
const campaign_id = process.env.CAMPAIGN_ID;

const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(ad_account_id);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

let ads_insights;
let ads_insights_id;

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    // console.log('Data:' + JSON.stringify(data));
  }
};

const fields = [
  'ad_id',
  'ad_name',
  // 'results',
  'reach',
  'impressions',
  // 'delivery',
  'spend',
  // 'cost_per_result',
  'ctr',
  'cpc',
  'cpm',
];
const params = {
  'time_range' : {'since':'2023-09-19','until':'2023-10-20'},
  'filtering' : [],
  'level' : 'ad',
  // 'breakdowns' : ['ad_name'],
};
 (new AdAccount(ad_account_id)).getInsights(
  fields,
  params
)
.then((result) => {
  logApiCallResult('ads_insights api call complete.', result);
  ads_insights_id = result[0].id;
})
.catch((error) => {
  console.log(error);
});
