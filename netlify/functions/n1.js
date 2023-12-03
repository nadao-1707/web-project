function getData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('dataContainer');
            dataContainer.innerHTML = JSON.stringify(data);
        })
        .catch(error => console.error(error));
}