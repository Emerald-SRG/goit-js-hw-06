const amountOfLi = document.querySelectorAll('li.item');
console.log(`Number of categories: ${amountOfLi.length}`);


amountOfLi.forEach(function (category) {

    const liName = category.querySelector('h2').textContent;
    console.log(`Category: ${liName}`);

    const liAmount = category.querySelectorAll('ul > li').length;
    console.log(`Elements: ${liAmount}`);

});