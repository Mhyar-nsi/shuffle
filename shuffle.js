function shuffle (str){
    var word = '';
    str = str.split('');
    while (str.length > 0) {
      word +=  str.splice(str.length * Math.random() << 0, 1);
    }
    return word;
}
