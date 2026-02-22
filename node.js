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


let interviewList = [];
let rejectedList = [];
// let currentStatus = "all" ;

function cardNumberCount() {
    total.innerText = allSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
cardNumberCount()


// toggle button
const toggleAllBtn = document.getElementById('toggleAllBtn');
const toggleInterviewBtn = document.getElementById('toggleInterviewBtn');
const toggleRejectedBtn = document.getElementById('toggleRejectedBtn');

function toggleClick(id1, id2) {
    //    bg add
    toggleAllBtn.classList.add("text-base-500", "bg-base-300");
    toggleInterviewBtn.classList.add("text-base-500", "bg-base-300");
    toggleRejectedBtn.classList.add("text-base-500", "bg-base-300");
    // -----------------------------------------------------------------
    allSection.classList.add('hidden')
    interviewCards.classList.add('hidden')
    rejectedCards.classList.add('hidden')


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

}












