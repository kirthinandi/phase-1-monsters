fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
.then(response => response.json())
.then(data => {
    const monsterContainer = document.querySelector('#monster-container');
    data.forEach(data => {
        const h2 = document.createElement('h2');
        h2.innerText = data.name;
        const h4 = document.createElement('h4');
        h4.innerText = data.age;
        const p = document.createElement('p');
        p.innerText = data.description; 
        const list = document.createElement('ol');
        list.append(h2, h4, p);
        monsterContainer.append(list);
   });
    const nextFifty = document.querySelector('button#forward');
    nextFifty.addEventListener('click', (event) => {
        event.preventDefault();
        const nextMonsters = data.slice(51, 101);
        nextFifty.append(nextMonsters);
    })
});

const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', 'submit.php');

    const name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('id', 'name');
    name.setAttribute('placeholder', 'Name');

    const age = document.createElement('input');
    age.setAttribute('type', 'age');
    age.setAttribute('name', 'age');
    age.setAttribute('id', 'age');
    age.setAttribute('placeholder', 'Age');

    const description = document.createElement('input');
    description.setAttribute('type', 'description');
    description.setAttribute('name', 'description');
    description.setAttribute('id', 'description');
    description.setAttribute('placeholder', 'Description');

    const submit = document.createElement("input");
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', "Create Monster Button");

    const createMonster = document.querySelector('#create-monster');
    createMonster.append(form);

    const h5 = document.createElement('h5');
    h5.innerText = ('Create A New Monster');
    form.append(h5, name, age, description, submit);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newMonster = {
             name: e.target.name.value,
             age: e.target.age.value,
             description: e.target.description.value,
        };
        const monsterContainer = document.querySelector('#monster-container');
        monsterContainer.append(newMonster);
            const h2 = document.createElement('h2');
            h2.innerText = newMonster.name;
            const h4 = document.createElement('h4');
            h4.innerText = newMonster.age;
            const p = document.createElement('p');
            p.innerText = newMonster.description; 
            const list = document.createElement('ol');
            list.append(h2, h4, p);
            monsterContainer.append(list);
    });

    