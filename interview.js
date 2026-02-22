
const section = document.querySelector('#allSection');
section.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview_Button')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company_name').innerText;
        const jobRole = parentNode.querySelector('.job_role').innerText;
        const salaryWork = parentNode.querySelector('.salary_work').innerText;
        const NotApplied = parentNode.querySelector('.Not_Applied');
        const jobDescriptions = parentNode.querySelector('.job_descriptions').innerText;

        NotApplied.innerText = "Interview"
        NotApplied.className = "w-[120px] text-center py-1   font-medium border-2 border-dashed border-green-800 bg-green-300 shadow";

        const cardInfo = {
            companyName,
            jobRole,
            salaryWork,
            NotApplied,
            jobDescriptions,

        }
        // console.log(cardInfo);
        const match = interviewList.find(item => item.companyName === cardInfo.companyName);


        if (!match) {
            interviewList.push(cardInfo)
        }
        // console.log(interviewList);
        renderInterviewList()
        cardNumberCount()
    } else if (event.target.classList.contains('rejected_Button')) {
        const parentNode = event.target.parentNode.parentNode.parentNode;

        const companyName = parentNode.querySelector('.company_name').innerText;
        const jobRole = parentNode.querySelector('.job_role').innerText;
        const salaryWork = parentNode.querySelector('.salary_work').innerText;
        const NotApplied = parentNode.querySelector('.Not_Applied');
        const jobDescriptions = parentNode.querySelector('.job_descriptions').innerText;

        NotApplied.innerText = "Rejected"
        NotApplied.className = "w-[120px] text-center py-1   font-medium border-2 border-dashed border-red-800 bg-red-300 shadow";

        const cardInfo = {
            companyName,
            jobRole,
            salaryWork,
            NotApplied,
            jobDescriptions,

        }
        // console.log(cardInfo);
        const match = rejectedList.find(item => item.companyName === cardInfo.companyName);


        if (!match) {
            rejectedList.push(cardInfo)
        }
        // console.log(interviewList);
        renderRejectedList()
        cardNumberCount()
    }



})

function renderInterviewList() {
    interviewCards.innerHTML = '';

    for (let interview of interviewList) {

        let div = document.createElement('div');
        div.className = 'all_cards  flex  justify-between  bg-base-200  shadow rounded-lg p-3 md:p-6';
        div.innerHTML = `
        <div class="space-y-4">
                    <div>
                        <!-- company name  -->
                        <h1 class="company_name  font-medium text-[1.25rem]">
                        ${interview.companyName} </h1>
                        <!-- job role  -->
                        <p class="job_role  font-light"> ${interview.jobRole}</p>
                    </div>
                    <!-- salary and work time  -->
                    <p class="salary_work   text-xs"> ${interview.salaryWork}</p>

                    <!-- apply or reject this screen show  -->
                    <div class="space-y-3">
                        <p id="appliedBtn" class="Not_Applied w-[120px] text-center py-1   font-medium border-2 border-dashed border-green-800 bg-green-300 shadow">
                             ${interview.NotApplied.textContent}
                        </p>
                        <!-- job_descriptions -->
                        <p class="job_descriptions  text-[14px] md:text-[1rem]">
                         ${interview.jobDescriptions}</p>
                    </div>

                    <!-- button main  -->
                    <div class="space-x-3">
                        <!-- interviewButton  -->
                        <button id="interviewButton"
                            class="interview_Button  btn btn-outline btn-success">Interview</button>

                        <!-- rejectedButton  -->
                        <button id="rejectedButton" class="rejected_Button btn btn-outline btn-error">Rejected</button>
                    </div>


                </div>

                <!-- right side dlt btn  -->
                <div class="pt-5  ">
                    <button id="dltBtn" class="btn  hover:bg-red-300 border-[#c10606]  "><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

        `
        // console.log(interview)
        interviewCards.appendChild(div)
    }

}



function renderRejectedList() {
    rejectedCards.innerHTML = '';

    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'all_cards  flex  justify-between  bg-base-200  shadow rounded-lg p-3 md:p-6';
        div.innerHTML = `
        <div class="space-y-4">
                    <div>
                        <!-- company name  -->
                        <h1 class="company_name  font-medium text-[1.25rem]">
                        ${rejected.companyName} </h1>
                        <!-- job role  -->
                        <p class="job_role  font-light"> ${rejected.jobRole}</p>
                    </div>
                    <!-- salary and work time  -->
                    <p class="salary_work   text-xs"> ${rejected.salaryWork}</p>

                    <!-- apply or reject this screen show  -->
                    <div class="space-y-3">
                        <p id="appliedBtn" class="Not_Applied w-[120px] text-center py-1   font-medium border-2 border-dashed border-red-800 bg-red-300 shadow">
                             ${rejected.NotApplied.textContent}
                        </p>
                        <!-- job_descriptions -->
                        <p class="job_descriptions  text-[14px] md:text-[1rem]">
                         ${rejected.jobDescriptions}</p>
                    </div>

                    <!-- button main  -->
                    <div class="space-x-3">
                        <!-- interviewButton  -->
                        <button id="interviewButton"
                            class="interview_Button  btn btn-outline btn-success">Interview</button>

                        <!-- rejectedButton  -->
                        <button id="rejectedButton" class="rejected_Button btn btn-outline btn-error">Rejected</button>
                    </div>


                </div>

                <!-- right side dlt btn  -->
                <div class="pt-5  ">
                    <button id="dltBtn" class="btn  hover:bg-red-300 border-[#c10606]  "><i
                            class="fa-regular fa-trash-can"></i></button>
                </div>

        `
        // console.log(interview)
        rejectedCards.appendChild(div)
    }

}