import React from "react";
import Notification from "../lib/Notification";

//allow react dev tools work
window.React = React;

/**
 * Defines the pushnotification related functionalities
 */
class PushNotification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ignore: true,
      title: ""
    };
  }

  /**
   * Chanage the state if the permission is granted
   */
  handlePermissionGranted() {
    console.log("Permission Granted");
    this.setState({
      ignore: false
    });
  }

  /**
   * Chanage the state if the permission is denied
   */
  handlePermissionDenied() {
    console.log("Permission Denied");
    this.setState({
      ignore: true
    });
  }

  /**
   * Checks if the web notification is supported
   */
  handleNotSupported() {
    console.log("Web Notification not Supported");
    this.setState({
      ignore: true
    });
  }

  /**
   * Handle the on click for notification
   * @param {Event} e 
   * @param {string} tag 
   */
  handleNotificationOnClick(e, tag) {
    console.log(e, "Notification clicked tag:" + tag);
  }

  /**
   * Handle error for notification
   * @param {Event} e 
   * @param {string} tag 
   */
  handleNotificationOnError(e, tag) {
    console.log(e, "Notification error tag:" + tag);
  }

  /**
   * Handle notification close
   * @param {Event} e 
   * @param {string} tag 
   */
  handleNotificationOnClose(e, tag) {
    console.log(e, "Notification closed tag:" + tag);
  }

  /**
   * Handle notification show
   * @param {Event} e 
   * @param {string} tag 
   */
  handleNotificationOnShow(e, tag) {
    this.playSound();
    console.log(e, "Notification shown tag:" + tag);
  }

  /**
   * Handle the sound for the notification 
   * @param {string} filename 
   */
  playSound(filename) {
    document.getElementById("sound").play();
  }

  /**
   * Triggers to popup the pushnotification
   */
  handleButtonClick() {
    if (this.state.ignore) {
      return;
    }

    // Configuring the body of the notification
    const now = Date.now();
    const title = "Go Buy your item";
    const body = "from X convenintent store";
    const tag = now;
    // const icon = 'http://mobilusoss.github.io/react-web-notification/example/Notifications_button_24.png';
    // const icon = 'http://localhost:3000/Notifications_button_24.png';
    // Available options
    // See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification

    // Consist the attributes to option object
    const options = {
      tag: tag,
      body: body,
      // icon: icon,
      lang: "en",
      dir: "ltr",
      sound: "./sound.mp3" // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
    };

    // Change the state with the configured attributes
    this.setState({
      title: title,
      options: options
    });
  }

  /**
  * Describes the elements on the push notification
  * @return {String} HTML elements
  */
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick.bind(this)}>Notif!</button>
        <Notification
          ignore={this.state.ignore && this.state.title !== ""}
          notSupported={this.handleNotSupported.bind(this)}
          onPermissionGranted={this.handlePermissionGranted.bind(this)}
          onPermissionDenied={this.handlePermissionDenied.bind(this)}
          onShow={this.handleNotificationOnShow.bind(this)}
          onClick={this.handleNotificationOnClick.bind(this)}
          onClose={this.handleNotificationOnClose.bind(this)}
          onError={this.handleNotificationOnError.bind(this)}
          timeout={5000}
          title={this.state.title}
          options={this.state.options}
        />
        <audio id="sound" preload="auto">
          <source src="./sound.mp3" type="audio/mpeg" />
          <source src="./sound.ogg" type="audio/ogg" />
          <embed
            hidden={true}
            autostart="false"
            loop={false}
            src="./sound.mp3"
          />
        </audio>
      </div>
    );
  }
}

export default PushNotification;
