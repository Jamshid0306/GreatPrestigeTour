import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    nav: {
      home: 'Bosh sahifa',
      destinations: "Yo'nalishlar",
      advantages: 'Afzalliklar',
      testimonials: 'Fikrlar',
      book: 'Band qilish',
    },
    lang: {
      uz: 'UZ',
      ru: 'RU',
      en: 'EN',
    },
    hero: {
      badge: 'Premium Travel Company',
      title: 'Great Prestige Tour bilan orzudagi safaringizni boshlang',
      description: 'Zamonaviy servis, aniq reja va professional jamoa bilan siz uchun qulay hamda unutilmas sayohat tashkil qilamiz.',
      explore: "Yo'nalishlar",
      whyUs: 'Afzalliklar',
      stats: {
        experience: 'Yillik tajriba',
        clients: 'Mamnun mijozlar',
        routes: "Mashhur yo'nalishlar",
      },
      videoTitle: 'Great Prestige Tour video',
    },
    destinations: {
      tag: "O'zbekiston merosi",
      title: "Tarixiy obidalar bo'ylab sayohat",
      book: 'Band qilish',
      watch: "Videoni ko'rish",
      videoUnavailable: 'Video mavjud emas.',
      items: {
        registan: {
          title: 'Samarqand - Registon maydoni',
          info: 'Registon maydoni Samarqandning eng mashhur tarixiy markazi bo‘lib, Ulug‘bek, Sherdor va Tillakori madrasalari bilan tanilgan. Bu yerda Temuriylar davri meʼmorchiligi, nafis koshinkor bezaklar va sharqona ilm-fan ruhi yaqqol seziladi.',
        },
        alBuxoriy: {
          title: 'Samarqand - Imom al-Buxoriy majmuasi',
          info: 'Imom al-Buxoriy majmuasi islom olamining buyuk muhaddisi xotirasiga bag‘ishlangan muqaddas maskan hisoblanadi. Majmua ziyorat turizmi, diniy-maʼrifiy meros va zamonaviy meʼmoriy yechimlarni birlashtiradi.',
        },
        ichanKala: {
          title: 'Xorazm - Ichan Qalʼa',
          info: 'Ichan Qalʼa Xivaning qadimiy ichki shahri bo‘lib, UNESCO merosi ro‘yxatiga kiritilgan. Mustahkam devorlar, minoralar, madrasa va saroylar o‘tmishdagi Xorazm sivilizatsiyasi hayotini jonli tarzda namoyon etadi.',
        },
        poiKalon: {
          title: 'Buxoro - Ark va Poi Kalon',
          info: 'Buxorodagi Ark qalʼasi va Poi Kalon majmuasi Markaziy Osiyodagi eng muhim tarixiy obidalardan hisoblanadi. Bu maskanlar qadimiy davlat boshqaruvi, diniy hayot va meʼmoriy anʼanalarni chuqur aks ettiradi.',
        },
        oqsaroy: {
          title: 'Shahrisabz - Oqsaroy',
          info: 'Shahrisabzdagi Oqsaroy Amir Temur davrining ulkan saroy majmuasi sifatida mashhur. Hozirgi kungacha saqlangan peshtoq qoldiqlari o‘sha davr meʼmorchiligi va saltanat qudratini yoritib beradi.',
        },
        hazratiImom: {
          title: 'Toshkent - Hazrati Imom',
          info: 'Hazrati Imom majmuasi Toshkentning muhim diniy va tarixiy markazlaridan biri. Bu hududda masjidlar, madrasalar va qadimiy qo‘lyozmalar saqlanadigan maskanlar jamlangan bo‘lib, boy maʼnaviy merosni aks ettiradi.',
        },
        fayoztepa: {
          title: 'Termiz - Fayoztepa',
          info: 'Fayoztepa Surxondaryo hududidagi qadimiy buddaviylik yodgorligi bo‘lib, Kushon davri madaniy qatlamlarini namoyon etadi. Arxeologik topilmalar bu joyning Buyuk Ipak yo‘li tarixidagi o‘rnini ko‘rsatadi.',
        },
      },
    },
    advantages: {
      tag: 'Nega biz?',
      title: 'Ishonchli va professional yondashuv',
      items: {
        plan: {
          title: 'Qisqa va aniq reja',
          text: "Har bir tur bo'yicha kunlik itinerary oldindan beriladi.",
        },
        support: {
          title: "24/7 qo'llab-quvvatlash",
          text: "Safar davomida operatorlarimiz doim aloqada bo'ladi.",
        },
        pricing: {
          title: 'Shaffof narxlar',
          text: "Yashirin to'lovlarsiz, har bir xizmat aniq ko'rsatiladi.",
        },
        visa: {
          title: 'Vizaga yordam',
          text: "Hujjatlarni to'ldirishdan topshirishgacha to'liq ko'mak.",
        },
      },
    },
    testimonials: {
      tag: 'Mijozlar fikri',
      title: 'Biz haqimizda nima deyishadi?',
      items: {
        mohira: {
          city: 'Toshkent',
          text: 'Juda tartibli xizmat. Mehmonxona, transfer va ekskursiyalar juda yaxshi tashkil qilingan.',
        },
        javohir: {
          city: 'Samarqand',
          text: "Biznes paket oldik, kutganimizdan ham yuqori darajada bo'ldi. Tavsiya qilaman.",
        },
        dilshod: {
          city: "Farg'ona",
          text: 'Prestige paket rostdan premium ekan. Team juda professional ishlaydi.',
        },
      },
    },
    modal: {
      tag: 'Band qilish',
      title: 'Sayohat uchun ariza',
      fullName: 'Ism',
      fullNamePlaceholder: 'Ismingizni kiriting',
      phone: 'Telefon raqam',
      phonePlaceholder: '+998 70 104 99 99',
      tour: 'Qaysi turni band qilasiz',
      note: 'Izoh',
      notePlaceholder: "Qo'shimcha ma'lumot yozing",
      submit: 'Band qilish',
      sending: 'Yuborilmoqda...',
      success: 'Buyurtma yuborildi',
      successToast: 'Sizning xabaringiz muvaffaqiyatli yuborildi',
      error: 'Xatolik yuz berdi. Qayta urinib ko‘ring.',
      configMissing: 'Telegram sozlamalari topilmadi. .env faylni tekshiring.',
      close: 'Yopish',
    },
    footer: {
      brand: 'Great Prestige Tour',
      title: 'Safaringizni ishonch bilan boshlang',
      description: "Tarixiy shaharlardan zamonaviy yo'nalishlargacha professional jamoamiz siz uchun qulay va mazmunli sayohat tashkil qiladi.",
      quickLinks: 'Tezkor linklar',
      contact: 'Aloqa',
      license: 'Litsenziya',
      phone: 'Telefon',
      telegram: 'Telegram',
      email: 'Email',
      contactBtn: "Bog'lanish",
      rights: 'Barcha huquqlar himoyalangan',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      destinations: 'Направления',
      advantages: 'Преимущества',
      testimonials: 'Отзывы',
      book: 'Бронь',
    },
    lang: {
      uz: 'UZ',
      ru: 'RU',
      en: 'EN',
    },
    hero: {
      badge: 'Премиальная туристическая компания',
      title: 'Начните путешествие мечты с Great Prestige Tour',
      description: 'Современный сервис, четкий план и профессиональная команда организуют для вас комфортную и незабываемую поездку.',
      explore: 'Направления',
      whyUs: 'Преимущества',
      stats: {
        experience: 'Лет опыта',
        clients: 'Довольных клиентов',
        routes: 'Популярных маршрутов',
      },
      videoTitle: 'Great Prestige Tour видео',
    },
    destinations: {
      tag: 'Наследие Узбекистана',
      title: 'Путешествие по историческим памятникам',
      book: 'Бронь',
      watch: 'Смотреть видео',
      videoUnavailable: 'Видео недоступно.',
      items: {
        registan: {
          title: 'Самарканд - площадь Регистан',
          info: 'Площадь Регистан является самым известным историческим центром Самарканда с медресе Улугбека, Шердор и Тилля-Кари. Здесь ярко ощущаются архитектура эпохи Тимуридов и утонченная восточная мозаика.',
        },
        alBuxoriy: {
          title: 'Самарканд - комплекс Имама аль-Бухари',
          info: 'Комплекс Имама аль-Бухари является священным местом, посвященным памяти великого исламского ученого-хадисоведа. Он объединяет паломнический туризм, духовно-просветительское наследие и современную архитектуру.',
        },
        ichanKala: {
          title: 'Хорезм - Ичан-Кала',
          info: 'Ичан-Кала - древний внутренний город Хивы, включенный в список Всемирного наследия ЮНЕСКО. Крепостные стены, минареты, медресе и дворцы наглядно показывают историю цивилизации Хорезма.',
        },
        poiKalon: {
          title: 'Бухара - Арк и Пои-Калян',
          info: 'Крепость Арк и ансамбль Пои-Калян в Бухаре считаются одними из важнейших памятников Центральной Азии. Эти места глубоко отражают древние традиции управления, религии и архитектуры.',
        },
        oqsaroy: {
          title: 'Шахрисабз - Ак-Сарай',
          info: 'Ак-Сарай в Шахрисабзе известен как грандиозный дворцовый комплекс эпохи Амира Темура. Сохранившиеся фрагменты портала передают масштаб и мощь той эпохи.',
        },
        hazratiImom: {
          title: 'Ташкент - Хазрати Имам',
          info: 'Комплекс Хазрати Имам - один из важных духовно-исторических центров Ташкента. Здесь расположены мечети, медресе и хранилища древних рукописей.',
        },
        fayoztepa: {
          title: 'Термез - Фаязтепа',
          info: 'Фаязтепа - древний буддийский памятник Сурхандарьи, отражающий культурные слои кушанского периода. Археологические находки показывают значимость места на Великом шелковом пути.',
        },
      },
    },
    advantages: {
      tag: 'Почему мы?',
      title: 'Надежный и профессиональный подход',
      items: {
        plan: {
          title: 'Краткий и четкий план',
          text: 'По каждому туру заранее предоставляется подробный ежедневный маршрут.',
        },
        support: {
          title: 'Поддержка 24/7',
          text: 'Наши операторы всегда на связи на протяжении всей поездки.',
        },
        pricing: {
          title: 'Прозрачные цены',
          text: 'Без скрытых платежей, каждая услуга четко указана.',
        },
        visa: {
          title: 'Помощь с визой',
          text: 'Полное сопровождение от заполнения документов до подачи.',
        },
      },
    },
    testimonials: {
      tag: 'Отзывы клиентов',
      title: 'Что говорят о нас?',
      items: {
        mohira: {
          city: 'Ташкент',
          text: 'Очень организованный сервис. Отель, трансфер и экскурсии были на высоком уровне.',
        },
        javohir: {
          city: 'Самарканд',
          text: 'Взяли бизнес-пакет, результат превзошел ожидания. Рекомендую.',
        },
        dilshod: {
          city: 'Фергана',
          text: 'Пакет Prestige действительно премиальный. Команда работает профессионально.',
        },
      },
    },
    modal: {
      tag: 'Бронь',
      title: 'Заявка на путешествие',
      fullName: 'Имя',
      fullNamePlaceholder: 'Введите ваше имя',
      phone: 'Телефон',
      phonePlaceholder: '+998 70 104 99 99',
      tour: 'Какой тур бронируете',
      note: 'Комментарий',
      notePlaceholder: 'Напишите дополнительную информацию',
      submit: 'Забронировать',
      sending: 'Отправка...',
      success: 'Заявка отправлена',
      successToast: 'Ваше сообщение успешно отправлено',
      error: 'Произошла ошибка. Попробуйте снова.',
      configMissing: 'Настройки Telegram не найдены. Проверьте .env файл.',
      close: 'Закрыть',
    },
    footer: {
      brand: 'Great Prestige Tour',
      title: 'Начните путешествие с уверенностью',
      description: 'От исторических городов до современных маршрутов наша профессиональная команда организует для вас комфортный и насыщенный тур.',
      quickLinks: 'Быстрые ссылки',
      contact: 'Контакты',
      license: 'Лицензия',
      phone: 'Телефон',
      telegram: 'Telegram',
      email: 'Email',
      contactBtn: 'Связаться',
      rights: 'Все права защищены',
    },
  },
  en: {
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      advantages: 'Advantages',
      testimonials: 'Testimonials',
      book: 'Book now',
    },
    lang: {
      uz: 'UZ',
      ru: 'RU',
      en: 'EN',
    },
    hero: {
      badge: 'Premium Travel Company',
      title: 'Start your dream trip with Great Prestige Tour',
      description: 'With modern service, clear planning, and a professional team, we organize comfortable and unforgettable journeys for you.',
      explore: 'Destinations',
      whyUs: 'Advantages',
      stats: {
        experience: 'Years of experience',
        clients: 'Happy clients',
        routes: 'Popular routes',
      },
      videoTitle: 'Great Prestige Tour video',
    },
    destinations: {
      tag: 'Uzbekistan Heritage',
      title: 'Journey Through Historical Landmarks',
      book: 'Book now',
      watch: 'Watch video',
      videoUnavailable: 'Video is unavailable.',
      items: {
        registan: {
          title: 'Samarkand - Registan Square',
          info: 'Registan Square is the most iconic historical center of Samarkand, featuring the Ulugh Beg, Sher-Dor, and Tillya-Kori madrasas. It highlights Timurid architecture, intricate tilework, and a rich scholarly heritage.',
        },
        alBuxoriy: {
          title: 'Samarkand - Imam al-Bukhari Complex',
          info: 'The Imam al-Bukhari complex is a sacred site dedicated to the memory of one of the greatest scholars of hadith in the Islamic world. It combines pilgrimage tourism, spiritual heritage, and contemporary architecture.',
        },
        ichanKala: {
          title: 'Khorezm - Ichan Kala',
          info: 'Ichan Kala is the ancient inner city of Khiva and a UNESCO World Heritage site. Its fortified walls, minarets, madrasas, and palaces vividly reflect the legacy of Khorezm civilization.',
        },
        poiKalon: {
          title: 'Bukhara - Ark and Poi Kalyan',
          info: 'The Ark Fortress and Poi Kalyan complex in Bukhara are among the most important historical monuments in Central Asia. They preserve deep traditions of governance, religion, and architecture.',
        },
        oqsaroy: {
          title: 'Shahrisabz - Ak-Saray',
          info: 'Ak-Saray in Shahrisabz is famous as a grand palace complex from the era of Amir Temur. The remaining portal structures still convey the monumental style of that period.',
        },
        hazratiImom: {
          title: 'Tashkent - Hazrati Imam',
          info: 'The Hazrati Imam complex is one of Tashkent’s key spiritual and historical centers. It includes mosques, madrasas, and repositories of ancient manuscripts.',
        },
        fayoztepa: {
          title: 'Termez - Fayaztepa',
          info: 'Fayaztepa is an ancient Buddhist site in Surkhandarya that showcases Kushan-era cultural layers. Archaeological findings demonstrate its role along the Great Silk Road.',
        },
      },
    },
    advantages: {
      tag: 'Why us?',
      title: 'Reliable and professional approach',
      items: {
        plan: {
          title: 'Clear and concise plan',
          text: 'A detailed day-by-day itinerary is provided for each tour in advance.',
        },
        support: {
          title: '24/7 support',
          text: 'Our operators stay in touch with you throughout the entire trip.',
        },
        pricing: {
          title: 'Transparent pricing',
          text: 'No hidden fees. Every service is clearly listed.',
        },
        visa: {
          title: 'Visa assistance',
          text: 'Full support from document preparation to submission.',
        },
      },
    },
    testimonials: {
      tag: 'Client reviews',
      title: 'What do people say about us?',
      items: {
        mohira: {
          city: 'Tashkent',
          text: 'Very well-organized service. Hotel, transfers, and excursions were all arranged perfectly.',
        },
        javohir: {
          city: 'Samarkand',
          text: 'We chose the business package and it exceeded expectations. Highly recommended.',
        },
        dilshod: {
          city: 'Fergana',
          text: 'The Prestige package is truly premium. The team works very professionally.',
        },
      },
    },
    modal: {
      tag: 'Booking',
      title: 'Travel request form',
      fullName: 'Full name',
      fullNamePlaceholder: 'Enter your full name',
      phone: 'Phone number',
      phonePlaceholder: '+998 70 104 99 99',
      tour: 'Which tour would you like to book',
      note: 'Comment',
      notePlaceholder: 'Write additional details',
      submit: 'Book now',
      sending: 'Sending...',
      success: 'Request sent',
      successToast: 'Your message was sent successfully',
      error: 'Something went wrong. Please try again.',
      configMissing: 'Telegram config missing. Check your .env file.',
      close: 'Close',
    },
    footer: {
      brand: 'Great Prestige Tour',
      title: 'Start your journey with confidence',
      description: 'From historical cities to modern destinations, our professional team arranges comfortable and meaningful travel experiences for you.',
      quickLinks: 'Quick links',
      contact: 'Contact',
      license: 'License',
      phone: 'Phone',
      telegram: 'Telegram',
      email: 'Email',
      contactBtn: 'Get in touch',
      rights: 'All rights reserved',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'uz',
  fallbackLocale: 'uz',
  messages,
})

export default i18n
