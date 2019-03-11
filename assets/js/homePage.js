function addBook() {
  var listBook = JSON.parse(localStorage.getItem("list_book"));

  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var author = document.getElementById("author").value;
  var categoryId = document.getElementById("categoryId").value;
  var image = document.getElementById("image").value;

  if (name && description && author && categoryId && image) {

    let btnEdit = document.createElement('input');
    btnEdit.type = "button";
    btnEdit.className = "btn";
    btnEdit.value = "Edit";

    let btnDelete = document.createElement('input');
    btnDelete.type = "button";
    btnDelete.className = "btn";
    btnDelete.value = "Delete";
    btnDelete.addEventListener('click', () => {
      this.deleteBook(listBook.length - 1);
    });

    listBook.push({
      name: name,
      description: description,
      author: author,
      categoryId: categoryId,
      image: image
    });

    localStorage.setItem("list_book", JSON.stringify(listBook));

    let table = document.getElementById("myTable");
    let row = table.insertRow(listBook.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    // let cell7 = row.insertCell(6);

    cell1.innerHTML = listBook.length;
    cell2.innerHTML = name;
    cell3.innerHTML = description;
    cell4.innerHTML = author;
    cell5.innerHTML = categoryId;
    cell6.innerHTML = image;
    cell7 = row.appendChild(btnEdit);
    cell8 = row.appendChild(btnDelete);
    table.appendChild(row);
  }
}


function loadBook() {
  var table = document.getElementById("myTable");
  // localStorage.clear()     
  // listBook.push({name:name,description:description,author:author,categoryId:categoryId,image:image});
  var list = JSON.parse(localStorage.getItem("list_book"));

  if (list && list.length) {
    list.forEach((item, index) => {
      let btnEdit = document.createElement('input');
      btnEdit.type = "button";
      btnEdit.className = "btn";
      btnEdit.value = "Edit";
      btnEdit.addEventListener('click',()=>{
        this.loadEditBook(index)
      })
      let btnDelete = document.createElement('input');
      btnDelete.type = "button";
      btnDelete.className = "btn";
      btnDelete.value = "Delete";
      btnDelete.addEventListener('click', () => {
        this.deleteBook(index);
      });

      let row = table.insertRow(index + 1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);

      cell1.innerHTML = index;
      cell2.innerHTML = item.name;
      cell3.innerHTML = item.description;
      cell4.innerHTML = item.author;
      cell5.innerHTML = item.categoryId;
      cell6.innerHTML = item.image;
      cell7 = row.appendChild(btnEdit);
      cell8 = row.appendChild(btnDelete);
      table.appendChild(row);
    });

  } else {
    localStorage.setItem("list_book", JSON.stringify([]));
  }
}

function loadEditBook(id) {
  var listBook = JSON.parse(localStorage.getItem("list_book"));
  
  document.getElementById("id").value = id;
  document.getElementById("name").value = listBook[id].name;
  document.getElementById("description").value = listBook[id].description;
  document.getElementById("author").value = listBook[id].author;
  document.getElementById("categoryId").value = listBook[id].categoryId;
  document.getElementById("image").value = listBook[id].image;
}

function deleteBook(id) {
  // console.log("Delete");

  var list = JSON.parse(localStorage.getItem("list_book"));

  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  for (var x = rowCount - 1; x > 0; x--) {
    table.deleteRow(x);
  }

  list.splice(id, 1);
  // alert("Delete success.")
  localStorage.setItem("list_book", JSON.stringify(list));

  this.loadBook();
}

function editBook(){
  let id=document.getElementById("id").value;
  if(id){
    var list = JSON.parse(localStorage.getItem("list_book"));
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var author = document.getElementById("author").value;
    var categoryId = document.getElementById("categoryId").value;
    var image = document.getElementById("image").value;
    list[id].name = name;
    list[id].description = description;
    list[id].author = author;
    list[id].categoryId = categoryId;
    list[id].image = image; 
    
    localStorage.setItem("list_book", JSON.stringify(list));
    
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
      table.deleteRow(x);
    }
    this.loadBook();
  }
  
}