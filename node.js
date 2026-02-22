// total count display call
const total = document.getElementById('total');
const interview = document.getElementById('interview');
const rejected = document.getElementById('rejected');

// allCards section
const allCards = document.getElementById('allCards');
//Interview section
const interviewCards = document.getElementById('interviewCards');
//rejected section
const rejectedCards = document.getElementById('rejectedCards');
// allCards section
const allSection = document.getElementById('allSection');

// interview array ane rejected array
const totalAvNum = document.getElementById('totalAvNum');
const AvailableJobNumber = document.getElementById('AvailableJobNumber');
const interviewAvNUM = document.getElementById('interviewAvNUM');
const rejectedAvNUM = document.getElementById('rejectedAvNUM');



let interviewList = [];
let rejectedList = [];
// let currentStatus = "all" ;

function cardNumberCount() {
    totalAvNum.innerText = allSection.children.length;
    interviewAvNUM.innerText =interviewList.length;
    rejectedAvNUM.innerText =rejectedList.length;
    total.innerText = allSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;

}
cardNumberCount()




// toggle button
const toggleAllBtn = document.getElementById('toggleAllBtn');
const toggleInterviewBtn = document.getElementById('toggleInterviewBtn');
const toggleRejectedBtn = document.getElementById('toggleRejectedBtn');
const oF = document.getElementById('oF');

function toggleClick(id1, id2, id3 ,id4) {
    //    bg add
    toggleAllBtn.classList.add("text-base-500", "bg-base-300");
    toggleInterviewBtn.classList.add("text-base-500", "bg-base-300");
    toggleRejectedBtn.classList.add("text-base-500", "bg-base-300");
    // -----------------------------------------------------------------
    allSection.classList.add('hidden');
    interviewCards.classList.add('hidden');
    rejectedCards.classList.add('hidden');
    // -----------------------------------------------------------------

    interviewAvNUM.classList.add('hidden');
    rejectedAvNUM.classList.add('hidden');
    oF.classList.add('hidden');



    // bg- remove
    toggleAllBtn.classList.remove("text-base-300", "bg-[#3b82f6]");
    toggleInterviewBtn.classList.remove("text-base-300", "bg-[#3b82f6]");
    toggleRejectedBtn.classList.remove("text-base-300", "bg-[#3b82f6]");
    // -----------------------------------------------------------------

    // click
    const click = document.getElementById(id1)
    // currentStatus = id1;
    click.classList.remove("bg-base-300");
    click.classList.add("bg-[#3b82f6]");

    const showClick = document.getElementById(id2)
    showClick.classList.remove("hidden");

    const showNUM = document.getElementById(id3);
    showNUM.classList.remove("hidden");


    const showOF = document.getElementById(id4);
    showOF.classList.remove("hidden");

}


const main = document.getElementById("main_div");

main.addEventListener("click", function (event) {
    if (event.target.classList.contains("dltBtn")) {
        event.target.parentNode.parentElement.remove();
        cardNumberCount();
    }
    cardNumberCount()
});




