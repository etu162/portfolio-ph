// console.log("Hello Etu");
// const a="I am Sadia Anjum Etu";
// console.log(a);

//.................form submittion............
function handleContact(event){

    event.preventDefault();
// ----------reload hole jate dekha jay---------------------- 
    console.log("Contact");
console.log(event);
    console.log(event.target);
    console.log(event.target.name);
const name=event.target.name.value;
const email=event.target.email.value;
const msg=event.target.massege.value;
console.log(name);
console.log(msg);
console.log(email);

// ---------index er kono kichu dekhanor jonno--------
const successContainer=document.getElementById("sucess_container");

console.log(document);
console.log(successContainer);



const nameparagraph=document.createElement("p");
nameparagraph.innerText=`Your name : ${name}`;

const emailparagraph=document.createElement("p");
emailparagraph.innerText=`Your Email:${email}`;

const massege=document.createElement("p");
massege.innerText=`Your Email:${msg}`;

console.log(nameparagraph);
console.log(emailparagraph);
console.log(massege);

successContainer.appendChild(nameparagraph);
successContainer.appendChild(emailparagraph);
successContainer.appendChild(massege);
}

const imgs=[
    {
        url:"./Rectangle 26.png",
    },

    {
        url:"./Rectangle 28.png",
    },

    {
        url:"./Rectangle 31.png",
    },

    {
        url:"./Rectangle 39.png",
    },

]


// for(const i of imgs){
// console.log(i);
// }

// const img_length=imgs.length;
// console.log(img_length);

// for(let i=0;i<img_length;i++){
//     console.log(imgs[i]);
// }

function handleShowMoreProject(){
    const projectContain=document.getElementById('projects');
    // const projectDiv=document.createElement("div");
    // console.log(projectDiv);
    for(const i of imgs){
        // console.log(i);
        const projectDivImage=document.createElement("div");
        projectDivImage.classList.add("project");
        // project div er moto style a baki img gulo set korte
        projectDivImage.innerHTML=`
        <img src="${i.url}">
        `;
        projectContain.appendChild(projectDivImage);
        console.log(projectDivImage);
    }
    console.log("click",projectContain);
}