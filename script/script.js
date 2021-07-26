let iconsTemplate = '';

//TEMPLATE CARD
icons.forEach((icon)=>{
    iconsTemplate += `
    <div class="col-sm-4 col-md-2 offset-md-1">
        <div class="card">
            <div class="card-body">
                <i class= "${icons.family} ${icon.prefix}${icon.name}"></i>
                <h5>${icon.name}</h5>
            </div>
        </div>
    </div>
    `;
})

//STAMPA
const cardSection = document.querySelector('#icons .row');
cardSection.innerHTML = iconsTemplate;