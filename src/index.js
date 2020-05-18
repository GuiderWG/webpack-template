import * as $ from 'jquery'
import 'popper.js'; // Required for BS4
import 'bootstrap';
import './styles/styles.css'

// DOM ready
$(function () {
  $('.logo2').addClass('jq');
});


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

function findShorts(s){
  return s.split(' ').reduce((acc, cur) => acc.length <= cur.length ? acc : cur).length;
}

console.log(findShorts("2123bitcoin take over the world maybe who knows perhaps"));

