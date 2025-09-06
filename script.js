const createElements = (arr) => {
  const htmlElements = arr.map(el => `<span class = "btn">${el} </span>`);
 return(htmlElements.join(" "))
}

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

const manageSpinner = (status) => {
    if(status == true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('word-container').classList.add('hidden')
    }
    else{
         document.getElementById('spinner').classList.add('hidden')
        document.getElementById('word-container').classList.remove('hidden')
    }
}



const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) => res.json())   // promise of json data
    .then(json => displayLessons(json.data))
}
loadLessons();

const removeActive = () => {
const lessonButtons = document.querySelectorAll('.lesson-btn')
lessonButtons.forEach((btn) => btn.classList.remove("active"))
}


const loadLevelWord = (id) => {
    manageSpinner(true)
const url = `https://openapi.programming-hero.com/api/level/${id}`;
fetch(url)
.then(res => res.json())
.then((data) => {
     removeActive(); //remove all active classes
const clickBtn = document.getElementById(`level-btn-${id}`);
clickBtn.classList.add("active"); //add active class clicked buttons
 displayLevelWord(data.data)
})
}

const loadWordDetail = async(id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    const res = await fetch(url);
    const details = await res.json()
    displayWordDetails(details.data)
}
const displayWordDetails = (word) => {
    console.log(word)
const detailsBox = document.getElementById('details-container')
 detailsBox.innerHTML = `
<div class="">
    <div>
        <h1 class="font-semibold text-[36px] my-5">${word.word}: ${word.pronunciation}</h1>
        <p class="font-semibold text-[24px] ">Meaning</p>
        <p class="text-[24px] mt-2 mb-3">${word.meaning}</p>
        <p class="font-semibold text-[24px] mt-4 mb-2">Example</p>
        <p class="text-[24px] text-gray-500 mt-2 mb-5">${word.sentence}</p>
        <p  class="text-[24px] mt-3">সমার্থক শব্দ গুলো</p>
         <h2 class="font-bold">Synonym</h2>
        <div class="flex gap-3 mb-3">
       
            <div class="bg-[#ddefff]  p-3 rounded-lg">${createElements(word.synonyms)}</div>

        </div>
        <form method="dialog">
       <button class="btn btn-primary my-4 btn">Complete learning</button>
       
      </form> 


        
    </div>
</div>
`
document.getElementById('word_modal').showModal();
}

const displayLevelWord = (words) => {
// get the element 
const wordContainer = document.getElementById('word-container')
wordContainer.innerHTML = '';

if(words.length == 0){
   
    wordContainer.innerHTML = `
        <div class="text-center bg-[#F8F8F8] col-span-full rounded-md py-10  font-bangla ">
        <img src="assets/alert-error.png" alt="" class = "ml-[550px]">
        <p class="text-[#79716B] ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-[#292524] font-semibold text-[30px] ">নেক্সট Lesson এ যান</h1>

    </div>
    `;
    manageSpinner(false);
    return;
}

 words.forEach((word)=> {
    const wordContainerDiv = document.createElement('div')
    wordContainerDiv.innerHTML =`
               <div class="bg-white mx-3 shadow-lg rounded-lg ">
        <div class="text-center mt-4 ">
            <h1 class="font-bold text-[32px]">${word.word ? word.word : "The word is not founded"}</h1>
            <p class="my-3">${word.pronunciation ? word.pronunciation : "The word pronunciation is not founded"}</p>
            <p class="font-semibold text-[32px]">"${word.meaning ? word.meaning : "The word meaning is not founded" }" </p>
        </div>
        <div class="flex justify-between items-center text-[#38354d] m-3 ">
            
             <button onclick="loadWordDetail(${word.id})" class="bg-[#ddefff] hover:bg-[#68b9ff] p-3 rounded-sm">
                <i class="fa-solid fa-circle-info "></i>
            </button>
                <button onclick = "pronounceWord('${word.word}')" class="bg-[#ddefff] hover:bg-[#68b9ff] p-3 rounded-sm">
                  <i class="fa-solid fa-volume-high"></i>
                </button>
                  
                </div>
        </div>
    `;

    wordContainer.appendChild(wordContainerDiv)
 })
 manageSpinner(false);
}

const displayLessons = (lessons) => {
// 1. get the container & empty 
const levelContainer = document.getElementById('level-container')
levelContainer.innerHTML = '';
// 2. get into every lessons
lessons.forEach(lesson => {
    // 3. create lessons 
    const btnDiv = document.createElement('div')
    btnDiv.innerHTML = `
    <button id = "level-btn-${lesson.level_no}"  onclick = "loadLevelWord(${lesson.level_no})" class="flex border-1 text-[14px] border-[#422AD5] w-[120px] h-10 p-2 rounded-md text-[#422AD5] lesson-btn">  <p class=""><i class="fa-solid fa-book-open"> </i> Lesson - ${lesson.level_no}</p></button>
    `;
    // 4. apend into container 
    levelContainer.appendChild(btnDiv)

});


}

document.getElementById('btn-search').addEventListener('click', () => {
    removeActive();
    const input = document.getElementById('input-search')
    const searchValue = input.value.trim().toLowerCase();
    console.log(searchValue)

    fetch('https://openapi.programming-hero.com/api/words/all')
    .then((res) => res.json())
    .then(data => {
        const allWords = data.data;
        console.log(allWords)
        const filterWords = allWords.filter(word => word.word.toLowerCase().includes(searchValue))
        displayLevelWord(filterWords)
    })
})