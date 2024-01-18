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
    var db = firebase.firestore();

    db.collection("projects").get().then(documents => {
        var projectList = document.getElementById("projectList");
        documents.forEach(doc => {
            var data = doc.data();
            var title = data.title;
            var img_url = data.img_url;
            var link = doc.id;
            var layout = data.img_2_layout;
            if (layout) {
                
                projectList.innerHTML += `
                <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="work-item-container">
                            <a href="NewProjectPage.html?p=${link}">
                            <div class="work-item ">
                                <div class="work-item-bg" style="background-image: url('${img_url}')"></div>
                                <div class="work-item-title-container">
                                <div class="work-item-title">
                                    <span>${title}</span>
                                </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                `
            }else{
                projectList.innerHTML += `
                <div class="col-sm-6 col-md-6 col-lg-4">
                        <div class="work-item-container">
                            <a href="project.html?p=${link}">
                            <div class="work-item ">
                                <div class="work-item-bg" style="background-image: url('${img_url}')"></div>
                                <div class="work-item-title-container">
                                <div class="work-item-title">
                                    <span>${title}</span>
                                </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                `
            }

        });
    })
}


