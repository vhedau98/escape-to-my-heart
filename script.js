let current = 0;

const title = document.getElementById("roomTitle");
const desc = document.getElementById("roomDesc");
const clue = document.getElementById("clue");
const msg = document.getElementById("msg");

function loadRoom() {
  title.innerText = rooms[current].title;
  desc.innerText = rooms[current].desc;
  clue.innerText = rooms[current].clue;
  msg.innerText = "";
  document.getElementById("answer").value = "";
}

loadRoom();

function unlock() {
  const input = document.getElementById("answer").value.toLowerCase().trim();

  if (input === rooms[current].answer) {
    msg.innerText = "💗 Correct… unlocking the next memory";

    setTimeout(() => {
      current++;
      if (current < rooms.length) {
        loadRoom();
      } else {
        finalScene();
      }
    }, 1000);
  } else {
    msg.innerText = "🙈 Hehe… try again, love";
  }
}

function finalScene() {
  document.body.innerHTML = `
    <div class="room">
      <h1>💍 You Escaped…</h1>
      <p>But honestly?</p>
      <p><strong>You already live in my heart.</strong></p>
      <p style="margin-top:15px;">I made this just to say…</p>
      <h2 style="color:#ff5fa2;">I love you 💖</h2>
      <p style="margin-top:10px;">Forever your safe place.</p>
    </div>
  `;
}
