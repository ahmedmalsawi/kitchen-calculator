function calculateTotal() {
    let meterPrice = parseFloat(document.getElementById("meter_price").value) || 0;
    let metersLength = parseFloat(document.getElementById("meters_length").value) || 0;
    let windowWidth = parseFloat(document.getElementById("window_width").value) || 0;
    let ovenWidth = parseFloat(document.getElementById("oven_width").value) || 0;
    let fridgeWidth = parseFloat(document.getElementById("fridge_width").value) || 0;
    let washerWidth = parseFloat(document.getElementById("washer_width").value) || 0;
    let upperAngels = parseInt(document.getElementById("upper_angels").value) || 0;
    let lowerAngels = parseInt(document.getElementById("lower_angels").value) || 0;

    let discountedLength = (washerWidth / 3) + (ovenWidth / 3) + ((windowWidth / 3) * 2) + ((upperAngels * 0.35) / 3) + ((fridgeWidth / 3) * 2) + (((lowerAngels * 0.6) / 3) * 2);
    let netLength = metersLength - discountedLength;
    let total = meterPrice * netLength;

    document.getElementById("total_price").innerText = total.toFixed(2);
    document.getElementById("discounted_length").innerText = discountedLength.toFixed(2);
    document.getElementById("net_length").innerText = netLength.toFixed(2);
}

function resetFields() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    calculateTotal();
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateTotal);
});
