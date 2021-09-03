
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "外は35度でした。:insertx:は散歩に出かけました。:inserty:に到着すると，けんとくんと一緒に:insertz:。:insertx:は:inserta:。"
insertX = ['まいはうすちゃん','かっほちゃん','ずるこちゃん'];
insertY = ['ディズニーランド', 'モレラ岐阜','ケーズデンキ'];
insertZ = ['警察に連れて行かれました','ショッピングを楽しみました','お店には入らずずっと車の中にいました'];
insertA = ['満足な顔をしていました', '不満な顔をしていました', 'それなりに楽しかったようです'];
let tmpStory;


randomize.addEventListener('click', result);

function result() {
    console.log('Button was pushed.')
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    let aItem = randomValueFromArray(insertA);

    tmpStory = newStory.replace(':insertx:', xItem);
    tmpStory = tmpStory.replace(':insertx:', xItem);
    tmpStory = tmpStory.replace(':inserty:', yItem);
    tmpStory = tmpStory.replace(':insertz:', zItem);
    tmpStory = tmpStory.replace(':inserta:', aItem);

    if(customName.value !== '') {
        let name = customName.value;
        tmpStory = tmpStory.replace('けんとくん', name);
    }

    if(document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature =  Math.round(94);

    }

    story.textContent = tmpStory;
    story.style.visibility = 'visible';
}
