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
const AdSet = bizSdk.AdSet;
const AdsInsights = bizSdk.AdsInsights;

const access_token = process.env.ACCESS_TOKEN;
const app_secret = process.env.APP_SECRET;
const app_id = process.env.APP_ID;
const account_id = process.env.AD_ACCOUNT_ID;
const campaign_id = process.env.CAMPAIGN_ID;

const id = '<AD_SET_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
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
  'impressions',
];
params = {
  'breakdown' : 'publisher_platform',
};
const insights = (new AdSet(campaign_id)).getInsights(
  fields,
  params
);
logApiCallResult('insights api call complete.', insights);