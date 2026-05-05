const URL ="https://alexwohlbruck.github.io/cat-facts/"

const getFacts = async () => {
    console.log("getting data .....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    //JSON FORMAT
};

//AJAX ----> async JS & XML(AVIOD)
//JSON ----> Javascript Object Notation

//ONRESPONSE-JS---> JS OBJECT

