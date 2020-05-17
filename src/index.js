function getCount(str) {
  var vowelsCount = 0;

  var arr = str.split('');

  var arrFilter = arr
      .filter(
          value => value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u'
      );

  vowelsCount = arrFilter.length;
  return vowelsCount;
}

//console.log(getCount('abracadabra'));

function friend(friends){
  return friends.filter(val => val.length === 4);
}

//console.log(friend(["Ryan", "Kieran", "Mark"]));

function findShort(s){
  return s.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur).length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

