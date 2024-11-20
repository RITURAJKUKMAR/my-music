let timeLine = document.getElementById("time-line");
timeLine.value = 0;
let songs = ["_Kabhi Jo Badal Barse_ Song Video Jackpot _ Arijit Singh _ Sachiin J Joshi_ Sunny Leone(MP3_70K).mp3",
    "Aashiqui Aa Gayi (Full Video) Radhe Shyam _ Prabhas_ Pooja Hegde _ Mithoon_ Arijit Singh _ Bhushan K(MP3_70K).mp3",
    "Akhiyaan Gulaab (Song)_ Shahid Kapoor_ Kriti Sanon _ Mitraz _ Teri Baaton Mein Aisa Uljha Jiya(MP3_70K).mp3",
    "Badshah - Sajna _ Say Yes To The Dress (Official Video) _ Payal Dev -Top Wedding Song(MP3_70K).mp3",
    "Dance Basanti - Ungli _ Emraan_ Shraddha Kapoor _ Vishal Dadlani_ Anushka Manchanda _ 4K Video(MP3_70K).mp3",
    "Gypsy (Balam Thanedar) - GD Kaur Ft. Pranjal Dahiya _ Dinesh Golan _ Haryanvi Song _ Real Music(MP3_70K).mp3",
    "Jatt Ludhiyane Da - Student Of The Year 2 _ Tiger Shroff_ Tara _ Ananya _Vishal _ Shekhar_ Payal Dev(MP3_70K).mp3",
    "Kar Gayi Chull - Kapoor _ Sons _ Sidharth Malhotra _ Alia Bhatt _ Badshah _ Amaal Mallik _Fazilpuria(MP3_70K).mp3",
    "MASHOOKA (Official Video) _ Rakul Preet Singh _ Asees Kaur _ Dev Negi _ Tanishk Bagchi _ Viruss(MP3_70K).mp3",
    "Saaho_ Bad Boy Song _ Prabhas_ Jacqueline Fernandez _ Badshah_ Neeti Mohan(MP3_70K).mp3",
]
let song = document.getElementById("song");
let songName = document.getElementById("songName");
let PlayerBtn = document.getElementById("Player");
let starting = document.getElementById("starting-time");
let ending = document.getElementById("ending-time");
let off = document.getElementById("volume-off");
let on = document.getElementById("volume-on");
let count = document.getElementById("count");
let songNumber = 0;
let result = false;
starting.innerText = 0.0;
ending.innerText = (song.duration / 60).toFixed(2);

function nextSong() {
    songNumber = (songNumber + 1) % 10;
    song.setAttribute("src", `All Music/${songs[songNumber]}`);
    songName.innerText = songs[songNumber];
    count.innerText = (songNumber + 1) + "/10";
    starting.innerText = 0.0;
    result = true;
    song.play();
}
function prevSong() {
    songNumber = (songNumber - 1) % 10;
    song.setAttribute("src", `All Music/${songs[songNumber]}`);
    songName.innerText = songs[songNumber];
    count.innerText = (songNumber + 1) + "/10";
    starting.innerText = 0.0;
    result = true;
    song.play();
}

function val(onOff) {
    if (onOff == false) {
        song.volume = false;
        off.classList.remove("show");
        off.classList.add("hide");
        on.classList.remove("hide");
        on.classList.add("show");
    }
    else {
        song.volume = true;
        on.classList.remove("show");
        on.classList.add("hide");
        off.classList.remove("hide");
        off.classList.add("show");
    }
}

PlayerBtn.addEventListener("click", () => {
    if (result == false) {
        console.log("play");
        result = true;
        song.play();
    }
    else {
        console.log("pause");
        result = false;
        song.pause();
    }
});

function changePos() {
    let timeChange = document.getElementById("time-line").value;
    song.pause();
    song.currentTime = (timeChange / 100) * song.duration;
    console.log(timeChange);
    song.play();
    result = true;
}

setInterval(() => {
    if (result == true) {
        console.log(timeLine.value, " : ", song.currentTime);
        timeLine.value = (song.currentTime / (song.duration)) * 100;
        starting.innerText = song.currentTime.toFixed(2);
        if (starting.innerText > 60) {
            starting.innerText = (song.currentTime / 60).toFixed(1);
        }
        if (timeLine.value == 100) {
            nextSong();
            console.log("pause");
        }
    }
}, 1000);
