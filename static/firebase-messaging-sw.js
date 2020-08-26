
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c","authDomain":"test-6a8f9.firebaseapp.com","databaseURL":"https:\u002F\u002Ftest-6a8f9.firebaseio.com","projectId":"test-6a8f9","storageBucket":"test-6a8f9.appspot.com","messagingSenderId":"917819406042","appId":"1:917819406042:web:72b3f9873bbaf9e05ad7e3","measurementId":"G-7SRMTNSWYE","fcmPublicVapidKey":"BHKeWNRzDbtlzmLSgEuLdUsPFdlA2Cn0Eg0dfOk56WEVLLObFYVUnZZ1u7_5M3eB8QSm4hBzk6PYu4CA6OgPv-A"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info("SW received the message: ", payload);
  const notification = payload.notification;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: "Visit",
        action: notification.clickPath
      }
    ]
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})
