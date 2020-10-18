const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", ]; /* Onde colocar os IDS dos sons*/

sounds.forEach((sound) => {
    const btn = document.createElement("button"); /* Cria um Botao*/
    btn.classList.add("btn"); /*Usa a Class btn*/

    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}