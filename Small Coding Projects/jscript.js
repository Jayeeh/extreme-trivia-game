const samsFriends = ["morgan", "riley", "jessie", "skyler", "frankie"];
const ashersFriends = ["morgan", "aiden", "angel", "ariel", "skyler"];

const friendsRecommendationAsher = [];
let currentFriend = "";
for (let i = 0; i < samsFriends.length; i++) {
  currentFriend = samsFriends[i];

  let isCommonFriend = false;
  isCommonFriend = ashersFriends.includes(currentFriend);
  //in this code it will check Ashers friends from Sams Friends - includes will check if it's true or false meaning to say if they have same friend like morgan it will appear to be TRUE or if not like Riley it will be false.
  //console.log(isCommonFriend);

  if(!isCommonFriend) {
    // !isCommonFriend statement will chose to recommend the false data or not included in ashers list of friends like riley, jessie and frankie.
    // if you remove the "!" mark the name that will appear is morgan and skyler.
    friendsRecommendationAsher.push(currentFriend);
    console.log(currentFriend);
  }
}

console.log(`Friends Recommended for Asher:`);
console.log(friendsRecommendationAsher);