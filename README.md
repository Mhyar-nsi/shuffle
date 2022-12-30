<div align="center">
<h1> Shuffle JS</h1>
<p>Random shuffle for javascript. This function may be used in projects, example : <a href="https://github.com/Mhyar-nsi/Password-Generator">Password Generator</a></p>
</div>
<br>

```
function shuffle (str){
    var word = '';
    str = str.split('');
    while (str.length > 0) {
      word +=  str.splice(str.length * Math.random() << 0, 1);
    }
    return word;
}
```
<img src="https://raw.githubusercontent.com/Mhyar-nsi/shuffle/main/screenshot.png">
