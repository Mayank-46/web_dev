console.log("Welcome to Spotify");
let songIndex=0
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let mastersongName=document.getElementById('mastersongName');
let songs=[
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"},
    {songName:"Namo Namo",FilePath:"songs/2.mp3",CoverPath:"cover.jpg"},
    {songName:"Jaane tu Jaane na",FilePath:"songs/3.mp3",CoverPath:"cover.jpg"},
    {songName:"O khuda",FilePath:"songs/4.mp3",CoverPath:"cover.jpg"},
    {songName:"Kinna Sona",FilePath:"songs/5.mp3",CoverPath:"cover.jpg"},
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"},
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"},
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"},
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"},
    {songName:"Abhi Mujh Mein Kahin",FilePath:"songs/1.mp3",CoverPath:"cover.jpg"}
]
songItem.forEach((element,i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].scr=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})
const makeAllPlays=()=>{
    songItemPlay.forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-pause');
        
    })

}
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        mastersongName.innerText=songs[songIndex].songName;
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
    })

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    mastersongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;

    audioElement.play();
    gif.style.opacity=1;
    mastersongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-pause');
})

