var styleEl = document.createElement('style');
styleEl.innerHTML = '#fun-pen {'
  +  'display: flex;  width: 300px; flex-direction: row; border: 0px solid white; border-radius:10px}'
  +  ' .pen-typical {'
  +  'flex:1; height: 30px; margin: 0px;'
  +  'background-color: black; border: 0px solid black;'
  +  'border-radius: 10px;transition: flex 1s, transform 0.5s;} '
  +  '.pen-hidden {'
  +'transform:translate(10px, 20px) rotate(90deg);'
  + 'flex: 1; transition:  transform 0.5s, flex 2s;'  
  +'}'
document.head.appendChild(styleEl);
const colors = [
  '#4600FF',
  '#5700FF',
  '#6900FF',
  '#7B00FF',
  '#8C00FF',
  '#9E00FF',
  '#AF00FF',
  '#C100FF',
  '#D300FF',
  '#E400FF',
  '#F600FF',
  '#FF00F7',
  '#FF00E5',
  '#FF00D4',
  '#FF00C2',
  '#FF00B0',
  '#FF009F',
  '#FF008D',
  '#FF007C',
  '#FF006A',
  '#FF0058',
  '#FF0047',
  '#FF0035',
  '#FF0024',
  '#FF0012',
  '#FF0000'
]
let length = 25
let divs = []
for (let i = 0; i < length; i++) {
  divs.push(document.createElement('div'))
  divs[i].classList.add('pen-hidden')
  divs[i].classList.add('pen-typical')
  divs[i].style.backgroundColor = colors[(length-i)]
  document.getElementById('fun-pen').appendChild(divs[i]);
}
let avgSpeed = 0
let xOrigin = 0
let yOrigin = 0
function createGetMouseSpeed() {
  let timeOuter = Date.now()
  function getMouseSpeed(event) {
    let xNew = event.clientX;
    let yNew = event.clientY;
    let deltaX = xNew - xOrigin
    let deltaY = yNew - yOrigin
    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY)
    let timeInner = Date.now()
    let deltaTime = timeInner - timeOuter
    let newSpeed = distance / deltaTime
    let temp = avgSpeed
    avgSpeed = (avgSpeed*199 + newSpeed)/200
    for (let j = 0; j < length; j++){
      divs[j].classList.add('pen-hidden')
    }
    for (let j = 0; j < Math.min(length, (avgSpeed)*length - 8); j++){
      divs[j].classList.remove('pen-hidden')
    }
    xOrigin = xNew
    yOrigin = yNew
    timeOuter = timeInner
  }
  return getMouseSpeed
}
document.addEventListener('pointermove', createGetMouseSpeed())