let students = [
    {id:1, name: 'Rowi', program: 'Bachelor of Science in Information Technology'},
    
    {id:2, name: 'Roanld', program: 'Bachelor of Science in Computing Science'},
        
    {id:3, name: 'William', program: 'Bachelor of Science in Information Sysstems'}, 
    
    {id:4, name: 'Rowena', program: 'Bachelor of Science in Acccountancy'},
    
    {id:5, name: 'Liam', program: 'Bachelor of Science in Business Administration'}
];

const createListItem = (student) =>{
    //create element
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');


//add value
h2.innerText = student.name;
p.innerText = student.program;
button.innerText = 'Delete';
button.addEventListener('click', () =>{
    const newStudents = students.filter((s) => s.id !== student.id)
    students = newStudents;
    displayList();
});

//add class
article.classList.add('list-item');

//insert
article.append(h2);
article.append(p);
article.append(button);

return article;
} 

const list = document.querySelector('#studentList');

const displayList = () =>{
    list.replaceChildren();
    const studentList = students.map((s) => createListItem(s));
    studentList.forEach((s) => list.append(s));
}
displayList();

const form = document.querySelector('#studentForm');
const nameField = document.querySelector('#name');
const programField = document.querySelector('#program');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
   const name = nameField.value;
   const program = programField.value;
   const newStudent = {id: students.length + 1, 
        name, 
        program
   }
   students.push(newStudent);
   nameField.value = '';
   programField.value = '';
   displayList();
    
    
});