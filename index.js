const notify = document.querySelector(".notify");
const albums = document.querySelectorAll(".album");
const saveBtn = document.querySelector(".button");
let itemsTotal = document.querySelector(".items-total");

let albumsSelected = [];

function selectAlbums() {
  albums.forEach((album, i) => {
    album.addEventListener("click", function (e) {
      const albumTitle = album.querySelector(".title").textContent;

      if (!album.classList.contains("selected")) {
        album.classList.add("selected");
        albumsSelected.push(albumTitle);
      } else if (album.classList.contains("selected")) {
        album.classList.remove("selected");
        albumsSelected = albumsSelected.filter((selected) => {
          return selected !== albumTitle;
        });
      }
    });
  });
}

function saveSelections() {
  saveBtn.addEventListener("click", function () {
    itemsTotal.innerHTML = `${albumsSelected.length} items saved`;
    if (albumsSelected.length > 0) {
      notify.classList.add("active");
    } else {
      notify.classList.remove("active");
    }

    setTimeout(() => {
      notify.classList.remove("active");
    }, 2000);
  });
}

selectAlbums();
saveSelections();
