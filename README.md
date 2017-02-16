Instructions
-------------
npm install http-server -g
http-server
Check which address is served e.g. mine says:
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.48.80:8080
```
So I will open http://127.0.0.1:8080/ in my web browser

In the console
```
list = new NoteListModel();
NoteListModel {NOTELIST: Array[0]}
list.setNote("This is note 1");
undefined
list.setNote("This is note 2");
undefined
view = new NoteListView(list);
NoteListView {}
list.getHTML();
VM328:1 Uncaught TypeError: list.getHTML is not a function
    at <anonymous>:1:6
view.getHTML();
"<ul><li><div>This is note 2</div></li><li><div>This is note 2</div></li></ul>"
```
