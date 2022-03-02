/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {

    evt.preventDefault();
    const name = $("#name").val();
    const year = $("#year").val();
    const email = $("#email").val();
    const color = $("#color").val();

    res = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/get-lucky-num',
        data: {
            name: name,
            year: year,
            email: email,
            color: color
        }
    });

    if ('errors' in res.data) {
        $("#name-err").text(res.data.errors.name)
        $("#year-err").text(res.data.errors.year)
        $("#email-err").text(res.data.errors.email)
        $("#color-err").text(res.data.errors.color)

    }
    else {
        $("#lucky-results").text(`Your lucky number is ${res.data.num.num} (${res.data.num.fact}) \nYour birth year (${res.data.year.year}) fact is ${res.data.year.fact}`)

    }




}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
}


$("#lucky-form").on("submit", processForm);
