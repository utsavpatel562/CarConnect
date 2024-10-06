import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken = import.meta.env.VITE_SENDBIRD_API_TOKEN;
const FormResult = (resp) => {
  let result = [];
  let finalResult = [];
  resp.forEach((item) => {
    const listingId = item.carListing?.id;
    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }
    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });
  result.forEach((item) => {
    finalResult.push({
      ...item.car,
      images: item.images,
    });
  });
  return finalResult;
};

const CreateSendBirdUser = (userId, nickName, profileUrl) => {
  console.log("SendBird API Token:", SendBirdApiToken); // Debugging log

  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/users",
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
      issue_access_token: false,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};
const CreateSendBirdChannel = (users, title) => {
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/group_channels",
    {
      user_ids: users,
      is_distinct: true,
      name: title,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": SendBirdApiToken,
      },
    }
  );
};

export default {
  FormResult,
  CreateSendBirdUser,
  CreateSendBirdChannel,
};
