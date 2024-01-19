const typewritterText = document.querySelectorAll(".modal-welcome__text");
const continueButton = document.querySelector(".modal-welcome__text-continue");
const song01 = document.querySelector("#song-01");
const trailer = document.querySelector("#trailer");
const muteButton = document.querySelector("#mute-button");
const fullscreenButton = document.querySelector("#fullscreen-button");
const trailerMenu = document.querySelector(".trailer__button-container");
const trailerMovie = document.querySelector("#trailer-movie");
const trailerThumbs = document.querySelectorAll(".trailer-thumb");
const videoContainer = document.querySelector(".video-container");
const typingSound = document.querySelector("#typing-sound");
const modalWelcome = document.querySelector(".modal-welcome");
const modalText = document.querySelector(".modal-welcome__text-container");
const buttonForwards = document.querySelectorAll(".backwards");
const buttonBackwards = document.querySelectorAll(".forward");
const characters = document.querySelectorAll(".character");
const characterName = document.querySelectorAll(".name");
const pages = document.querySelectorAll(".page");
const characterContainers = document.querySelectorAll(".characters-container");
const languageButton = document.querySelector("#language-button");
const musicButton = document.querySelector("#music-button");
const mobile = document.querySelector("#mobile");
const trailerMobile = document.querySelector("#trailer-mobile");
const trailerMovieMobile = document.querySelector("#trailer-movie-mobile");

console.log("Window width:", window.innerWidth);

console.log(pages);

let visited = false;
let currentPage = 1;

const hasVisited = JSON.parse(localStorage.getItem("visited"));

function updatePage(page) {
  if (page > 3) {
    currentPage = 1;
  }

  if (page < 1) {
    currentPage = pages.length;
  }

  if (page === 1) {
    trailer.classList.remove("hidden");
  }

  for (let i = 0; i < pages.length; i++) {
    if (i === currentPage - 1) {
      pages[i].classList.remove("hidden");
    } else {
      pages[i].classList.add("hidden");
    }
  }
}

if (hasVisited) {
  modalText.style.display = "none";
  modalWelcome.style.display = "none";
  pages[0].classList.remove("hidden");
  videoContainer.classList.remove("hidden");
  trailerMenu.classList.remove("hidden");
  trailer.play();
  document.addEventListener("keydown", function (event) {
    if (event.key === "D" || event.key === "d") {
      currentPage++;
      updatePage(currentPage);
    }
    if (event.key === "A" || event.key === "a") {
      currentPage--;
      updatePage(currentPage);
    }
  });
}

let trailerPlaying = "anime";

setTimeout(() => {
  typewritterText[1].classList.remove("hidden");
  typewritterText[0].style.animation = "none";
  typewritterText[0].style.border = "none";
}, 2000);

setTimeout(() => {
  typewritterText[2].classList.remove("hidden");
  typewritterText[1].style.animation = "none";
  typewritterText[1].style.border = "none";
}, 4000);

setTimeout(() => {
  continueButton.classList.remove("hidden");
  document.addEventListener("keydown", function (event) {
    if (event.key === "E" || event.key === "e") {
      modalText.style.display = "none";
      modalWelcome.style.display = "none";
      typewritterText.forEach((text) => {
        continueButton.classList.add("hidden");
        text.classList.add("hidden");
        videoContainer.classList.remove("hidden");
        trailerMenu.classList.remove("hidden");
        trailer.play();
        document.body.style.backgroundImage = 'url("./assets/background.gif")';
        document.body.style.backgroundSize = "cover";
        visited = true;
        localStorage.setItem("visited", JSON.stringify(visited));
      });
    }
  });
}, 6200);

muteButton.addEventListener("click", function () {
  if (trailerPlaying === "anime") {
    trailer.muted = !trailer.muted;
    muteButton.innerHTML = trailer.muted
      ? '<i class="ph ph-speaker-simple-slash trailer__button"></i>'
      : '<i class="ph ph-speaker-none trailer__button"></i>';
  } else {
    trailerMovie.muted = !trailerMovie.muted;
    muteButton.innerHTML = trailerMovie.muted
      ? '<i class="ph ph-speaker-simple-slash trailer__button"></i>'
      : '<i class="ph ph-speaker-none trailer__button"></i>';
  }
});

fullscreenButton.addEventListener("click", function () {
  if (trailerPlaying === "anime") {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (trailer.requestFullscreen) {
        trailer.requestFullscreen();
      } else if (trailer.mozRequestFullScreen) {
        trailer.mozRequestFullScreen();
      } else if (trailer.webkitRequestFullscreen) {
        trailer.webkitRequestFullscreen();
      } else if (trailer.msRequestFullscreen) {
        trailer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  } else {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (trailer.requestFullscreen) {
        trailerMovie.requestFullscreen();
      } else if (trailerMovie.mozRequestFullScreen) {
        trailerMovie.mozRequestFullScreen();
      } else if (trailerMovie.webkitRequestFullscreen) {
        trailerMovie.webkitRequestFullscreen();
      } else if (trailerMovie.msRequestFullscreen) {
        trailerMovie.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
});

trailerThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    if (thumb.dataset.trailer === "movie") {
      trailer.classList.add("hidden");
      trailer.pause();
      trailer.currentTime = 0;
      trailerMovie.classList.remove("hidden");
      trailerMovie.play();
      muteButton.innerHTML = trailerMovie.muted
        ? '<i class="ph ph-speaker-simple-slash trailer__button"></i>'
        : '<i class="ph ph-speaker-none trailer__button"></i>';
      trailerPlaying = "movie";
      console.log(trailerPlaying);
    } else {
      trailer.classList.remove("hidden");
      trailerMovie.pause();
      trailerMovie.currentTime = 0;
      trailerMovie.classList.add("hidden");
      trailer.play();
      muteButton.innerHTML = trailer.muted
        ? '<i class="ph ph-speaker-simple-slash trailer__button"></i>'
        : '<i class="ph ph-speaker-none trailer__button"></i>';
      trailerPlaying = "anime";
      console.log(trailerPlaying);
    }
  });
});

buttonForwards.forEach((button) => {
  button.addEventListener("click", () => {
    currentPage++;
    updatePage(currentPage);
  });
});
buttonBackwards.forEach((button) => {
  button.addEventListener("click", () => {
    currentPage--;
    updatePage(currentPage);
  });
});

characters.forEach((character) => {
  character.addEventListener("mouseover", () => {
    const name = character.getAttribute("character-name");
    characterName.forEach((text) => {
      text.innerHTML = `${name}`;
    });
  });
});

characterContainers.forEach((container) => {
  container.addEventListener("mouseout", () => {
    characterName.forEach((text) => {
      text.innerHTML = `Choose Your Character`;
    });
  });
});

languageButton.addEventListener("click", () => {});
musicButton.addEventListener("click", () => {
  if (song01.paused) {
    song01.play();
  } else {
    song01.pause();
  }
});

trailer.addEventListener("click", () => {
  trailerMobile.play();
  trailerMobile.requestFullscreen();
});
trailerMovie.addEventListener("click", () => {
  trailerMovieMobile.play();
  trailerMovieMobile.requestFullscreen();
});
