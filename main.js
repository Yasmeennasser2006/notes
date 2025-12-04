document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".y3 input");
  const btn = document.querySelector(".y3 button");
  const container = document.querySelector(".y3");

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    const task = document.createElement("div");
    task.style.background = "#f9f9f9";
    task.style.padding = "8px";
    task.style.marginTop = "10px";
    task.style.borderRadius = "4px";
    task.style.display = "flex";
    task.style.justifyContent = "space-between";
    task.style.alignItems = "center";
    task.style.border = "1px solid #ddd";

    const taskText = document.createElement("span");
    taskText.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "-" ;
    deleteBtn.style.background = "peru";
    deleteBtn.style.color = "white";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "5px 5px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.borderRadius = "4px";

    deleteBtn.addEventListener("click", () => {
      task.remove();
    });

    task.appendChild(taskText);
    task.appendChild(deleteBtn);

    container.appendChild(task);

    input.value = "";
  });
});

