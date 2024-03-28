//////////////////////////////////////////////////////
// Name: Ayush Panday
// Course: INFT-1206-05-Web Development Fundamentals
// This is the main js file for the part one.
/////////////////////////////////////////////////////


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//required constants
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin","Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//event listner and partial function
randomize.addEventListener('click', result);

function result() {
    newStory = newStory
                .replaceAll(":insertx:", xItem)
                .replace(":inserty:", yItem)
                .replace(":insertz:", zItem);

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory= newStory;

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300/14)} stones`;
    const temperature = `${Math.round((94-32)*(5/9))} centigrades`;

    //replacements
    newStory = newStory
                .replace("300 pounds", weight)
                .replace("94 fahrenheit", temperature)

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}