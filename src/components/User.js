import React from "react";
import { Icon, Modal } from "web3uikit";
import { useState } from "react";


function User({account}) {


  const [isVisible, setVisible] = useState(false);

  return (
    <>
      <div onClick={ () => setVisible(true) }>
        <Icon fill="#000000" size={24} svg="user" />
      </div>

      <Modal
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter = {false}
        title = "Your Booked Stays"
        isVisible = {isVisible}
      >
      </Modal>

    </>
  );
}

export default User;
