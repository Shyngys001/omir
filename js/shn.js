let btn_kz = document.getElementById("lang-kz");
let btn_ru = document.getElementById("lang-ru");
let btn_en = document.getElementById("lang-en");


let nasha_istoria = document.getElementById("nasha_istoria");
let my_rady = document.getElementById("my_rady");
let eto = document.getElementById("eto");
let myag = document.getElementById("myag");

btn_kz.addEventListener("click", function() {
  console.log("kz");

  eto.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"Бұл қазақ халқының ажырамас бөлігі болып табылатын біздің өңірдің мәдени туризмін дамытуға қосқан зор үлес және Біз әрбір келушіміздің осының бір бөлігі болғанын қалаймыз.";
  myag.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"Құрметпен және ізгі тілектермен 'O 'mir Glamping' эко-қонақ үйінің негізін қалаушы-Жанна Найзабекова";
  nasha_istoria.textContent = '"Біз әрқашан қайтып оралғымыз келетін әлемді жасаймыз"';
  my_rady.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"Каспий теңізінің жағасындағы Ақтау қаласындағы  'O 'mir Kazakhstan' Эко-қонақ үйі табиғатпен тікелей байланыста болғысы келетіндер үшін жаңа туристік бағыт болып табылады. Жұмсақ төсек, душ, дәмді тамақ, серуендеу, әдемі күн батуы мен таңның атысы - мұның бәрі ұзақ уақыт бойы оңаша жерде жағымды демалыс ретінде есте қалады. O ' mir Glamping Эко-қонақ үйі-бұл қазақ халқының ажырамас бөлігі болып табылатын өңірдің мәдени туризмін дамытуға қосқан зор үлесі және Біз әрбір келушіміздің осының бір бөлігі болғанын қалаймыз. - Қонақ үйді ашқан кезде біздің басты идеямыз 'эко' тұжырымдамасы мен даму философиясы бар туристік қызметке стандартты емес көзқарас болды. Бұл интерьер мен бөлмелердің ерекше стилизациясында ғана емес, сонымен қатар қонақ демалып, денесін, ақыл-ойы мен рухын жетілдіретін орын жасағымыз келеді. Күн сайын біздің команда өзгерістер басталатын эко-кеңістікті ұйымдастырады. Біз дұрыс демалуға дайынбыз, сондықтан дамып демалыңыз!";
});

btn_ru.addEventListener("click", function() {
  console.log("ru");

  eto.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" + "Это большой вклад в развитие культурного туризма нашего региона, который является неотьемлемой частью Казахского народа и нам бы хотелось, чтобы каждый наш посетитель стал частью этого.";
  myag.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"С уважением и наилучшими пожеланиями основатель эко-отеля 'O’mir Glamping' - Жанна Найзабекова";
  nasha_istoria.textContent = '"Мы создаём мир, в который всегда хочется вернуться"';
  my_rady.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"Эко-отель 'O'mir Kazakhstan' в г. Актау на берегу Каспийского моря представляет собой новое туристическое направление для тех, кто хочет соприкоснуться с природой вживую, зарядиться энергией и насладиться всеми прелестями отдыха на берегу моря, не расставаясь с привычным комфортом. Мягкая кровать, душ, вкусная еда, прогулки, красивые закаты и рассветы - все это останется в памяти надолго как приятный отдых в уединенном месте. Эко-отель O’mir Glamping  - это большой вклад в развитие культурного туризма региона, который является неотьемлемой частью Казахского народа и мы хотим, чтобы каждый наш посетитель стал частью этого. - «При открытии отеля нашей главной идеей был нестандартный подход к туристическому сервису с концепцией 'эко' и философией развития. Он проявляется не только в необычной стилизации интерьера и номеров, но и в нашем желании создать место, в котором одновременно гость отдыхает и совершенствует тело, разум и дух. Ежедневно наша команда организовывает эко-пространство, где и начинаются перемены. Мы за правильный отдых, поэтому отдыхайте, развиваясь»!";

});

btn_en.addEventListener("click", function() {
  console.log("en");
  eto.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"This is a great contribution to the development of cultural tourism in our region, which is an integral part of the Kazakh people and we would like each of our visitors to become a part of it.";
  myag.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"With respect and best wishes, the founder of the eco-hotel 'O'mir Glamping' - Zhanna Naizabekova";
  nasha_istoria.textContent = '"We create a world that you always want to return to"';
  my_rady.textContent = "\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"\u00A0" +"Eco-hotel 'O'mir Kazakhstan' in Aktau on the shore of the Caspian Sea is a new tourist destination for those who want to get in touch with nature live, recharge their batteries and enjoy all the delights of relaxing by the sea, without parting with the usual comfort. A soft bed, a shower, delicious food, walks, beautiful sunsets and sunrises - all this will remain in memory for a long time as a pleasant vacation in a secluded place. Eco-hotel O'mir Glamping is a great contribution to the development of cultural tourism in the region, which is an integral part of the Kazakh people and we want each of our visitors to become a part of it. - When opening the hotel, our main idea was a non-standard approach to tourist service with the concept of 'eco' and the philosophy of development. It manifests itself not only in the unusual styling of the interior and rooms, but also in our desire to create a place in which at the same time the guest rests and improves the body, mind and spirit. Every day our team organizes an eco-space, where changes begin. We are for the right rest, so rest, developing!";
});
