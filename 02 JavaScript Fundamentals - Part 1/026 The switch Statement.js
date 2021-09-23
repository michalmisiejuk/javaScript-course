//026 The switch Statement


const day = 'wednesday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;                      // break is important to break code from running wild
    case 'tuesday':
        console.log('Prepare theory vidoes');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write Code examples');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekand :D');
        break;
    default:
        console.log('Not a valid day')
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') { 
    console.log('Prepare theory vidoes');
} else if (day === 'wednesday' || day === 'thursday') { 
    console.log('Write Code examples');    
} else if (day === 'friday') { 
    console.log('Record Videos');    
} else if (day === 'saturday' || day ==='sunday') { 
    console.log('Enjoy the weekand :D');    
}
    

