//Check bill amount input for data
function checkTotalBill() {
    var amt = document.getElementById("totalAmt").value;
    if(isNaN(amt) || amt <= 0) {
        document.getElementById("totalAmt").style.borderColor = "red";
    } else
        document.getElementById("totalAmt").style.borderColor = "green";
}

//Check split input for data
function checkSplit() {
    var split = document.getElementById("splitAmt").value;
    if(split != Math.floor(split) || split === "" || split <=0) {
        document.getElementById("splitAmt").style.borderColor = "red";
    } else
        document.getElementById("splitAmt").style.borderColor = "green";
}


//Check that tip dropdown is selected
function checkTip() {
    var tip = document.getElementById("percentage").value;
    if(tip === "") {
        document.getElementById("percentage").style.borderColor = "red";

    } else
        document.getElementById("percentage").style.borderColor = "green";
    document.getElementById("percentage").style.color = "black";

}


//Disable the calculate button is inputs equal 0 or are left blank.
//Source: StackExchange.com
(function() {
    $('form > input').keyup(function() {

        var empty = false;
        var split = document.getElementById("splitAmt").value;
        $('form > input').each(function() {
            if ($(this).val() === '' || $(this).val() <= 0 ||split != Math.floor(split)) {
                empty = true;
            }
        });

        if (empty) {
            $('#calculate').attr('disabled', 'disabled');
        } else {
            $('#calculate').removeAttr('disabled');
        }
    });
})()


//Get tip amount
function calculateTip() {
    var total = document.getElementById('totalAmt').value;
    var percent = document.getElementById('percentage').value;
    var split = document.getElementById('splitAmt').value;


    //Calculate tip
    var tip = (total * percent) / split;
    //Round tip to two decimal places
    tip = Math.round(tip * 100) / 100;
    //Two digits after decimal
    tip = tip.toFixed(2);

    //Display tip
    document.getElementById("tip").innerHTML = "$" + tip;

}

//Click to call valdiation functions and calculation function
document.getElementById("calculate").onclick = function() {
    checkTotalBill();
    checkSplit();
    checkTip();
    calculateTip();
}

function reset() {
    document.getElementById("form").reset();
}



