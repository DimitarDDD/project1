
var arrLang = { 
    'en' : { 
        'Home': 'Home',
        'About': 'About',
        'Products ': 'Products',
        'Price List' : 'Price List', 
        'Machines ' : 'Machines',
        'Contact' : 'Contact',
        'Designe' : 'Design' 
        
    },
    
    'bg' : {
         'Home': 'Начало',
        'About': 'За нас',
        'Products ': 'Продукти',
        'Price List' : 'Ценова Листа', 
        'Machines ' : 'Машини',
        'Contact' : 'Контанти',
        'Designe' : 'Дизайн' 
    }  
}; 

$(function(){ 
    $('.translate').click(function(){ 
        var lang = $(this).attr('id'); 
      $('.lang').each(function(index, element){ 
          $(this).text(arrLang[lang][$(this ).attr('key')]);
        
      });
    });
});
    
        
        
        
        
        
        
        
        