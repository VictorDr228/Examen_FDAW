let records = [];

const form = document.getElementById("product-form");
const recordsList = document.getElementById("records");
const detailsSection = document.getElementById("record-details");
const detailsDiv = document.getElementById("details");
const backBtn = document.getElementById("back-btn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const camp1 = document.getElementById("camp1").value.trim();
    const camp2 = document.getElementById("camp2").value.trim();
    const camp3 = document.getElementById("camp3").value.trim();

    if (!camp1 || !camp2) {
        alert("Camp1 și Camp2 sunt obligatorii!");
        return;
    }

    const newRecord = { camp1, camp2, camp3 };
    records.push(newRecord);

    updateRecordList();

    form.reset();
});


function updateRecordList() {
    recordsList.innerHTML = "";

    records.forEach((record, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${record.camp1} - ${record.camp2}
            <div>
                <button onclick="viewDetails(${index})">Detalii</button>
                <button onclick="deleteRecord(${index})">Șterge</button>
            </div>
        `;
        recordsList.appendChild(li);
    });
}


function viewDetails(index) {
    const record = records[index];
    detailsDiv.innerHTML = `
        <p>Camp1: ${record.camp1}</p>
        <p>Camp2: ${record.camp2}</p>
        <p>Camp3: ${record.camp3 || "N/A"}</p>
    `;

    detailsSection.style.display = "block";
}


function deleteRecord(index) {
    records.splice(index, 1);
    updateRecordList();
}


backBtn.addEventListener("click", function () {
    detailsSection.style.display = "none";
});
