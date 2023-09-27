const get_form = document.querySelector('.form_settings');
get_form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const get_height = parseInt(document.getElementById('height').value);
    const get_weight = parseInt(document.getElementById('weight').value);
    const get_height_span = document.getElementsByClassName('height_span')[0];
    const get_weight_span = document.getElementsByClassName('weight_span')[0]; // Correct the class name

    
    
    if( get_height ===''  || get_height <= 0 || isNaN(get_height)) {

        get_height_span.innerHTML = 'Enter Number';
        // get_height_span.appendChild(document.createTextNode('Enter valid Number'));
        get_height_span.style.color = "red";
        
    }else {
        get_height_span.innerHTML = '';

    } 
    if(get_weight === '' || get_weight <= 0 || isNaN(get_weight)) {
        
        get_weight_span.innerHTML = 'Enter valid Weight'; // Change appendChild to innerHTML
        get_weight_span.style.color = "red";


    }else {
        get_weight_span.innerHTML = '';
    }
    if(get_weight !== '' && get_height !== '') {
        const get_result = document.getElementById('result');
        const bmi= (get_weight/(get_height*get_height)).toFixed(2);
        get_result.innerHTML = `<span> ${bmi} </span>`;
    }
    
    



})