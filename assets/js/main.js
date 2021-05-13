/* 
Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
Usate questa struttura dati per le icone:
*/


const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

//creo un ciclo for each per creare 3 array dove metto i diversi type di icone, aggiungo chiave colore e i valori corrispondenti
let animalIcons = [], vegetableIcons = [], userIcons = [];
icons.forEach(icon => {
    if(icon.type === 'animal'){
        icon.color = '#0000FF';
        animalIcons.push(icon);
    } else if (icon.type === 'vegetable'){
        icon.color = '#FFA500';
        vegetableIcons.push(icon);
    } else {
        icon.color = '#800080';
        userIcons.push(icon);
    }
});

//creo un ciclo for each per inserire nell'html le icone e il nome di ciascuna
/* icons.forEach((icon) => {
    icon.display = 'initial'
    document.getElementById('container').insertAdjacentHTML("beforeend", `
        <div class="icon" style="display: ${icon.display}">
                <i class="${icon.family}  ${icon.prefix}${icon.name}" style="color: ${icon.color};"></i>
                <div class="icon_name">${icon.name}</div>
                
        </div>
    `)
});
 */
//creo un if per filtrare le icone con il select

const selection = document.getElementById('icon_types');

document.getElementById('icon_types').addEventListener('change', function(){

    if (selection.value === 'animal') {
        icons.forEach(icon => {
            if (icon.type != 'animal'){
                icon.display = 'none';
            }
        });
    } else if (selection.value === 'vegetable'){
        icons.forEach(icon => {
            if (icon.type != 'vegetable'){
                icon.display = 'none';
            }
        });
    } else if (selection.value === 'user'){
        icons.forEach(icon => {
            if (icon.type != 'user'){
                icon.display = 'none';
            }
        });
    } else {
        icons.forEach(icon => {
            icon.display = 'inital'
        });
    }

});

icons.forEach((icon) => {
    icon.display = 'initial'
    document.getElementById('container').insertAdjacentHTML("beforeend", `
        <div class="icon" style="display: ${icon.display}">
                <i class="${icon.family}  ${icon.prefix}${icon.name}" style="color: ${icon.color};"></i>
                <div class="icon_name">${icon.name}</div>
                
        </div>
    `)
});









/* if (selection.value == 'animal') {
    icons.forEach(icon => {
        if (icon.type != animal){
            icon.display = none;
        }
    });
} */
