$('.menuoption').css('display', 'none');
$('.optionholder').css('display', 'none');


//skrypty do telefonów
var warunek = $('body').width();
var else_expanded = false;
var rozwiniety1 = false;
var rozwiniety2 = false;
var rozwiniety3 = false;
var rozwiniety6 = false;

if(warunek <= 700)
{
    document.getElementsByClassName("menubuttons")[1].addEventListener("click", function(){
        if(rozwiniety1 == false)
        {
            expand1();
        }
        else if(rozwiniety1 == true)
        {
            fold1();
        }
    });

    document.getElementsByClassName("menubuttons")[2].addEventListener("click", function(){
        if(rozwiniety2 == false)
        {
            expand2();
        }
        else if(rozwiniety2 == true)
        {
            fold2();
        }
    });

    document.getElementsByClassName("menubuttons")[3].addEventListener("click", function(){
        if(rozwiniety3 == false)
        {
            expand3();
        }
        else if(rozwiniety3 == true)
        {
            fold3();
        }
    });

    document.getElementsByClassName("menubuttons")[6].addEventListener("click", function(){
        if(rozwiniety6 == false)
        {
            expand6();
        }
        else if(rozwiniety6 == true)
        {
            fold6();
        }
    });
}
else
{
    document.getElementsByClassName("menubuttons")[1].addEventListener("mouseover", function(){
        $('.optionholder').eq(0).css('display', 'block');
        $('.menuoption').eq(0).css('display', 'block');
        $('.menuoption').eq(1).css('display', 'block');
        $('.menuoption').eq(2).css('display', 'block');
        $('.menuoption').eq(3).css('display', 'block');
        $('.menuoption').eq(4).css('display', 'block');
        $('.menuoption').eq(5).css('display', 'block'); 
    });
    document.getElementsByClassName('menubuttons')[1].addEventListener("mouseout", function(){
        $('.optionholder').eq(0).css('display', 'none');
    });
    
    
    document.getElementsByClassName("menubuttons")[2].addEventListener("mouseover", function(){
        $('.optionholder').eq(1).css('display', 'block');
        $('.menuoption').eq(6).css('display', 'block');
        $('.menuoption').eq(7).css('display', 'block');
        $('.menuoption').eq(8).css('display', 'block');
        $('.menuoption').eq(9).css('display', 'block');
        $('.menuoption').eq(10).css('display', 'block');
        $('.menuoption').eq(11).css('display', 'block');
    });
    document.getElementsByClassName('menubuttons')[2].addEventListener("mouseout", function(){
        $('.optionholder').eq(1).css('display', 'none');  
    });
    
    
    document.getElementsByClassName("menubuttons")[3].addEventListener("mouseover", function(){
        $('.optionholder').eq(2).css('display', 'block');
        $('.menuoption').eq(12).css('display', 'block');
        $('.menuoption').eq(13).css('display', 'block');
       
    
       
    
    });
    document.getElementsByClassName('menubuttons')[3].addEventListener("mouseout", function(){
        $('.optionholder').eq(2).css('display', 'none');  
    });
    
    document.getElementsByClassName("menubuttons")[6].addEventListener("mouseover", function(){
        $('.optionholder').eq(3).css('display', 'block');
        $('.menuoption').eq(14).css('display', 'block');
        $('.menuoption').eq(15).css('display', 'block');
        $('.menuoption').eq(16).css('display', 'block');
        $('.menuoption').eq(17).css('display', 'block');
    
    });
    document.getElementsByClassName('menubuttons')[6].addEventListener("mouseout", function(){
        $('.optionholder').eq(3).css('display', 'none');  
    });
    
    
}


function expand1()
{
    if(rozwiniety2 == false && rozwiniety3 == false && rozwiniety6 == false) //pozostałe na false
    {
        $('.optionholder').eq(0).css('display', 'block');
        $('.menuoption').eq(0).css('display', 'block');
        $('.menuoption').eq(1).css('display', 'block');
        $('.menuoption').eq(2).css('display', 'block');
        $('.menuoption').eq(3).css('display', 'block');
        $('.menuoption').eq(4).css('display', 'block');
        $('.menuoption').eq(5).css('display', 'block'); 
        rozwiniety1 = true;
    }
    else
    {
        if(rozwiniety2 == true)
        {
            $('.optionholder').eq(1).css('display', 'none');  
            rozwiniety2 == false;
            $('.optionholder').eq(0).css('display', 'block');
            $('.menuoption').eq(0).css('display', 'block');
            $('.menuoption').eq(1).css('display', 'block');
            $('.menuoption').eq(2).css('display', 'block');
            $('.menuoption').eq(3).css('display', 'block');
            $('.menuoption').eq(4).css('display', 'block');
            $('.menuoption').eq(5).css('display', 'block'); 
            rozwiniety1 = true;
        }
        else if(rozwiniety3 == true)
        {
            $('.optionholder').eq(2).css('display', 'none'); 
            rozwiniety3 == false;
            $('.optionholder').eq(0).css('display', 'block');
            $('.menuoption').eq(0).css('display', 'block');
            $('.menuoption').eq(1).css('display', 'block');
            $('.menuoption').eq(2).css('display', 'block');
            $('.menuoption').eq(3).css('display', 'block');
            $('.menuoption').eq(4).css('display', 'block');
            $('.menuoption').eq(5).css('display', 'block'); 
            rozwiniety1 = true;
        }
        else if(rozwiniety6 == true)
        {
            $('.optionholder').eq(3).css('display', 'none');  
            rozwiniety6 = false;
            $('.optionholder').eq(0).css('display', 'block');
            $('.menuoption').eq(0).css('display', 'block');
            $('.menuoption').eq(1).css('display', 'block');
            $('.menuoption').eq(2).css('display', 'block');
            $('.menuoption').eq(3).css('display', 'block');
            $('.menuoption').eq(4).css('display', 'block');
            $('.menuoption').eq(5).css('display', 'block'); 
            rozwiniety1 = true; 
        }
    }
    //co jeśli chce cos rozwinąć ale jest cos innego rozwiniętego? 
}

function fold1()
{
    $('.optionholder').eq(0).css('display', 'none');
    rozwiniety1 = false;
}

//.........................................................................

function expand2()
{
    if(rozwiniety1 == false && rozwiniety3 == false && rozwiniety6 == false) //pozostałe na false
    {
        $('.optionholder').eq(1).css('display', 'block');
        $('.menuoption').eq(6).css('display', 'block');
        $('.menuoption').eq(7).css('display', 'block');
        $('.menuoption').eq(8).css('display', 'block');
        $('.menuoption').eq(9).css('display', 'block');
        $('.menuoption').eq(10).css('display', 'block');
        $('.menuoption').eq(11).css('display', 'block');
        rozwiniety2 = true;
    }
    else
    {
        if(rozwiniety1 == true)
        {
            $('.optionholder').eq(0).css('display', 'none');  
            rozwiniety1 == false;
            $('.optionholder').eq(1).css('display', 'block');
            $('.menuoption').eq(6).css('display', 'block');
            $('.menuoption').eq(7).css('display', 'block');
            $('.menuoption').eq(8).css('display', 'block');
            $('.menuoption').eq(9).css('display', 'block');
            $('.menuoption').eq(10).css('display', 'block');
            $('.menuoption').eq(11).css('display', 'block');
            rozwiniety2 = true;
        }
        else if(rozwiniety3 == true)
        {
            $('.optionholder').eq(2).css('display', 'none'); 
            rozwiniety3 == false;
            $('.optionholder').eq(1).css('display', 'block');
            $('.menuoption').eq(6).css('display', 'block');
            $('.menuoption').eq(7).css('display', 'block');
            $('.menuoption').eq(8).css('display', 'block');
            $('.menuoption').eq(9).css('display', 'block');
            $('.menuoption').eq(10).css('display', 'block');
            $('.menuoption').eq(11).css('display', 'block');
            rozwiniety2 = true;
        }
        else if(rozwiniety6 == true)
        {
            $('.optionholder').eq(3).css('display', 'none'); 
            rozwiniety6 == false;
            $('.optionholder').eq(1).css('display', 'block');
            $('.menuoption').eq(6).css('display', 'block');
            $('.menuoption').eq(7).css('display', 'block');
            $('.menuoption').eq(8).css('display', 'block');
            $('.menuoption').eq(9).css('display', 'block');
            $('.menuoption').eq(10).css('display', 'block');
            $('.menuoption').eq(11).css('display', 'block');
            rozwiniety2 = true;
        }
    }
}

function fold2()
{
    $('.optionholder').eq(1).css('display', 'none');
    rozwiniety2 = false;
}

//.....................................................................

function expand3()
{
    if(rozwiniety1 == false && rozwiniety2 == false && rozwiniety6 == false)
    {
        $('.optionholder').eq(2).css('display', 'block');
        $('.menuoption').eq(12).css('display', 'block');
        $('.menuoption').eq(13).css('display', 'block');
        rozwiniety3 = true;
    }
    else
    {
        if(rozwiniety1 == true)
        {
            $('.optionholder').eq(0).css('display', 'none');  
            rozwiniety1 == false;
            $('.optionholder').eq(2).css('display', 'block');
            $('.menuoption').eq(12).css('display', 'block');
            $('.menuoption').eq(13).css('display', 'block');
            rozwiniety3 = true;
        }
        else if(rozwiniety2 == true)
        {
            $('.optionholder').eq(1).css('display', 'none');  
            rozwiniety2 == false;
            $('.optionholder').eq(2).css('display', 'block');
            $('.menuoption').eq(12).css('display', 'block');
            $('.menuoption').eq(13).css('display', 'block');
            rozwiniety3 = true;
        }
        else if(rozwiniety6 == true)
        {
            $('.optionholder').eq(3).css('display', 'none');  
            rozwiniety6 == false;
            $('.optionholder').eq(2).css('display', 'block');
            $('.menuoption').eq(12).css('display', 'block');
            $('.menuoption').eq(13).css('display', 'block');
            rozwiniety3 = true;
        }
    }
}

function fold3()
{
    $('.optionholder').eq(2).css('display', 'none');
    rozwiniety3 = false;
}

//............................................................................

function expand6()
{
    if(rozwiniety1 == false && rozwiniety2 == false && rozwiniety3 == false)
    {
        $('.optionholder').eq(3).css('display', 'block');
        $('.menuoption').eq(14).css('display', 'block');
        $('.menuoption').eq(15).css('display', 'block');
        $('.menuoption').eq(16).css('display', 'block');
        $('.menuoption').eq(17).css('display', 'block');
        rozwiniety6 = true;
    }
    else
    {
        if(rozwiniety1 == true)
        {
            $('.optionholder').eq(0).css('display', 'none');  
            rozwiniety1 == false;
            $('.optionholder').eq(3).css('display', 'block');
            $('.menuoption').eq(14).css('display', 'block');
            $('.menuoption').eq(15).css('display', 'block');
            $('.menuoption').eq(16).css('display', 'block');
            $('.menuoption').eq(17).css('display', 'block');
            rozwiniety6 = true;
        }
        else if(rozwiniety2 == true)
        {
            $('.optionholder').eq(1).css('display', 'none');  
            rozwiniety2 == false;
            $('.optionholder').eq(3).css('display', 'block');
            $('.menuoption').eq(14).css('display', 'block');
            $('.menuoption').eq(15).css('display', 'block');
            $('.menuoption').eq(16).css('display', 'block');
            $('.menuoption').eq(17).css('display', 'block');
            rozwiniety6 = true;
        }
        else if(rozwiniety3 == true)
        {
            $('.optionholder').eq(2).css('display', 'none'); 
            rozwiniety3 == false;
            $('.optionholder').eq(3).css('display', 'block');
            $('.menuoption').eq(14).css('display', 'block');
            $('.menuoption').eq(15).css('display', 'block');
            $('.menuoption').eq(16).css('display', 'block');
            $('.menuoption').eq(17).css('display', 'block');
            rozwiniety6 = true;
        }
    }
}

function fold6()
{
    $('.optionholder').eq(3).css('display', 'none');
    rozwiniety6 = false;
}

