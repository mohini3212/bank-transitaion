let email = document.getElementById("email");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let password = document.getElementById("password");
function submitbtn() {

    
    if (email.value === "") {
        error.style.display = "block";
        errorMessage.innerHTML = "Email is Required";
    }
    else if (password.value === "") {
        error.style.display = "block";
        errorMessage.innerHTML = "password is Required";
    }
    else if (password.value.length < 4) {
        error.style.display = "block";
        errorMessage.innerHTML = "At least 4 character required";
        //alert("At least 4 character.")
    }
    else if (!(email.value.match(mailformat))) {
        //alert("You have entered an invalid email address!");
        error.style.display = "block";
        errorMessage.innerHTML = "Email is invalid";
    }
    else {
        window.location.href = "dashboard.html";
    }

}


// deposit  amount
function depositamount() {
let depositInput = document.getElementById("deposit");
    let depositAmt = document.getElementById("deposit-amt");
    let totalBalance = document.getElementById("total-balance");
    let depositHistory = document.getElementById("deposit-history");
    let depositDate = document.getElementById("deposit-date");

    // how to form date
    var d = new Date;
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    let formattedDate = day + ", " + month + " " + year;
   

    let deposit = depositInput.value;
        // new deposit amount
    const newDepositAmt = Number(depositAmt.innerText.slice(1)) + Number(deposit);
    const finalamt = Number(totalBalance.innerText.slice(1)) + Number(deposit);
    const depositresult = Number(depositHistory.innerText.slice(1)) + Number(deposit);

    //    update current amount
    depositAmt.innerText = "$" + newDepositAmt;
    totalBalance.innerText = "$" + finalamt;
    depositresult.innerText = "$" + depositresult;

    // clear input value
    depositInput.value = "";
 
     // 
     let tableBody = document.getElementById("table-body");
     let newRow = document.createElement("tr");
        // Add cells for each piece of data
    newRow.innerHTML = `
        <td><img src="/icon/account.png" alt="Profile" width="30"></td>
        <td>${formattedDate}</td>
        <td>${deposit}</td>
         `;
    // Append the new row to the table body
    tableBody.appendChild(newRow);
}


// transaction amount
function transferamount() {
    let transferInput = document.getElementById("transfer");
    let transfer = transferInput.value;

    // clear input value
    transferInput.value = "";

    let transferAmt = document.getElementById("transfer-amt");
    let totalBalance = document.getElementById("total-balance");
    let transferHistory = document.getElementById("transfer-history");
    let transferDate = document.getElementById("transfer-date")

    // new deposit amount
    const newTransferAmt = Number(transferAmt.innerText.slice(1)) + Number(transfer);
    const finalAmt = Number(totalBalance.innerText.slice(1)) - Number(transfer);
    const transferResult = Number(transferHistory.innerText.slice(1)) + Number(transfer);


    //    update current amount
    transferAmt.innerText = "$" + newTransferAmt;
    totalBalance.innerText = "$" + finalAmt;
    transferResult.innerText = "$" + transferResult;

    // current dates
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[d.getMonth()];
    var day = d.getDate();
    var year = d.getFullYear();
    let formattedDate = day + ", " + month + " " + year;
    // 
    let tableBody = document.getElementById("table-body2");
    let newRow = document.createElement("tr");

    // Add cells for each piece of data
    newRow.innerHTML = `
        <td><img src="icon/account.png" alt="Profile" width="30"></td>
        <td>${formattedDate}</td>
        <td>${transfer}</td>
            `;
    // Append the new row to the table body
    tableBody.appendChild(newRow);
}


// withdraw transaction
function withdrawamount() {
    let withdrawInput = document.getElementById("withdraw");
    let withdraw = withdrawInput.value;

    let withdrawAmt = document.getElementById("withdraw-amt");
    let totalBalance = document.getElementById("total-balance");
    let withdrawHistory = document.getElementById("withdraw-history");
    let withdrawDate = document.getElementById("withdraw-date");

    // Convert strings to numbers for comparison
    let currentBalance = parseFloat(totalBalance.innerText.slice(1));
    let withdrawAmount = parseFloat(withdraw);

    // Check if the withdrawal amount is greater than the balance
    if (withdrawAmount > currentBalance) {
        alert("Insufficient amount");
    } else {
        // Else block for valid withdrawal
        const newWithdrawAmt = Number(withdrawAmt.innerText.slice(1)) + withdrawAmount;
        const finalamt = currentBalance - withdrawAmount;
        const withdrawresult = Number(withdrawHistory.innerText.slice(1)) + withdrawAmount;

        // Clear input value
        withdrawInput.value = "";

        // Update current amount
        withdrawAmt.innerText = "$" + newWithdrawAmt;
        totalBalance.innerText = "$" + finalamt;
        withdrawresult.innerText = "$" + withdrawresult;

        // Set current date
        var d = new Date();
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = monthNames[d.getMonth()];
        var day = d.getDate();
        var year = d.getFullYear();
        let formattedDate = day + ", " + month + " " + year;

        // 
        let tableBody = document.getElementById("table-body3");
        let newRow = document.createElement("tr");

        // Add cells for each piece of data
        newRow.innerHTML = `
            <td><img src="icon/account.png" alt="Profile" width="30"></td>
            <td>${formattedDate}</td>
            <td>${withdraw}</td>
                    `;

        // Append the new row to the table body
        tableBody.appendChild(newRow);
    }
}










