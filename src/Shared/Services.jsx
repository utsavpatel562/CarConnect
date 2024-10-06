import axios from "axios";

const SendBirdApplicationId = import.meta.env.VITE_SENDBIRD_APP_ID;
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
  return axios.post(
    "https://api-" + SendBirdApplicationId + ".sendbird.com/v3/users",
    {
      user_Id: userId,
      nickName: nickName,
      profile_Url: profileUrl,
      issue_access_token: false,
    }
  );
};
export default {
  FormResult,
};
