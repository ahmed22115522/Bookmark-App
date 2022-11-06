let webName = document.getElementById('webName');
let webURL = document.getElementById('webURL');
let nameValidation = document.getElementById('validationNoData');
let URLValidation = document.getElementById('validationNoDataURL');
let webContatiner;

if (localStorage.getItem('Webs') != null) {
    webContatiner = JSON.parse(localStorage.getItem('Webs'))
    displayWeb(webContatiner)
}
else {
    webContatiner = [];
}

function addWeb() {

    if (webName.value == '' ) {
        document.getElementById('validationNoData').classList.replace('d-none','d-block');
        
    }
    else if ( webURL.value == '') {
        document.getElementById('validationNoDataURL').classList.replace('d-none','d-block');
    }
    else {
        let webElments = {
            name: webName.value,
            url: webURL.value
        }

            webContatiner.push(webElments);


        
        localStorage.setItem('Webs', JSON.stringify(webContatiner))
        displayWeb(webContatiner)
        clearInputs()
        clearAlert()
    }

};

function displayWeb(list){

        let webPage = '';
        for (let i = 0; i < list.length; i++) {
            
            webPage += `
            <div class="outPutContnet d-flex align-items-center border border-3 mb-3">
            <p class="fs-3 text-muted w-50 p-3 m-0">${list[i].name}</p>
            <a class="btn btn-info me-2 text-light h-50" href="${list[i].url}" target="_blank">Visit</a>
            <button class="btn btn-danger h-50" onclick="deleteData(${[i]})">Delete</button>
            </div>
            `
            
        }

        document.getElementById('bookMarkerOutputs').innerHTML = webPage;
        
};

function clearInputs() {
    webName.value = '';
    webURL.value = '';
};

function clearAlert() {
    document.getElementById('validationNoData').classList.replace('d-block','d-none');
    document.getElementById('validationNoDataURL').classList.replace('d-block','d-none');
}

function deleteData(index) {
    webContatiner.splice(index, 1);
    localStorage.setItem('Webs', JSON.stringify(webContatiner));
    displayWeb(webContatiner);

}

