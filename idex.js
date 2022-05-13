console.log('Wellcome to Even and odd numbers');


let num = parseInt(prompt('Enter a number'));


function evenOdd(num){
    if (num > 0) {
    
        alert('Enter 1 for odd and 2 for even');
        let option = parseInt(prompt('Enter a number'));
    
        if(option == 1){
            if(num %2 == 0){
                console.log('Number is even')
            }else{
                console.log('number is not even')
            }
        }else if(option==2){
            if(num %2 != 0){
                console.log('Number is odd')
            }else{
                console.log('number is not odd')
            }
        }else{
            console.log('You have entered a wrong number. Pleae enter 1 or 2')
        }
    } else {
        console.log('Number You Entered is incorrect Please enter a number greater then 1')
    }
}

evenOdd(num)