const questionAns = document.getElementById("Question-Ans");
if (questionAns) {
    questionAns.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
}
const backToDesk = document.getElementById("Back-to-desk");
if (backToDesk) {
    backToDesk.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}

const taskAssigned = document.getElementById("task-assigned");
const completedTasks = document.getElementById("completed-tasks");
const completedBtns = document.querySelectorAll(".completed-btn");
const activityLog = document.getElementById("activity-log");
for (let completedBtn of completedBtns) {
    completedBtn.addEventListener("click", function (event) {
        alert("Board Updated Successfully!");
        event.target.disabled = true;
        event.target.style.backgroundColor = "gray";
        event.target.style.opacity = "1";
        let taskCount = parseInt(taskAssigned.innerText);
        let completedTaskCount = parseInt(completedTasks.innerText);
        if (taskCount > 0) {
            taskCount--;
            completedTaskCount++;
            taskAssigned.innerText = taskCount;
            completedTasks.innerText = completedTaskCount;
            if (taskCount === 0) {
                alert("Congrats! You've Completed All the Tasks.");
            }
        }
        const createParagraphTag = document.createElement("p");
        createParagraphTag.classList.add("bg-slate-200", "shadow-md", "rounded-lg", "p-4", "my-4");
        createParagraphTag.innerText = `You've Completed the Task: ${event.target.dataset.task} at ${new Date().toLocaleTimeString()}`;
        activityLog.appendChild(createParagraphTag);
    });
};

const clearHistoryBtn = document.getElementById("clear-history");
clearHistoryBtn.addEventListener("click", function () {
    activityLog.innerText = "";
});

const themeButton = document.getElementById("theme-btn");
const colors = [
    "rgba(255, 0, 0, 0.5)",
    "rgba(255, 255, 0, 0.5)",
    "rgba(0, 255, 0, 0.5)",
    "rgba(0, 255, 255, 0.5)",
    "rgba(0, 0, 255, 0.5)",
    "rgba(255, 0, 255, 0.5)"
];
let currentColor = 0;
themeButton.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[currentColor];
    if (currentColor === colors.length - 1) {
        currentColor = 0;
    } else {
        currentColor++;
    }
});

const todayDate = document.getElementById("today-date");
function updateDate() {
    const today = new Date();
    const formattedDate = today.toDateString();
    todayDate.textContent = formattedDate;
}
updateDate();













