# Ye Olde Slaec 

Live Project: [Ye Olde Slaec](https://ye-olde-slaec.herokuapp.com "Live Slack clone")

Ye Olde Slaec is a clone of Slack, a feature rich communication platform for
team projects and businesses.  Slaec offers channel and direct messaging, the 
ability to create your own channels, set a channel topic, unsubscribe from a 
channel or delete your messages.  Users can even add reactions to messages or
start a message thread.

![alt text](./app/assets/presentation/splash-home.gif)

The splash page gives you the option to sign in or sign up, putting your email
directly into the main hero pushes you to the sign up page automatically.  The
floating icon animation is achieved using a simple utility that slowly
increments a variable being repeatedly fed into sin/cos functions, the output of which
is used to translate the relative position of each icon in CSS.

![alt text](./app/assets/presentation/channel.png)

The workspace features a navigation bar that lets users select the active channel
or a direct message.  Messages for that channel are displayed in the main window
and any relevant channel information is displayed above in a channel header.
Here users can set the channel topic or leave the channel.  Below in the messages
form users can posts messages to the channel.

<!-- <img src="https://github.com/favicon.ico" width="48"> -->
<!-- <img src="./app/assets/presentation/channel.png" width="1076"> -->


![alt text](./app/assets/presentation/createChannel.png)

Users can create a new channel, setting the topic and purpose if they'd like.
The topic can be changed later at anyone's discretion.
Once a channel is created, users must subscribe to the channel by navigating 
to it and subscribing manually.

![alt text](./app/assets/presentation/createDM.png)

Users can also send messages directly to anyone or group of people.  Direct 
messages are private and only viewable by the sender and reciever(s) of it.

### Featured Technologies
  1. Javascript
  2. Ruby
  3. PostgresSQL
  4. HTML
  5. SCSS/CSS

### Libraries and Featured Frameworks
  - React
  - Redux
  - Ruby on Rails
  - jQuery for Ajax calls to the API
  - User Auth through BCrypt

### Site Features
  * Signup / Login with email and password
  * Channel browsing, creation, and messaging
  * Direct Messages
  * Message Reactions
  * Message Threads