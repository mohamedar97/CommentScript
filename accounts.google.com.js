
window.onload=function(){ 
    let i=Number(localStorage.getItem('counter'))
    console.log(i)
var Email=[
  "tt406342@gmail.com",
  "ai7786764@gmail.com",
  "hendahmed444666@gmail.com",
  "abmag321@gmail.com",
  "sarabadrani306@gmail.com",
  "hadeer.sameer77777@gmail.com",
  "aminaayman84@gmail.com",
  "geddoo21@gmail.com",
  "imanelsherif460@gmail.com",
  "hadeersamiirr2000@gmail.com",
  "mariomaelkhosht@gmail.com",
  "shhenawy.shenaawy@gmail.com",
  "markyousri6@gmail.com",
  "ismailkadry45@gmail.com",
  "marinaezzat231@gmail.com",
  "hebaaymannn19@gmail.com",
  "veroniaa75@gmail.com",
  "ashrafzaki967@gmail.com",
  "lamiaahosny234@gmail.com",
  "salwaibrahimahmed3@gmail.com"
]

    document.querySelector('.eARute').firstChild.click()
    setTimeout(function(){ 
        document.querySelector('.whsOnd').value=Email[i];
        document.querySelector('.VfPpkd-LgbsSe').click()
        setTimeout(function(){  
            document.querySelector('.whsOnd').value="Gmeeg123"
            i++
            localStorage.setItem('counter',i)
            document.querySelector('.VfPpkd-LgbsSe').click()
         }, 1800);
 }, 1000);
        
    //  document.querySelector('.VfPpkd-LgbsSe').click(function(){
    //             document.querySelector('.whsOnd').value='Mm123456789'})

}

   
