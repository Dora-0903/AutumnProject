function quiz3() {if (document.getElementById('answer3').value == 'スペアポケット')
                  {alert('正解！');}
                  else{alert('はずれ！');}
                  }

function hyoji(){
  //表示する文字　↓
var str = "四次元ポケットじゃないよ！";
  //テキストボックスの文字数　↓
var cnt = document.timer.moji.value.length;
  //文字数が全部表示されているか確認　↓
if (cnt < 13 {
  //現在より１文字多く切り出して表示　↓
  document.timer.moji.value = str.substr(0,cnt+1);}
  else{
    //全て表示されていたら、空文字に戻す
  document.timer.moji.value = "";}
  //setTimeout()を含む関数を呼び出す
  setTimeout("hyoji()",1000);}
