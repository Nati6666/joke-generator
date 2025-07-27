const xhr = new XMLHttpRequest();
// xhr.open("GET", './movies.json', true); // true = async
xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', true);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {

    const data = JSON.parse(this.responseText);
data.forEach(user => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${user.name}</strong> — ${user.email}`; 
  document.querySelector('#results').appendChild(li);
});


    console.log("Fetched Data:", data); // Just log once
  } else if (this.readyState === 4) {
    // If readyState is 4 but status is not 200
    console.error("Error fetching the file. Status:", this.status);
  }
};

xhr.send();
