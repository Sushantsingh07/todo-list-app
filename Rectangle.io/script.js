// Sidebar navigation functionality
const menuItems = document.querySelectorAll(".menu-item");
const sections = document.querySelectorAll(".task-section");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menu) => menu.classList.remove("active"));
    sections.forEach((section) => section.classList.add("hidden"));

    const sectionToShow = document.getElementById(item.dataset.section);
    sectionToShow.classList.remove("hidden");
    item.classList.add("active");
  });
});

// Task Management
const taskList = document.getElementById("task-list");
const scheduledTaskList = document.getElementById("scheduled-task-list");

document.getElementById("add-task-btn").addEventListener("click", () => {
  const taskName = document.getElementById("new-task").value;
  const taskDate = document.getElementById("task-date").value;
  const taskTime = document.getElementById("task-time").value;

  if (taskName && taskDate && taskTime) {
    const li = document.createElement("li");
    li.textContent = `${taskName} - ${taskDate} @ ${taskTime}`;
    taskList.appendChild(li);

    const scheduledLi = li.cloneNode(true);
    scheduledTaskList.appendChild(scheduledLi);

    document.getElementById("new-task").value = "";
    document.getElementById("task-date").value = "";
    document.getElementById("task-time").value = "";
  }
});

// Filter functionality
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`Filter selected: ${btn.dataset.filter}`);
  });
});
