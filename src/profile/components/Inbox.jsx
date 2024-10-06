import React, { useEffect, useState } from "react";
import { App as SendbirdApp, SendBirdProvider } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useUser } from "@clerk/clerk-react";

function Inbox() {
  const { user } = useUser();
  const [userId, setUserId] = useState();
  useEffect(() => {
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split("@")[0];
      setUserId(userId);
    }
  }, []);
  return (
    <>
      <div>
        <div style={{ width: "100vw", height: "100vh" }}>
          <SendBirdProvider
            userId={userId}
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true}
            appId={import.meta.env.VITE_SENDBIRD_APP_ID}
          ></SendBirdProvider>
        </div>
      </div>
    </>
  );
}

export default Inbox;
