// firebase-messaging-sw.js
// Diese Datei MUSS im Root deines Hostings liegen (gleiche Ebene wie die index.html),
// damit sie unter genau /firebase-messaging-sw.js erreichbar ist.
// Sie kümmert sich um Push-Benachrichtigungen, während die App im Hintergrund ist / geschlossen ist.

importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Gleiche Config wie in der index.html
firebase.initializeApp({
    apiKey: "AIzaSyD3kppZkw_z7LesZavzyqOq-L8x0aK4NsE",
    authDomain: "durchagngssystem.firebaseapp.com",
    databaseURL: "https://durchagngssystem-default-rtdb.firebaseio.com",
    projectId: "durchagngssystem",
    storageBucket: "durchagngssystem.firebasestorage.app",
    messagingSenderId: "681623652861",
    appId: "1:681623652861:web:5e54850cb9bb64a156f194"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || "Zollamt Jachenau";
    const options = {
        body: payload.notification?.body || "",
        icon: "https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=Z" // ersetze durch ein eigenes App-Icon
    };
    self.registration.showNotification(title, options);
});
