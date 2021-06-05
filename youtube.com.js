
//     setTimeout(function(){ let loginCheck= Array.prototype.slice.call(document.querySelectorAll('.style-suggestive'))
// } }, 5000);


    window.onload=function(){
           let i=Number(localStorage.getItem("counter"))
            let loginCheck= Array.prototype.slice.call(document.querySelectorAll('.style-suggestive'))
            loginCheck=loginCheck.filter(function(e){return e.innerHTML=='Sign in'})
        if(loginCheck.length==0 && window.location.href.includes('https://www.youtube.com/')){

            if(!window.location.href.includes("https://www.youtube.com/watch?v=Kj-6QvbOYug")){window.location.href="https://www.youtube.com/watch?v=Kj-6QvbOYug" }
            window.scroll(0,970)
            setTimeout(function(){ 
                
                // document.querySelector('#simplebox-placeholder').click()
                document.querySelectorAll('.style-scope ytd-toggle-button-renderer')[0].click()
                
 }, 2000);
 setTimeout(function(){
    // document.querySelector('#contenteditable-root').innerText=comments[i]
    // document.querySelector('#submit-button').disabled=false
    // document.querySelector('#submit-button').click()
  
   
},4500)
setTimeout(function(){

i++
localStorage.setItem("counter",i)
// window.location.href='https://www.youtube.com/logout'
        
  


},10000)
            
        

}       else if(loginCheck.length!=0){
            window.location.href='https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&flowName=GlifWebSignIn&flowEntry=ServiceLogin'

    }
}

    
// window.onload=function(){
//     document.querySelector('.whsOnd').value='tt406342@gmail.com'
//     document.querySelector('.VfPpkd-LgbsSe').click(function(){
//         document.querySelector('.whsOnd').value='Mm123456789'
//         document.querySelector('.VfPpkd-LgbsSe').click(function(){
//             window.location.href='https://www.youtube.com/watch?v=TtZWHFQF1A4'
//             window.onload=function(){
//                 document.querySelector('#contenteditable-root').innerText='فيديو جامد'
//                 document.querySelector('#submit-button').click(function(){
                    
// window.location.href='https://www.youtube.com/logout'
//                 })
                
//             }

//         })
        
//     })

// }
// if(i!=0){document.querySelector('.lCoei').click()}
