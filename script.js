const ingrediants = [
  {
    id: 1,
    name: "Chocolate milk (1 cup)",
    carbs: 26,
    cals: 208,
  },
  {
    id: 2,
    name: "Skim milk (1 cup)",
    carbs: 12,
    cals: 86,
  },
  {
    id: 3,
    name: "Refried beans (1/2 cup)",
    carbs: 26,
    cals: 142,
  },
  {
    id: 4,
    name: "Apple (1 medium)",
    carbs: 21,
    cals: 81,
  },
  {
    id: 5,
    name: "Cantaloupe (1 cup)",
    carbs: 14,
    cals: 57,
  },
  {
    id: 6,
    name: "Carrot (1 medium)",
    carbs: 8,
    cals: 31,
  },
  {
    id: 7,
    name: "Corn (1/2 cup)",
    carbs: 21,
    cals: 89,
  },
  {
    id: 8,
    name: "Peas, green (1/2 cup)",
    carbs: 12,
    cals: 63,
  },
  {
    id: 9,
    name: "Biscuit (1)",
    carbs: 13,
    cals: 103,
  },
];
$(function () {
  for (let i = 0; i < ingrediants.length; i++) {
    $("#mytable tr:last").after(
      `<tr><td>${ingrediants[i].name}</td><td>${ingrediants[i].carbs}</td><td>${ingrediants[i].cals}</td><td id="tabledata" data-id="${ingrediants[i].id}"><button id="btn" class="btn btn-success btn-sm">Add</button></td></tr>`
    );
  }
  $("#mytable").on("click", ".btn-success", handleClick);
  $("#updateSave").click(addIngrediant);
});

function handleClick() {
  $("#updateModal").modal("show");
  setBtn($(this));
}
let total_carbs = 0,
  total_cals = 0;

function addIngrediant() {
  let quantity = 1;

  quantity = $("#quantity").val();
  var name, carbs, cals;
  var btn = getBtn();
  var parentDiv = btn.closest("#tabledata");
  var id = parentDiv.attr("data-id");

  for (let i = 0; i < ingrediants.length; i++) {
    if (id == ingrediants[i].id) {
      name = ingrediants[i].name;
      carbs = ingrediants[i].carbs * quantity;
      total_carbs += carbs;
      cals = ingrediants[i].cals * quantity;
      total_cals += cals;
    }
  }
  $("#mytable2 tr:last").after(
    `<tr><td>${name}</td><td>${quantity}</td><td>${carbs}</td><td>${cals}</td></tr>`
  );

  $("#mytable3 tr:last").remove();

  $("#mytable3 tr:last").after(
    `<tr><td>${total_carbs}</td><td>${total_cals}</td></tr>`
  );

  $("#updateModal").modal("hide");
  $("#quantity").val("");
  console.log(total_cals);
}
let btn1;
function setBtn(btn) {
  btn1 = btn;
}

function getBtn() {
  return btn1;
}
