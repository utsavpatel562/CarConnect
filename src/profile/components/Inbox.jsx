import React from "react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";

function Inbox() {
  return (
    <>
      <div>
        <div style={{ width: "100vw", height: "100vh" }}>
          <SendBirdProvider
            appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          ></SendBirdProvider>
          <SendbirdApp
            // You can find your Sendbird application ID on the Sendbird dashboard.
            appId={import.meta.env.VITE_SENDBIRD_APP_ID}
            // Specify the user ID you've created on the dashboard.
            // Or you can create a user by specifying a unique userId.
            userId={"USER_ID"}
          />
        </div>
      </div>
    </>
  );
}

export default Inbox;
