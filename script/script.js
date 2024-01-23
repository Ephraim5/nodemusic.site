var fileImg= document.getElementById("fileImg");
var profileImg= document.getElementById("profileImg");
var profile= document.getElementById("profile");
var musicProfile= document.getElementById("musicProfile");
var imgimg= document.getElementById("imgimg");

fileImg.addEventListener("change",(e)=>{
    profileImg.src="images/loading.gif";
    var image=e.target.files[0];
   switch (e.target.files[0].type) {
    case "image/jpeg":
        setTimeout(()=>{
            console.log("is jpeg")
            profileImg.src=URL.createObjectURL(image);
        },3000)
        break;
   
    case "image/jpg":
        setTimeout(()=>{
            console.log("is jpg")
            profileImg.src=URL.createObjectURL(image);
        },3000)
        break;
   
    case "image/png":
        setTimeout(()=>{
            profileImg.src=URL.createObjectURL(image);
        },3000)
        break;
   
    case "image/gif":
        setTimeout(()=>{
            profileImg.src=URL.createObjectURL(image);
        },3000)
        break;
   
    case "image/icon":
        setTimeout(()=>{
            profileImg.src=URL.createObjectURL(image);
        },3000)
        break;
   
    default:
        setTimeout(()=>{
            profileImg.src="images/album2.jpg";
            alert("not allowed only images are allowed");
        },3000)
        break;
   }
  
})
profile.addEventListener("change",(e)=>{
    musicProfile.src="images/loading.gif";
    var image=e.target.files[0];
    imgimg.value=image;
    switch (e.target.files[0].type) {
     case "image/jpeg":
         setTimeout(()=>{
             console.log("is jpeg")
             musicProfile.src=URL.createObjectURL(image);
         },3000)
         break;
    
     case "image/jpg":
         setTimeout(()=>{
             console.log("is jpg")
             musicProfile.src=URL.createObjectURL(image);
         },3000)
         break;
    
     case "image/png":
         setTimeout(()=>{
             musicProfile.src=URL.createObjectURL(image);
         },3000)
         break;
    
     case "image/gif":
         setTimeout(()=>{
             musicProfile.src=URL.createObjectURL(image);
         },3000)
         break;
    
     case "image/icon":
         setTimeout(()=>{
             musicProfile.src=URL.createObjectURL(image);
         },3000)
         break;
    
     default:
         setTimeout(()=>{
             musicProfile.src="images/uploadimage.png";
             alert("not allowed only images are allowed");
         },3000)
         break;
    }
   
})