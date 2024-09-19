let votes = [
    9,9,6,1,10,5,9,10,8,2,9,6,6,6,10,2,8,9,6,4,8,3,7,1,7,3,10,9,1,3,9,9,5,1,3,3,5,10,
    3,7,9,5,5,6,9,9,2,10,3,2,10,9,6,9,8,9,6,8,6,4,6,1,4,10,7,5,6,5,7,7,6,10,5,9,2,6,2,
    10,2,2,5,9,4,1,7,5,4,7,6,3,6,3,3,4,3,6,8,6,8,5
  ];
  const numCandidates = 10;
  
  let voteCounts = new Array(numCandidates).fill(0);
  
  let index = 0;
  while (index < votes.length) {
    let vote = votes[index];
    if (vote >= 1 && vote <= numCandidates) {
      voteCounts[vote - 1]++;  
    }
    index++;
  }
  
  let winnerIndex = 0;
  let maxVotes = voteCounts[0];
  for (let i = 1; i < numCandidates; i++) {
    if (voteCounts[i] > maxVotes) {
      maxVotes = voteCounts[i];
      winnerIndex = i;
    }
  }
  
  console.log("Votes per candidate:");
  for (let i = 0; i < numCandidates; i++) {
    console.log(`Candidate ${i + 1}: ${voteCounts[i]} votes`); // Fixed template literal
  }
  
  console.log(`\nThe winner is Candidate ${winnerIndex + 1} with ${maxVotes} votes.`); // Fixed template literal
  