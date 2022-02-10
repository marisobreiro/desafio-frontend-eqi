
function showDashboard() {
    var display = document.getElementById('dashboard').style.display;

    if(display == "none")
        document.getElementById('dashboard').style.display = 'flex';
    else
        document.getElementById('dashboard').style.display = 'none';
}

function resetDashboard() {
    var display = document.getElementById('dashboard').style.display;

    if (display == "flex")
        document.getElementById('dashboard').style.display = 'none';
    else
        document.getElementById('dahsboard').style.display = 'flex';
}

