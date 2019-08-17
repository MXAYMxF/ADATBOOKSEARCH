ADAT BOOK SEARCH
================

Created by @MRMMHD. See the official github site for more info.

Unzip the file structure into your folders and you will be able to use the tool immediately. 

----------------------------------------------------------------------------

Thank you for downloading the ADAT Book Search Tool. I hope it helps to streamline your searching nightmares for arabic books and kickstart your 
web scripting fantasies. Enclosed in the bundle are script documentation and user guides.

This tool relies on a number of open frameworks, mainly 960gs grid system & Amiri + Scheherezad open fonts that were used for UI. This in addition to jQuery JS library. 

## الهدف من أداة البحث المذهلة
يتطلب البحث عن الكتاب العربي في المكتبات العربية الدخول الى العديد من المواقع وتكرار عملية الكتابة والبحث في كل موقع على حدة، ناهيك عن نسيان بعض المواقع وتغير مسمياتها وعناوينها. ان الغرض من اداة البحث هذه هو تسهيل الوصول الى كافة المواقع المكتبات التي اعتدت على البحث عن الكتب العربية فيها بحيث ادخل كلمة البحث مرة واحدة في خانة البحث ثم اضغط على روابط المكتبات للاطلاع على نواتج البحث مباشرة


----
## طريقة الاستخدام
ضع الكلمات التي تريد البحث عنها في خانة البحث ثم اضغط على زر "بناء روابط البحث". بعد الضغط، ستقوم الأداة بتجهيز الروابط المباشرة لنتائج البحث في المكتبات آدناه، والمشار إليها بعلامات اسهم خضراء صغيرة. 
يمكنك فتح الروابط بالضغط عليها مباشرة بالماوس او ضغط زر الفأرة + زر COMMAND من الكيبورد لفتحها في نافذة جديدة.

 
## المكتبات
جملون جرير كينوكونيا قرطبة مكتبة نور المنهل Good Reads الكتاب دار السلام المكتبة العربية صفوة الصفوة محل المنهل دار الساقي دار فكر نيل وفرات المجرودي

## قيد الإضافة
مكتبة المصطفى دار الكتب مجامع اللغة العربية المجموعات العربية على الانترنِت مكتبة الكونغرس المكتبة الرقمية العربية القرية الإلكترونية الوراق هنداوي مكتبة جامعة ييل الجامعة الاسلامية في غزة سوق عكاظ مكتبة المغرب للكتب العربية شبكة العربية للأبحاث والنشر انطوان رفي كتبي

## حقوق الاستخدام والتطوير
إذا كنت مطور وتود الحصول على نسخة من هذه الأداة يمكنك الحصول على كامل كود المصدر من خلال GitHub الأداة مرخصة برخصة MIT التي يمكنك الاطلاع على تفاصيلها في الموقع. صنع الأداة MrMMhd@


----
![Tool Outline](https://github.com/MXAYMxF/ADATBOOKSEARCH/blob/master/code/img/ADATool.jpg =250x400)
## jQuery functions: 
This outlines the jQuery functions, key conditions and variables that were used to make this thing possible. 

##JQuery used functions & APIs
- `$.click()`	:	click event of `'Qbtn'` button that starts the process
- `$.keyup()`	:	to respond to the `'return'` key when entering using the keyboard - it hits 'click' of `'Qbtn'`
- `$.each()`	:	while loop to iterate the lists `<li>` 
- `$.hide()`	:	to hide certain elements and give visual cues to the user
- `$.css()`	: 	to change the displayed value of elements. Provides visual cue.
- `$.data()`	:	to store current `'cur'` and previous `'prev'` inputs of `'Q'` and future reference
- `$.val()`	: 	to obtain the value of the input `'Q'` 
- `$.text()`	:	to set `span` text displayed to the user
- `$.attr()`	: 	to modify and/or find the attributes of `<li>` and `<a>` tags; e.g. `'href'` attribute
- `$.replace()`	:	to replace the keywords with `'Q'` value

##Conditions
- `$('a[href*="+temp+"]')`	:	find condition where attribute equals `temp`
- `$('li > :checked + a')`	: 	find condition of anchor tags `<a>` within a list `<li>` with only `:checked` inputs

##JavaScript
- `decodeURI()`	: 	method to decode Unicode uri into %20 characters
- `decodeURIComponent()`	:	same
- `encodeURI()	`:

##Variables & Acronyms
- `'Q'`	:	is the input where the user's Query will go
- `'Qbtn'`	: is the button that the user clicks to start processing the input query

#### `Lines 320->349 `
Future plan to open urls in new window/iframes

#### `Lines 350->357` 
Document ready functions, mostly to hide `spans` and `divs` as default.

#### `Lines 360->450`
The code to start processing of user's input  
The steps in Psuedocode are as follows:  

> 1. `By clicking Button 'Qbtn'`    
> 2. `Get input from text input 'Q'   `
> 3. `Store it in Data Variable to track changes in URL  ` 
> 4. `Start processing all URLs under LI  `
> 5. `Show the user that URLs has been updated by showing the Guide span  `

### Known Bugs & Issues
- Entering short characters twice will cause issues due to while loops. To reproduce error, try entering 's' and then entering 'ss'. Open
- Entering words with a space will work once, the second time it will stop. I basically auto reload the full page if this happens. Try/catch failed so that was a quick work-around.
- Some websites like Neel Wa Furat doesn't process input properly due to Javascript Unicode and Address locator restrictions/limitations. I tried to use URI encoding/decoding to resolve it with no success. Issue parked for later.
- Some websites don't use the HTTP GET method; next step is to find the fields that correspond to each site's HTTP POST method and replicate them. See index.html footer.

----------------------------------------------------------------------------

MIT license:
http://www.opensource.org/licenses/mit-license.php
