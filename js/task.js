'use strict';

var testContent = [
{
    question: '1. Вопрос №1',
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    check: ['true', 'false', 'false']
},
{
    question: '2. Вопрос №2',
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    check: ['true', 'false', 'false']
},
{
    question: '3. Вопрос №3',
    answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    check: ['true', 'false', 'false']
}
];

localStorage.setItem('QA', JSON.stringify(testContent));

$(function() {//Шаблонизатор

var test = $('#test').html();

var content = localStorage.getItem('QA');
content = JSON.parse(content);

var page = tmpl(test, { 
	data111: content                     // data111 - содержит исходные данные
});


$('.test').click(function() { 
	$('.test').hide();
	$('.check').css("display", "block");
    $('.check').before(page);
});

$('.check').on('click', function() { 
    var $result = true;
        $('.checkbox').each(function() {
    	if ($(this).prop('checked') != ($(this).attr('value') == 'true')) {
    			$result = false;
                return false;
    		}
    });
  

$('.modText')[0].innerHTML = $result ? 'Тест пройден' : 'Тест не пройден'; 
$('.modWindow').css("display", "block").animate({opacity: 1}, 400); 


});

$('.modButton').on('click', function(){
    $('.modWindow').animate({opacity: 0}, 400, function() {
        $(this).css("display", "none"); 
 
    })
   

   $('.checkbox').each(function() { 
        $(this).prop('checked', false);
    });
});

})