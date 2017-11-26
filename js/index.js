$(document).ready(function() {
  var quotes = [
    [
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
      "Francis of Assisi"
    ],
    [
      "Believe you can and you're halfway there.",
      "Theodore Roosevelt"
    ],
    [
      "It does not matter how slowly you go as long as you do not stop.",
      "Confucius"
    ],
    [
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
      "Thomas A. Edison"
    ],
    [
      "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
      "Confucius"
    ],
    [
      "Don't watch the clock; do what it does. Keep going.",
      "Sam Levenson"
    ],
    [
      "Expect problems and eat them for breakfast.",
      "Alfred A. Montapert"
    ],
    [
      "Start where you are. Use what you have. Do what you can.",
      "Arthur Ashe"
    ],
    [
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
      "Samuel Beckett"
    ],
    [
      "Be yourself; everyone else is already taken.",
      "Oscar Wilde"
    ],
    [
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      "Albert Einstein"
    ],
    [
      "Always remember that you are absolutely unique. Just like everyone else.",
      "Margaret Mead"
    ],
    [
      "Do not take life too seriously. You will never get out of it alive.",
      "Elbert Hubbard"
    ],
    [
      "People who think they know everything are a great annoyance to those of us who do.",
      "Isaac Asimov"
    ],
    [
      "Procrastination is the art of keeping up with yesterday.",
      "Don Marquis"
    ],
    [
      "Get your facts first, then you can distort them as you please.",
      "Mark Twain"
    ],
    [
      "A day without sunshine is like, you know, night.",
      "Steve Martin"
    ],
    [
      "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
      "Ellen DeGeneres"
    ],
    [
      "Don't sweat the petty things and don't pet the sweaty things.",
      "George Carlin"
    ],
    [
      "Always do whatever's next.",
      "George Carlin"
    ],
    [
      "Atheism is a non-prophet organization.",
      "George Carlin"
    ],
    [
      "Hapiness is not something ready made. It comes from your own actions.",
      "Dalai Lama"
    ]
  ];

  $("button").click(function() {
    var randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];

    $("blockquote").fadeOut(300, function() {
      $("blockquote").html('');
      $("blockquote").html(randomQuote[0] + "<footer>" + randomQuote[1] + " <a href=\"https://twitter.com/intent/tweet?text=" + randomQuote[0] + " -" + randomQuote[1] + "\"><i class=\"fa fa-twitter\"></i></a></footer>");
      $("blockquote").fadeIn(500);
    });
  });

});