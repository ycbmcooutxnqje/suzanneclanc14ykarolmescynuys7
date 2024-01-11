const argz = new URLSearchParams(window.location.search);
const hlsUrl = argz.get("u");
const postImage = argz.get("i");

document.querySelector(".video-url").src = hlsUrl;

document.getElementById("example-video").poster = postImage;
