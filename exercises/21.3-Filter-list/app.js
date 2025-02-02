let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here
const filterByName = (arr, criteria) => {
    return arr.filter(txt => txt.toLowerCase().includes(criteria));
}

console.log(filterByName(names, 'am'));
[ 'Liam', 'William', 'James', 'Benjamin', 'Amelia', 'Samuel', 'Camila' ]