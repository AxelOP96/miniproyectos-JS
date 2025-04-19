
const $years = d.getElementById("calcYears"),
$months = d.getElementById("calcMonths"),
$days = d.getElementById("calcDays");
const $inputDay = d.getElementById("inputDay"),
$inputMonth = d.getElementById("inputMonth"),
$inputYear = d.getElementById("inputYear")

iniciarCalculoEdad();

d.addEventListener("change", (e)=>{
    let actual = new Date();
    //console.log("El dia es", actual.getDay())
    
    if(e.target === $inputYear) $years.innerHTML = `${actual.getFullYear() - $inputYear.value} YEARS`; 
    if(e.target === $inputMonth) $months.innerHTML = `${actual.getMonth()+1 - $inputMonth.value} MONTHS`; 
    if(e.target === $inputDay) $days.innerHTML = `${actual.getDay()-1 - $inputDay.value} DAYS`; 
})
function iniciarCalculoEdad(){
    if ($inputYear.value == "") $years.innerHTML = `-- YEARS`;
    if ($inputMonth.value === "") $months.innerHTML = `-- MONTHS`;
    if ($inputDay.value === "") $days.innerHTML = `-- DAYS`;

    $years.classList.add("large");
    $months.classList.add("large");
    $days.classList.add("large");
}