function castVote(btn, num) {
  if (votingLocked) return;
  votingLocked = true;

  // Find selected candidate from your list
  const candidate = defaultCandidates.find(c => c.id === num);

  // Send name + image + ward to next page
  const name = encodeURIComponent(candidate.ASHOKAN);
  const photo = encodeURIComponent(Image); // <-- use candidate.photo
  const ward = encodeURIComponent(candidate.ward);

  // Redirect to confirmation page
  window.location.href = `confirm.html?name=${name}&photo=${photo}&ward=${ward}`;
}
