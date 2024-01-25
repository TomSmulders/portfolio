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
            var layout = data.img_2_layout;
            var title = data.title;
            var imgUrl = data.img_url;
            var tags_list = data.tags;
            var tags = "";
            var textProject = data.text;
            var imgProject = data.image;
            var youtubeLink = data.youtube;
            var githubLink = data.github;
            var itchIoLink = data.itch_io_link;

            if (tags_list) {
                tags_list.forEach(tag => {
                    tags += `<p class="text-center my-0">${tag}<hr class="mx-auto my-0 text-center"  style="width: 150px;margin-top: 0px;"></p>`
                });
            }

            if(layout){
                document.getElementById("title").innerHTML = title;

                document.getElementById("tags").innerHTML = tags;

                document.getElementById("textProject1").innerHTML = textProject[0];

                document.getElementById("imgProject1").innerHTML = `<img src="${imgProject[0]}" alt="image" srcset="" class="center-image" style="height: 100%;">`
                
                document.getElementById("textProject2").innerHTML = textProject[1];

                document.getElementById("imgProject2").innerHTML = `<img src="${imgProject[1]}" alt="image" srcset="" class="center-image" style="height: 100%;">`
                
                if (imgProject[2]) {
                    document.getElementById("imgProject3").innerHTML = `
                        <img src="${imgProject[2]}" alt="image" srcset="" class="center-image" style=" width: 100%;">
                    `
                    
                    document.getElementById("imgProject4").innerHTML = `
                        <img src="${imgProject[3]}" alt="image" srcset="" class="center-image " style="width: 100%;">
                    `;
                }else{
                    document.getElementById("2-images").remove();
                }


                //replease auto to embed to show on website
                // like this: http://www.youtube.com/embed/GRonxog5mbw?autoplay=1&loop=1&playlist=GRonxog5mbw
                if (youtubeLink) {
                    document.getElementById("youtube").innerHTML = 
                    `<div class="mt-5 project-video project-center-video">
                        <iframe width="100%" height="100%" src="${youtubeLink}" frameborder="0" allowfullscreen allow="autoplay"></iframe>
                    </div>`;
                }
                
                if (githubLink) {
                    document.getElementById("links").innerHTML += `
                        <li><a href="${githubLink}" class="fa fa-github"></a></li>
                    `;
                }

                if (itchIoLink) {
                    document.getElementById("links").innerHTML += `
                        <li><a href="${itchIoLink}" class="fab fa-itch-io"></a></li>
                    `;
                }


            }else{

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
                    <iframe frameborder="0" src="itch_io_code" width="552" height="167"><a href="itch_io_link">Spaceship Acorro by Tom Smulders</a></iframe>
                    </ul>
                </div>
                `;
            }
        }
    })
    

}

