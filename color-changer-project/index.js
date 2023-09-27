console.log('hello tehreem');

const get_button = document.querySelectorAll('.buttons');
var get_body = document.getElementsByTagName("BODY")[0];
// const get_body = document.querySelector();
// x.style.backgroundColor = "red";
console.log(get_button);
get_button.forEach((ele) => {
    console.log(ele);

    ele.addEventListener('click', (e)=>{
        console.log(e);
        // console.log(e.target.className.split(" ")[1]);
        console.log(e.target.id);
        const get_color_id = e.target.id;
        switch(get_color_id) {
            
            case 'box_yellow':
                get_body.style.backgroundColor = "yellow";
                break;

            
            case 'box_green':
                get_body.style.backgroundColor = "green";
                break;
        
            
            case 'box_red':
                get_body.style.backgroundColor = "red";
                break;
            
            case 'box_blue':
                get_body.style.backgroundColor = "blue";
                break;
            
            default:
                get_body.style.backgroundColor = "blue";
            



        }


    })

})