var songroom = document.querySelector("#songs");
var searchsongs=document.querySelector("#searchsongs");
var search =document.querySelector("#search");
var enter =document.querySelector("#enter");
  const songContainer = document.getElementById('song-container');
  const aprl ='https://deezerdevs-deezer.p.rapidapi.com/search?q=song';  // Example endpoint for searching songs
  // Replace 'YOUR_RAPIDAPI_KEY' with your actual RapidAPI key
  var limit=22;
  window.addEventListener("load",()=>{


  const rapidApiKey = 'f8f15b92eamsh69750d54920ffb6p11e1b2jsn9c8fab99fa0f';
  const apiUrl=`https://deezerdevs-deezer.p.rapidapi.com/search?q=guc`;  // Example endpoint for searching songs

  // Fetch songs from the RapidAPI endpoint
  fetch(apiUrl, {
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
    },
  })
    .then(response => response.json())
    .then(async data => {
      var result =await data;
      console.log(result)
      // Process the data and display each song
      result.data.forEach(song => {
        console.log(song)
           var div1 = document.createElement("div");
                div1.setAttribute("id","divmom");
                div1.classList.add("card");
                songContainer.appendChild(div1);
                var img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = song.artist.picture_big;
                div1.appendChild(img);
                var div2 = document.createElement("div");
                div2.classList.add("ard-body")
                div1.appendChild(div2);
                var h5 = document.createElement("h5");
                h5.classList.add("card-title");
                h5.textContent = song.album.title;
                div2.appendChild(h5);
                var audio = document.createElement("audio");
                audio.setAttribute("controls", "controls");
                audio.innerText = "your browser do not support playing this audio";
                div2.appendChild(audio);
                var source1 = document.createElement("source");
                source1.src = song.artist.name;
                source1.type = "audio/mpeg";
                audio.appendChild(source1);
            
                var source2 = document.createElement("source");
                source2.src = song.preview;
                source2.type = "audio/wav";
                audio.appendChild(source2);
                var p = document.createElement("p");
                p.classList.add("card-subtitle");
                p.innerHTML = song.artist.name;
                div2.appendChild(p);
                var a = document.createElement("a");
                a.href= song.perview;
                a.download = true;
                a.classList.add("btn")
                a.classList.add("btn-primary");
                a.innerHTML="download";
                div2.appendChild(a)
         
                

      });
    })
    .catch(error => console.error('Error fetching songs:', error));

})

  // result.forEach(data => {
  //       var div1 = document.createElement("div");ss
  //       div1.classList.add("card");
  //       songroom.appendChild(div1);
  //       var img = document.createElement("img");
  //       img.classList.add("card-img-top");
  //       img.src = data.image.picture_big;
  //       div1.appendChild(img);
  //       var div2 = document.createElement("div");
  //       div2.classList.add("ard-body")
  //       div1.appendChild(div2);
  //       var h5 = document.createElement("h5");
  //       h5.classList.add("card-title");
  //       h5.textContent = data.title;
  //       div2.appendChild(h5);
  //       var audio = document.createElement("audio");
  //       audio.setAttribute("controls", "controls");
  //       audio.innerText = "your browser do not support playing this audio";
  //       div2.appendChild(audio);
  //       var source1 = document.createElement("source");
  //       source1.src = data.song;
  //       source1.type = "audio/mpeg";
  //       audio.appendChild(source1);
    
  //       var source2 = document.createElement("source");
  //       source2.src = data.song;
  //       source2.type = "audio/wav";
  //       audio.appendChild(source2);
  //       var p = document.createElement("p");
  //       p.classList.add("card-subtitle");
  //       p.innerHTML = data.name;
  //       div2.appendChild(p);
  //       var a = document.createElement("a");
  //       a.href= data.song;
  //       a.download = true;
  //       a.classList.add("btn")
  //       a.classList.add("btn-primary");
  //       a.innerHTML="download";
  //       div2.appendChild(a)
  //   })
   
  // }

        const searchForm = document.getElementById('searchForm');
    
        searchForm.addEventListener('submit', async (event) => {
          event.preventDefault();
        
          var query = document.getElementById('search').value;
          const rapidApiKey = 'f8f15b92eamsh69750d54920ffb6p11e1b2jsn9c8fab99fa0f';
          const apiUrl=`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;  // Example endpoint for searching songs

          if(query=="ultimate source by desprate heart"|| query=="ultimate by desprate heart"){
            document.getElementById("hide1").style.display="none";
           document.getElementById("hide2").style.display="block";

        
          // Fetch songs from the RapidAPI endpoint
          fetch(apiUrl, {
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
            },
          })
            .then(response => response.json())
            .then(async data => {
              var result =await data;
              renderSearchResults(result);
            })
   
          }else if(query=="daily Communion by desprate heart"||query=="daily communion by desprate heart"||query=="Communion by desprate heart" ||query== "daily by desprate heart"){
           document.getElementById("hide2").style.display="none";
           document.getElementById("hide1").style.display="block";
          // Fetch songs from the RapidAPI endpoint
          fetch(apiUrl, {
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
            },
          })
            .then(response => response.json())
            .then(async data => {
              var result =await data;
              renderSearchResults(result);
            })

          }else if(query=="desprate heart"|| query=="desprate qoters"|| query=="minster desprate heart"){
            document.getElementById("hide2").style.display="block";
            document.getElementById("hide1").style.display="block";
            fetch(apiUrl, {
              headers: {
                'X-RapidAPI-Key': rapidApiKey,
              },
            })
              .then(response => response.json())
              .then(async data => {
                var result =await data;
                renderSearchResults(result);
              })
     
          }
          else{
            document.getElementById("hide2").style.display="none";
           document.getElementById("hide1").style.display="none";
          // Fetch songs from the RapidAPI endpoint
          fetch(apiUrl, {
            headers: {
              'X-RapidAPI-Key': rapidApiKey,
            },
          })
            .then(response => response.json())
            .then(async data => {
              var result =await data;
              renderSearchResults(result);
            })

          }
        });
      
        function renderSearchResults(data) {
      if( searchsongs.children.length<0){ 
        var div1 = document.createElement("div");
        div1.classList.add("card");
        document.querySelectorAll("#divmom").forEach(mom=>{
          searchsongs.removeChild(mom)
        })
          data.data.forEach((song) => {
           var div1 = document.createElement("div");
           div1.setAttribute("id","divmom");
        div1.classList.add("card");
        searchsongs.appendChild(div1);
        var img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = song.artist.picture_big;
        div1.appendChild(img);
        var div2 = document.createElement("div");
        div2.classList.add("ard-body")
        div1.appendChild(div2);
        var h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = song.album.title;
        div2.appendChild(h5);
        var audio = document.createElement("audio");
        audio.setAttribute("controls", "controls");
        audio.innerText = "your browser do not support playing this audio";
        div2.appendChild(audio);
        var source1 = document.createElement("source");
        source1.src = song.artist.name;
        source1.type = "audio/mpeg";
        audio.appendChild(source1);
    
        var source2 = document.createElement("source");
        source2.src = song.preview;
        source2.type = "audio/wav";
        audio.appendChild(source2);
        var p = document.createElement("p");
        p.classList.add("card-subtitle");
        p.innerHTML = song.artist.name;
        div2.appendChild(p);
        var a = document.createElement("a");
        a.href= song.perview;
        a.download = true;
        a.classList.add("btn")
        a.classList.add("btn-primary");
        a.innerHTML="download";
        div2.appendChild(a)

          });
          console.log(searchsongs.childNodes[0].id)

             }else{
              console.log(searchsongs.childNodes[0].id)

              data.data.forEach((song) => {
                var div1 = document.createElement("div");
                div1.setAttribute("id","divmom");
                div1.classList.add("card");
                searchsongs.appendChild(div1);
                var img = document.createElement("img");
                img.classList.add("card-img-top");
                img.src = song.artist.picture_big;
                div1.appendChild(img);
                var div2 = document.createElement("div");
                div2.classList.add("ard-body")
                div1.appendChild(div2);
                var h5 = document.createElement("h5");
                h5.classList.add("card-title");
                h5.textContent = song.album.title;
                div2.appendChild(h5);
                var audio = document.createElement("audio");
                audio.setAttribute("controls", "controls");
                audio.innerText = "your browser do not support playing this audio";
                div2.appendChild(audio);
                var source1 = document.createElement("source");
                source1.src = song.artist.name;
                source1.type = "audio/mpeg";
                audio.appendChild(source1);
            
                var source2 = document.createElement("source");
                source2.src = song.preview;
                source2.type = "audio/wav";
                audio.appendChild(source2);
                var p = document.createElement("p");
                p.classList.add("card-subtitle");
                p.innerHTML = song.artist.name;
                div2.appendChild(p);
                var a = document.createElement("a");
                a.href= song.perview;
                a.download = true;
                a.classList.add("btn")
                a.classList.add("btn-primary");
                a.innerHTML="download";
                div2.appendChild(a)
         
                  });
         
              //g
        }
      }  
      
/*<div class="card" style="width: 20rem; margin: 2px 28px 2px 28px;">
<img src="./images/victory.jpeg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Victory Dance</h5>
                        <audio controls>
                          <source src="./music/Anthony-Kani-What-A-Beauty-To-Behold.mp3" type="audio/mpeg">
                          <source src="./music/Anthony-Kani-What-A-Beauty-To-Behold.mp3" type="audio/wav">
                        Your browser does not support the audio element.
                        </audio>
                         <p class="card-subtitle" style="color: white;">Okpoi Peterson</p>
                        <a href="#" class="btn btn-primary">download</a>
                    </div>
                </div>
                 */

