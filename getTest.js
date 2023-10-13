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

// account
//   .read([AdAccount.Fields.name, AdAccount.Fields.age])
//   .then((account) => {
//     console.log(account);
//   })
//   .catch((error) => {
//     console.log("error: ", error)
//   });
// account
//   .createCampaign(
//     [],
//     {
//       objective: "OUTCOME_LEADS",
//   special_ad_categories: [],
//   name: "Campaign Name",
//   bid_strategy: "LOWEST_COST_WITHOUT_CAP",
//   buying_type: "AUCTION",
//   status: "ACTIVE",
//   spend_cap: 10000000,
//   daily_budget: 5000,
//     }
//   )
//   .then((campaign) => {
//     console.log("Campaign Created: ", campaign)
    account.getCampaigns(
      [Campaign.Fields.name, Campaign.Fields.r], 
      
      { limit: 2 })
    .then((campaigns) => {
      if (campaigns.length >= 2 && campaigns.hasNext()) {
        return campaigns.next();
      } else {
        Promise.reject(
          new Error('campaigns length < 2 or not enough campaigns')
        );
      }
    })
    .then((campaigns) => {
      if (campaigns.hasNext() && campaigns.hasPrevious()) {
        return campaigns.previous();
      } else {
        Promise.reject(
          new Error('previous or next is not true')
        );
      }
      return campaigns.previous();
    })
    .catch((error) => {
      console.log("Error when trying to created a campaign: ", error)
    });

  // })
  // .catch((error) => {
  // });


