// Get the Project ID from the URL
let parameters = new URLSearchParams(window.location.search);
let projectId = parameters.get("p");

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

    db.collection("projects").doc(projectId).get().then(doc => {
        var project = document.getElementById("project");

            var data = doc.data();
            var title = data.title;
            var imgUrl = data.img_url;
            var tags_list = data.tags;
            var tags = "";
            var textProject = data.text;
            var imgProject = data.img_project;
            var githubLink = data.github;
            var itch_io_code;
            var itch_io_link;

            if (tags_list) {
                tags_list.forEach(tag => {
                    tags += `<p class="text-center my-0">${tag}<hr class="mx-auto my-0 text-center"  style="width: 150px;margin-top: 0px;"></p>`
                });
            }
           document.getElementById("title").innerHTML = title;

           document.getElementById("tags").innerHTML = tags;
           
           document.getElementById("text`Project`").innerHTML = textProject;
           
           //document.getElementById("imgProject1").style.backgroundImage = 'url("' + imgProject + '");';

           document.getElementById("imgProject1").innerHTML = `<img src="${imgProject} " alt="image project" srcset="" width="70%">`
        if (githubLink) {
            document.getElementById("github").innerHTML = `
            <div align="center" class="socialbtns">
                <ul>
                    <li><a href="${githubLink}" class="fa fa-lg fa-github"></a></li>
                </ul>
            </div>
            `;
        }
        if (title == "Spaceship Acooro 69") {
            document.getElementById("itch_io").innerHTML = `
            <div align="center" class="socialbtns">
                <ul>
                <iframe frameborder="0" src="https://itch.io/embed/1959140" width="552" height="167"><a href="https://yaboiijesse.itch.io/spaceship-acorro69">Spaceship Acorro by Tom Smulders</a></iframe>
                </ul>
            </div>
            `;
        }

    })

}