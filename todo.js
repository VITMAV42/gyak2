var db = {

  ids: 1,
  todok: [],

  addTodo: function (nev, desc) {
    this.todok.push({
      'id': this.ids,
      'nev': nev,
      'desc': desc
    });
    this.ids++;
    return this.ids - 1;
  },
  /**
   * eltavolit dolgokat
   * @param id
   */
  removeTodo: function (id) {
    //delete this.todok[id];
    this.todok.splice(id - 1, 1);
  },
  /**
   * listaz
   * @returns {string}
   */
  listTodo: function () {
    var ret = 'Todok:\n';
    this.todok.forEach(function (e) {
      ret += '#' + e.id + ' ' + e.nev + ' ' + e.desc + '\n';
    });
    return ret;
  }
};

db.addTodo('alma', 'korte');
db.addTodo('barack', 'szilva');
db.removeTodo(1);
console.log(db.listTodo());
