document.getElementById('box').addEventListener('click', function(){if(short.contains('clicked')){short.remove('clicked')}else{short.add('clicked')}} );

// These are the same

document.getElementById('box').addEventListener('click', fill);
function fill(){
    if(short.contains('clicked')){
        short.remove('clicked')
    }else{
        short.add('clicked')
    }
}

const short = document.getElementById('box').classList

// =====================================================


document.getElementById.addEventListener('mouseover', mouseInside)

function mouseInside(){

}