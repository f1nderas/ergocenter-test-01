$(document).ready(function () {
  $(".header-car_list-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/arrow.png" alt="next"></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/arrow.png" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const oldNews = [
  {
    date: "21 июля",
    text: "Главный матч Лиги переносится на август в спорткомлекс Триумф",
  },
  {
    date: "15 июня",
    text: "Дисквалификация Иванчикова, спортивный клюб СКА, продлится до следующего слушания",
  },
  {
    date: "7 апреля",
    text: "Набрана новая команда судей",
  },
  {
    date: "2 апреля",
    text: "Дисквалификация Иванчикова, спортивный клюб СКА, продлится до следующего слушания",
  },
];

const jsonNews = JSON.stringify(oldNews);
const news = JSON.parse(jsonNews)

window.onload = function () {
  const domNews = document.querySelector("#news");
  news.forEach((e) => {
    let item = document.createElement('div');
    item.className = "cont-1_news-item";
    let date = document.createElement('div');
    date.className = "div_date";
    date.innerHTML = e.date;
    let text = document.createElement('a');
    text.className = "div_txt";
    text.innerHTML = e.text;
    text.setAttribute('href', '#');

    item.append(date)
    item.append(text)
    domNews.append(item)
  });
};
