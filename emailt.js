var fs = require('fs');

function beoltom(filename, cb) {
  fs.readFile(filename, 'utf8', function (err, data) {
    if (err) {
      console.log('nemtalalomafajlt');
      return;
    }

    cb(data);
  });
}

function tpl(filename, params, cb2) {
  beoltom(filename, function (f) {
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        f = f.replace('[' + key + ']', params[key]);
      }
    }
    cb2(f);
  });
}

console.log('semmiseez' +
  tpl('betolto.txt', {
    'nev': 'alma',
    'neptun': 'WRVU7O'
  }, function (adat) {
    console.log('hello');
    console.log(adat);
  })
);

console.log('ez a vege?');

/*
console.log("semmiseez" +
  fs.readFile('betolto.txt', 'utf8', function (err, data) {
    if (err) {
      console.log('nemtalalomafajlt');
      return;
    }
    var f = data;
    var params = {
      'nev': 'alma',
      'neptun': 'WRVU7O'
    };
    for (var key in params) {
      f = f.replace('[' + key + ']', params[key]);
    }

    var fv = function (adat) {
      console.log('hello');
      console.log(adat);
    };

    fv(f);
  }));

console.log('ez a vege?');*/
