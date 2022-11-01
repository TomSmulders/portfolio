window.onload = function() {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBvwFnm7TFVeBT533C6XV8V9zKa1NBpaF0",
        authDomain: "portfolio-d60a1.firebaseapp.com",
        projectId: "portfolio-d60a1",
        storageBucket: "portfolio-d60a1.appspot.com",
        messagingSenderId: "184750941452",
        appId: "1:184750941452:web:da4e63c041b3e57c009529",
        measurementId: "G-NGFJCJ52BZ"
    };
    
    // Initialize Firebase & Firestore
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();

    db.collection("projects").get().then(documents => {
        documents.forEach(doc => {
            console.log(doc.data().img_url);
        });
    })
}
