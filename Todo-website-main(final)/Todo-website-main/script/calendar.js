//commands that sets user's current date

//Year
const dateY = new Date();
document.getElementById('dateYear').innerHTML = dateY.getFullYear();

//Month
const dateM = ["&nbsp;January", "&nbsp;February", "&nbsp;March", "&nbsp;April", "&nbsp;May", "&nbsp;June", "&nbsp;July", "&nbsp;August", "&nbsp;September", "&nbsp;October", "&nbsp;November", "&nbsp;December"];

const months = new Date();
let month = dateM[months.getMonth()];
document.getElementById('currentM').innerHTML = month;
document.getElementById('dateMonth').innerHTML = month;

//Day
const dateD = new Date();
document.getElementById('currentD').innerHTML = dateD.getDate() + "th";
//Correcting suffix for currentD
if (currentD == '4'||'5'||'6'||'7'||'8'||'9'||'10'||'11'||'12'||'13'||'14'||'15'||'16'||'17'||'18'||'19'||'20'||'24'||'25'||'26'||'27'||'28'||'29'||'30') {
    document.getElementById('currentD').innerHTML = dateD.getDate() + "th";
} else if (currentD == '2'||'22') {
    document.getElementById('currentD').innerHTML = dateD.getDate() + "nd";
} else if (currentD == '1'||'21'||'31') {
    document.getElementById('currentD').innerHTML = dateD.getDate() + "st";
}
//Correcting days of month via 'else-if' statements
if (month = 'November') {
    document.getElementById('d31').style.color = 'grey';
    document.getElementById('d31').innerHTML = '1';

} else if (month = 'April') {
    document.getElementById('d31').style.color = 'grey';
    document.getElementById('d31').innerHTML = '1';
} else if (month = 'June') {
    document.getElementById('d31').style.color = 'grey';
    document.getElementById('d31').innerHTML = '1';
} else if (month = 'September') {
    document.getElementById('d31').style.color = 'grey';
    document.getElementById('d31').innerHTML = '1';
    
} else if (month = 'February') {
    document.getElementById('d29').style.color = 'grey';
    document.getElementById('d30').style.color = 'grey';
    document.getElementById('d31').style.color = 'grey';
    document.getElementById('d29').innerHTML = '1';
    document.getElementById('d30').innerHTML = '1';
    document.getElementById('d31').innerHTML = '1';
    
} 


