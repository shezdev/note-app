window.onload = function() {
  console.log(document.getElementById("app"));
document.getElementById("app").innerHTML = "Howdy There";
// var changetextonpage = document.getElementById("app").innerHTML = "Howdy There";
// console.log(changetextonpage);
// return var changetextonpage;
};



// window.onload = function() {
//   var list = NoteListModel();
//   list.setNote("Favourite drink: seltzer");
//   var view = NoteListView(list);
//   document.getElementById("app").innerHTML = view.getHTML();
// };

// (function() {
//
//  var NOTELIST = [];
//
//   NoteListController = function(nlm = new NoteListModel) {
//         NOTELIST = nlm.setNote("Favourite drink: seltzer");
//   };
//
//   NoteListController.prototype.createView = function(NOTELIST) {
//     view = new NoteListView(NOTELIST);
//   };
//
//
//
// })();
