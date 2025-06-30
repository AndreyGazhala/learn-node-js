async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return data;
}

// const data = getData().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
// });

// const data2 = await getData();

// console.log(data2);