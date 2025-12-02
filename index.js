let votingLocked = false;

const defaultCandidates = [
  { id: 1, name: "Ashwini", photo: "images/Hand_INC.jpg" },
  { id: 2, name: "Pramod", photo: "images/Lotus_BJP.jpg" },
  { id: 3, name: "Rahim", photo: "images/Scythe_CPM.jpg" },
  { id: 4, name: "Suhail", photo: "images/Elephant_BSP.jpg" },
  { id: 5, name: "Biju", photo: "images/Mango_IND.jpg" }
    { id: 6, name: "Biju", photo: "images/Mango_IND.jpg" }
  { id: 7, name: "Biju", photo: "images/Mango_IND.jpg" }
  { id:8, name: "Biju", photo: "images/Mango_IND.jpg" }
  { id: 9, name: "", photo: "i" 
  // add your full list here…
];

function castVote(btn, num) {
  if (votingLocked) return;
  votingLocked = true;

  const candidate = defaultCandidates.find(c => c.id === num);

  if (!candidate) {
    alert("Candidate not found!");
    return;
  }

  const name = encodeURIComponent(candidate.name);
  const photo = encodeURIComponent(candidate.photo);
  const ward = 1;            // Change if needed
  const number = candidate.id;

  window.location.href =
    `confirm.html?name=${name}&photo=${photo}&ward=${ward}&number=${number}`;
}
