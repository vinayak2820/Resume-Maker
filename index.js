const container = document.getElementById("container");
const resume = document.getElementById("resume");

const add_qualification = document.getElementById("add_qua");
const add_project = document.getElementById("add_pro");
const submit = document.getElementById("submit");
const back = document.getElementById("back");

const display_qual = document.getElementById("display_qua");
const display_pro = document.getElementById("display_pro");

const degree = document.getElementById("degree");
const course = document.getElementById("course");
const year1 = document.getElementById("year1");
const year2 = document.getElementById("year2");

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const skills = document.getElementById("skills");

const user_name = document.getElementById("user_name");
const email_link = document.getElementById("email_link");
const contact_number = document.getElementById("contact_number");
const project_list = document.getElementById("project_list");
const qual_list = document.getElementById("qual_list");

let qualifications = [];
let projects = [];

add_qualification.addEventListener("click", function(){
  var div =  document.createElement("div");

  var p = document.createElement("p");
  var deg = degree.value;
  var crs = course.value;
  var yr1 = year1.value;
  var yr2 = year2.value;
  p.innerText = `${deg} in ${crs} from ${yr1} - ${yr2}`;

  var edit = document.createElement("button");
  edit.innerHTML="edit";

  var del = document.createElement("button");
  del.innerHTML="delete";

  div.appendChild(p);
  div.appendChild(edit);
  div.appendChild(del);
  display_qual.appendChild(div);

  qualifications.push(p.innerText);

  del.addEventListener("click", function(){
    display_qual.removeChild(div);
    let index = qualifications.indexOf(p.innerText);
    qualifications.splice(index, 1);
  })

  edit.addEventListener("click", function(){
    degree.value= deg;
    course.value= crs;
    year1.value= yr1;
    year2.value= yr2;

    display_qual.removeChild(div);

    let index = qualifications.indexOf(p.innerText);
    qualifications.splice(index, 1);

  })
  degree.value="";
  course.value="";
  year1.value="";
  year2.value="";
});

add_project.addEventListener("click", function(){
  var div = document.createElement("div");
  div.classList.add("project");

  var p = document.createElement("p");
  var title_value = title.value;
  var description = desc.value;
  var skills_value = skills.value;


  p.innerHTML = `${title_value}: ${description}; skills-- ${skills_value}`;

  var edit = document.createElement("button");
  var del = document.createElement("button");

  edit.innerHTML="edit";
  del.innerHTML="delete";

  div.appendChild(p);
  div.appendChild(edit);
  div.appendChild(del);
  display_pro.appendChild(div);

  projects.push(p.innerText)
  del.addEventListener("click", function(){
    display_pro.removeChild(div);
    let index = projects.indexOf(p.innerText);
    projects.splice(index, 1);
  })

  edit.addEventListener("click", function(){
    title.value = title_value;
    desc.value = description;
    skills.value = skills_value;
    
    display_pro.removeChild(div);

    let index = projects.indexOf(p.innerText);
    projects.splice(index, 1);
  })
  title.value="";
  desc.value="";
  skills.value="";
});

submit.addEventListener("click", function(){
  let email = document.getElementById("email").value;

  container.style.display="none";
  resume.style.display = "block"

  user_name.innerText = document.getElementById("name").value;
  email_link.setAttribute("href", email);
  email_link.innerText = email;

  contact_number.innerText = document.getElementById("phone").value;


  qualifications.forEach(q => {
    var list_item = document.createElement("li");
    list_item.innerHTML = `<h3>${q}</h3>`

    qual_list.appendChild(list_item);
  })
  
  projects.forEach( p => {
    var list_item = document.createElement("li");
    list_item.innerHTML = `<h3>${p}</h3>`

    project_list.appendChild(list_item);
  })



});

back.addEventListener("click", function(){
  container.style.display = "block";
  resume.style.display = "none";
})