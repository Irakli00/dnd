const el1 = document.getElementById('draggable-table-1');
const el2 = document.getElementById('draggable-table-2');

//---------------
let table1 = []
let table2 = []

const tasks = document.getElementById('tasks')
new Sortable.create(tasks,{
  group:"shared"
})
//---------------


new Sortable.create(el1,{
  group:{
    name:"shared",
    // pull:false,
    // put:false,
  },
  filter:'.filtered',
  animation: 250,
  ghostClass: 'red-background-drag',

  onAdd: addTask,
  onRemove: removeTask
});


new Sortable.create(el2,{
  group:{
    name:"shared",
  },
  animation: 250,
  ghostClass: 'blue-background-drag',
  // swapThreshold:0.1,
  // direction:'horizontal',
  handle:'.handle',

  onAdd: addTask,
  onRemove: removeTask
});

function addTask(e){
  let itemEl = e.item
  let whereTo = e.to
  // console.log(e,itemEl,whereTo)

  whereTo.attributes.id.value === "draggable-table-1" ? table1.push(itemEl.textContent) :table2.push(itemEl.textContent) 

  console.log("table1->",table1,"table2 ->",table2)
}

function removeTask(e){
  let itemEl = e.item
  let sourceTableId = e.from.attributes.id.value

  sourceTableId === "draggable-table-1" ? table1 =[...table1.filter(el=> el !== itemEl.textContent)]: table2 =[...table2.filter(el=>el !==itemEl.textContent)]

  console.log("table1->",table1,"table2 ->",table2)

}
