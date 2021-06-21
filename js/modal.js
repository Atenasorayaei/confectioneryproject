const zoomBtn = document.querySelectorAll('.zoom-text');
const container=document.querySelectorAll('.img-container');
const allImages = document.querySelectorAll('.img-container img');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');

let currentImageIdx = 0;

imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})



container.forEach(function(allImages, index){
    allImages.addEventListener('click', function(){
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(img/img${currentImageIdx}.jpeg) center/cover no-repeat`;
}

prevBtn.addEventListener('click', function(){
    currentImageIdx--;
    if(currentImageIdx === 0){
        currentImageIdx = allImages.length;
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
    currentImageIdx++;
    if(currentImageIdx === 13){
        currentImageIdx =1;
    }
     
    
    currentImageDisplay(currentImageIdx);
});
/*nextBtn.addEventListener('click',function (){
    if(allImages.length === 12){
        currentImageIdx = 12;
    }
})
*/
/*nextBtn.addEventListener('click',function (){
    if(`url(img/img11.jpeg) center/cover no-repeat`){
        currentImageIdx = 0;
    }
})
prevBtn.addEventListener('click',function (){
    if(`url(img/img12.jpeg) center/cover no-repeat`){
        currentImageIdx = 0;
    }
})
*/


const modal=document.getElementById('email-modal');
const closebtnlogin=document.querySelector('.close-btn-login');
const modallogin=document.getElementById('email-login');
const openbtn=document.querySelector('.main-btn');
const closebtn=document.querySelector('.close-btn');
const modalinputbtn=document.querySelector('.modal-input-btn');
const login=document.getElementById('btn-login');
 const closeinput=document.getElementById('button-2');
 const closeinputlogin=document.getElementById('button-3');
 login.addEventListener('click',()=>{
    modallogin.style.display='block';
 });
openbtn.addEventListener('click',()=>{
    modal.style.display='block';
});
closebtn.addEventListener('click',()=>{
    modal.style.display='none';
});
closebtnlogin.addEventListener('click',()=>{
    modallogin.style.display='none';
});
closeinput.addEventListener('click',()=>{
    modal.style.display='none';
})
closeinputlogin.addEventListener('click',()=>{
    modallogin.style.display='none';
})
window.addEventListener('click',(e)=>{
if(e.target===modal){
    modal.style.display='none';
    
}
});
window.addEventListener('click',(e)=>{
    if(e.target===modallogin){
        modallogin.style.display='none';
        
    }
    });
const form=document.getElementById('form');
const name=document.getElementById('name');
const email=document.getElementById('email');
const formlogin=document.getElementById('form-login');
const namelogin=document.getElementById('name-login');
const userlogin=document.getElementById('user-login');
const passwordlogin=document.getElementById('password-login');
const password=document.getElementById('password');
const passwordconfirm=document.getElementById('password-confirm');


function showError(input,message){
    const formValidation=input.parentElement;
    formValidation.className='form-validation error';
    const errorMessage=formValidation.querySelector('p');
    errorMessage.innerText=message;
}
function showValid(input){
    const formValidation=input.parentElement;
    formValidation.className='form-validation valid';
 
}
function getFieldName(input){
return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
function passwordmatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'password do not match')
    }
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([name,email,password,passwordconfirm]);
   
    checkLength(name,3,30);
 
    checkLength(password,8,25);
    checkLength(passwordconfirm,8,25);
    passwordmatch(password,passwordconfirm);

    

});
formlogin.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkRequired([namelogin,userlogin,passwordlogin]);
   
    checklength(namelogin,3,30);
 ;
    checkLength(passwordlogin,8,25);
    checkLength(userlogin,8,25);
    passwordmatch();

    

});
function checkRequired(inputArr){
inputArr.forEach(function(input) {
    if(input.value.trim()===''){
    showError(input,`${getFieldName(input)} is required`);
  }else{
      showValid(input);
  }
    

})
}
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least${min} characters`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showValid(input);
    }
}
//function checklength(input,min,max){
    //if(input.value.length<min){
       // showError(input,`Password number is low`)
   // }else if(input.value.length>max){
       // showError(input,`Too many password characters`)
    //}else{
        //showValid(input);
   //}
//}
//function getFieldName(input){
//return input.name.chartAt(0).toUppercase()+input.name.slice(1);
//}







