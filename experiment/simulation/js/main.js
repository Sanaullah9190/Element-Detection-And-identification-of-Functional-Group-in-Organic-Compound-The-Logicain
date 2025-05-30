
let start = document.getElementById('start')
let vedio_box = document.getElementById("vedio-box-1")
let first_image = document.getElementById('image-1')
let operatus = document.getElementById('operatus')
let massage = document.getElementById('massage')
massage.innerText = "click on start"
operatus.style.display = "none"



let sodium = document.getElementById('sodium')
sodium.style.display = "none"

let test_tube = document.getElementById('test-tube')
test_tube.style.display = "none"

let sec_test_tube = document.getElementById('test-tube-2')
sec_test_tube.style.display = "none"

let burnner = document.getElementById('burnner')
burnner.style.display = "none"

let compound = document.getElementById('compound')
compound.style.display = "none"


// let beaker = document.getElementById('beaker')
// beaker.style.display = "none"

let smach = document.getElementById('smach')
smach.style.display = "none"


let filter = document.getElementById('filter')
filter.style.display = "none"

let test = document.getElementById('test')
test.style.display = "none"



start.addEventListener('click', () => {
    start.classList.add('hide')
    vedio_box.classList.add('show')
    first_image.classList.add("show")

    sodium.style.display = "block"
    operatus.style.display = "block"


    massage.innerText = "put sodium in fusion-tube"

})


// document.getElementById("test-tube").addEventListener('click',()=>{
//     start.classList.add('hide')
//     vedio_box.classList.add('show')
//     first_image.classList.add("show")
// })

let first_vedio = document.getElementById('vedio-1')
let second_vedio = document.getElementById('vedio-2')
let third_vedio = document.getElementById('vedio-3')
let four_vedio = document.getElementById('vedio-4')
let five_vedio = document.getElementById('vedio-5')
let six_vedio = document.getElementById('vedio-6')
let seven_vedio = document.getElementById('vedio-7')

let nitrogen_vedio = document.getElementById('nitrogen-8')
let sulphur_vedio = document.getElementById('sulphur-9')
let halogen_vedio = document.getElementById('halogen-10')

document.getElementById('sodium').addEventListener('click', () => {
    first_image.classList.remove("show")

    first_vedio.style.display = "block"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"
    seven_vedio.style.display = "none"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"


    setTimeout(() => {
        massage.innerText = "Click On fusion-Tube"
        test_tube.style.display = "block"

    }, 4000);

})

document.getElementById('test-tube').addEventListener('click', () => {
    // first_vedio.style.display = "none"
    // second_vedio.style.display = "block"

    first_vedio.style.display = "none"
    second_vedio.style.display = "block"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"
    seven_vedio.style.display = "none"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"

    setTimeout(() => {

        burnner.style.display = "block"

        massage.innerText = "Click On Burner"

    }, 3000);


})

document.getElementById('burnner').addEventListener('click', () => {
    // second_vedio.style.display = "none"
    // third_vedio.style.display = "block"

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "block"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"
    seven_vedio.style.display = "none"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"

    setTimeout(() => {

        compound.style.display = "block"

        massage.innerText = "Select The Compound "

    }, 2000);

})


const selfFunc = () => {
    const selectElement = document.getElementById("mySelect");
    selectElement.addEventListener("change", function () {
        let selectedValue = this.value


        if (selectedValue === "option-1") {

            // third_vedio.style.display = "none"
            // four_vedio.style.display = "block"

            first_vedio.style.display = "none"
            second_vedio.style.display = "none"
            third_vedio.style.display = "none"
            four_vedio.style.display = "block"
            five_vedio.style.display = "none"
            six_vedio.style.display = "none"
            seven_vedio.style.display = "none"

            nitrogen_vedio.style.display = "none"
            sulphur_vedio.style.display = "none"
            halogen_vedio.style.display = "none"

            test_tube.style.display = "none"

            setTimeout(() => {
                sec_test_tube.style.display = "block"
                massage.innerText = "Click On fusion-Tube "

            }, 4000);
        }


    });

}
selfFunc()

document.getElementById('test-tube-2').addEventListener('click', () => {
    // four_vedio.style.display = "none"
    // five_vedio.style.display = "block"

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "block"
    six_vedio.style.display = "none"
    seven_vedio.style.display = "none"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"


    setTimeout(() => {

        smach.style.display = "block"

        massage.innerText = "Click On Glass Rod For Smash "

    }, 4000);
    // beaker.style.display = "block"
})

document.getElementById('smach').addEventListener('click', () => {
    // five_vedio.style.display = "none"
    // six_vedio.style.display = "block"

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "block"
    seven_vedio.style.display = "none"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"

    setTimeout(() => {

        filter.style.display = "block"
        massage.innerText = "Click On Filter Paper"

    }, 9000);

})

document.getElementById('filter').addEventListener('click', () => {

    // six_vedio.style.display = "none"
    // seven_vedio.style.display = "block"

    first_vedio.style.display = "none"
    second_vedio.style.display = "none"
    third_vedio.style.display = "none"
    four_vedio.style.display = "none"
    five_vedio.style.display = "none"
    six_vedio.style.display = "none"
    seven_vedio.style.display = "block"

    nitrogen_vedio.style.display = "none"
    sulphur_vedio.style.display = "none"
    halogen_vedio.style.display = "none"

    setTimeout(() => {
        test.style.display = "block"
        massage.innerText = "Select The Test"

    }, 11000);

})



const testElement = document.getElementById("testSelect");
testElement.addEventListener("change", function () {
    let testValue = this.value;


    seven_vedio.style.display = "none"

    if (testValue === "option1") {

        nitrogen_vedio.style.display = "block"
        sulphur_vedio.style.display = "none"
        halogen_vedio.style.display = "none"

        setTimeout(() => {
            massage.innerText = "Nitrogen Test Pass"

        }, 20000);
    }
    else if (testValue === "option2") {

        nitrogen_vedio.style.display = "none"
        sulphur_vedio.style.display = "block"
        halogen_vedio.style.display = "none"

        setTimeout(() => {
            massage.innerText = "Sulphur Test Pass"

        }, 11000);

    } else if (testValue === "option3") {

        nitrogen_vedio.style.display = "none"
        sulphur_vedio.style.display = "none"
        halogen_vedio.style.display = "block"

        setTimeout(() => {
            massage.innerText = "Halogen Test Pass"

        }, 10000);
        console.log("clicked")

    }

});



