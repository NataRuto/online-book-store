const dataBooks = [
    {
        id: 1,
        price: 25,
        img: "донцова",
        name: "Дарья Донцова",
        description: "Закон молодильного яблочка. Виола Тараканова собралась замуж за своего верного Степана! Пока жених в командировке, невеста опять вляпалась в историю. Прямо на глазах у Виолы в ресторане убивают мать олигарха Ферина, заказавшего писательнице создать книгу по его сюжету. Причем стреляет бывший одноклассник бизнесмена! С чего вдруг тихий историк-архивист взялся за пистолет?.. Конечно, чтобы разобраться в этой истории, Виола Тараканова полезет в гущу событий, а там обнаружится та-а-акое… Никаких «вдруг» не бывает, все в нашей жизни закономерно – действие равно противодействию. А если проще – как аукнется, так и откликнется. Сделал что-то дурное в юности, это дурное тебя через много лет настигнет…",
        category: "ИРОНИЧЕСКИЙ ДЕТЕКТИВ",
        showMore: false
    },

    {
        id: 2,
        price: 20,
        img: "южина",
        name: "Маргарита Южина",
        description: "Коза на роликах. Сотрудник милиции Павел Курицын сразу понял, что его удалая маменька Василиса Олеговна снова вляпалась в какой-то криминал. Иначе зачем ей понадобилось просить у него… бронежилетик постирать? А лучше два… Второй наверняка предназначался для ее подружки Люмилы Петуховой. К счастью, Павел не знал, что мать собиралась у него еще и пистолет попросить… почистить, – а то бы запер неуемных женщин на десять замков. Пока же он лишь запретил им совать нос во всякие расследования… А на самом деле все было так: на поружек напала собака. И ее хозяйка Римма, чтобы загладить вину, пригласила Люсю и Васю в гости. Что-то тут явно было не так – чувствовали доморощенные сыщицы. Но, может, обойдется? Вроде, и девчонка она приятная, и песик ее ничего – а предчувствие все же нехорошее… Так и вышло, нюх не подвел! Римму они обнаружили мертвой!..",
        category: "ИРОНИЧЕСКИЙ ДЕТЕКТИВ",
        showMore: false
    },

    {
        id: 3,
        price: 22,
        img: "фэй",
        name: "Мэдисон Фэй",
        description: "Красавица для заеря. Однажды вкусив её сладкую девственную невинность, я потерял над собой контроль…Меня называют зверем, хотя некогда я был принцем. И являюсь им до сих пор, даже если провел последние четыре года, скрываясь от всего мира из-за тьмы, поселившейся внутри меня.Но долг перед королевством не оставляет мне выбора, кроме как присутствовать на «балу для женихов» в соседнем королевстве. Найти жену — это самое последнее, что было у меня на уме, до тех пор пока я не увидел её, слишком сладкую, слишком невинную, слишком недоступную принцессу Ислу.",
        category: "ЛЮБОВНЫЙ РОМАН",
        showMore: false
    },

    {
        id: 4,
        price: 20,
        img: "роулинг",
        name: "ДЖ.К.Роулинг",
        description: "Гарри Поттер Джоан К. Роулинг – самая популярная серия детских книг в истории. Книги о юном волшебнике переведены на 67 языков мира (даже на латынь и древнегреческий!) и выпущены общим тиражом свыше 500 миллионов экземпляров. Теперь все части поттерианы сразу можно приобрести в шикарном подарочном оформлении.",
        category: "ФАНТАСТИКА",
        showMore: false
    },

    {
        id: 5,
        price: 19,
        img: "толкин",
        name: "Дж.Р.Р.Толкин",
        description: " Властелин колец. Хоббит Фродо, получивший в наследство от дядюшки Бильбо Кольцо Всевластия, отправляется в опасное путешествие в самое сердце земель Зла, где в огне Роковой Горы должен свершить судьбу Темного Властелина. В своем приключении он обзаводится верными и добрыми друзьями, в числе которых маг, эльф, гном, люди и хоббиты.",
        category: "ФАНТАСТИКА",
        showMore: false
    },

    {
        id: 6,
        price: 23,
        img: "аньярская",
        name: "Рина Аньярская",
        description: " Свадьба. В Англии появляется молодой граф – потенциальный жених наследницы. Двор и рыцари Красного ордена уверены: она влюбилась в жениха, и эти чувства взаимны. Но граф страстно увлекается камер-фрейлиной, младшей сестрой Райта, чем срывает планы короля. Леди Анжелина, готовясь к браку, тоже решает вкусить запретных радостей: заводит тайный роман, при этом открыто флиртует с женихом наследницы. Когда королевская семья уезжает в Кёнигсберг на венчание леди Анжелины, а Райт остаётся в Англии, чтобы уберечь сестру от позора. Тем временем Август Прусский, всерьёз увлекающийся астрономией, составляет звёздную карту наследницы, чтобы узнать её судьбу…",
        category: "ИСТОРИЧЕСКИЙ РОМАН",
        showMore: false
    },

    {
        id: 7,
        price: 20,
        img: "калинина",
        name: "Дарья Калинина",
        description: "Шпионы у дачи. Сашеньке было безумно скучно на родительской даче, и девушка придумала себе развлечение – шпионить за соседями, узнавая их маленькие и не очень секреты. Оказалось, что практически у каждого из них завалялся скелетик на дачных грядках. А однажды к одним весьма подозрительным соседям кто-то ночью подкинул труп девушки в парике. Сашенька знает всех на ее улице и могла бы рассказать следователю много интересного…",
        category: "ИРОНИЧЕСКИЙ ДЕТЕКТИВ",
        showMore: false
    },

    {
        id: 8,
        price: 22,
        img: "лакс",
        name: "Айрин Лакс",
        description: " Счастье любой ценой. В автомобильной аварии я потеряла не только мужа, но и ребёнка. Сейчас у меня есть только одно желание: стать мамой. Я обратилась за помощью к брату-близнецу погибшего мужа. Но я понятия не имела, какую цену мне придётся заплатить…",
        category: "ЛЮБОВНЫЙ РОМАН",
        showMore: false
    },

    {
        id: 9,
        price: 25,
        img: "митчелл",
        name: "Маргарет Митчелл",
        description: "Роман «Унесенные ветром» один из лучших образцов американской прозы, правдиво и точно отражающих события гражданской войны 1861-1865 годов и период Реконструкции в США. В центре романа – пленительный женский образ главной героини – Скарлетт О’Хара. Зеленоглазая красавица и ирландскими корнями, капризная и своенравная, но, вместе с тем, сильная и отчаянная, готовая найти выход из любой ситуации, не сломленная ни любовными неудачами, ни смертью родителей, ни ужасами войны. Митчелл одарила свою героиню очень интересным и загадочным характером: решительным, буйным и непредсказуемым.",
        category: "ИСТОРИЧЕСКИЙ РОМАН",
        showMore: false
    },

    {
        id: 10,
        price: 18,
        img: "глуховский",
        name: "Дмитрий Глуховский",
        description: "Метро 2023. Двадцать лет спустя Третьей мировой войны последние выжившие люди прячутся на станциях и в туннелях московского метро, самого большого на Земле противоатомного бомбоубежища. Поверхность планеты заражена и непригодна для обитания, и станции метро становятся последним пристанищем для человека. Они превращаются в независимые города-государства, которые соперничают и воюют друг с другом. Они не готовы примириться даже перед лицом новой страшной опасности, которая угрожает всем людям окончательным истреблением. Артем, двадцатилетний парень со станции ВДНХ, должен пройти через все метро, чтобы спасти свой единственный дом – и все человечество.",
        category: "ФАНТАСТИКА",
        showMore: false
    },

    {
        id: 11,
        price: 27,
        img: "морис",
        name: "Ева Морис",
        description: "Только (не) рабочие отношения. Это оказался очень странный день. Я пришла устроиться стажером в отдел маркетинга, но неожиданно оказалась на месте секретаря у крутого начальника.В первый же день вся компания увидела, как я хожу в пиджаке своего босса. Хорошо хоть они не знают, что я делала в его душевой!Он насмешливо называет меня Воробушком, напоминая, что его интересуют только рабочие отношения, но его взгляды и действия говорят совсем о другом...Он в разы увереннее и опытнее и, кажется, получает удовольствие, ставя меня в двусмысленные ситуации. Что за игру он ведет, и что делать мне? Включиться в нее или бежать, пока не поздно?",
        category: "ЛЮБОВНЫЙ РОМАН",
        showMore: false
    },

    {
        id: 12,
        price: 25,
        img: "хамфрис",
        name: "Крис Хамфрис",
        description: " Армагеддон 1453. Этот город лишил Григория Ласкаря всего. Здесь, в родных стенах, его объявили предателем, отняли его гордое имя, подвергли постыдной экзекуции и навеки изгнали на чужбину. И после этого, один из лучших и благороднейших сыновей Константинополя, он, назвавшись Зораном из Рагузы, был вынужден стать наемником - сражаться в чужих войнах за чужие деньги. Но вот грянул 1453 год - орды османского султана Мехмеда хлынули на его город. И Григорий, потомок императорской фамилии, забыл прежние обиды. Константинополь не должен пасть! Даже если скоро его будут называть не Константинополь, а Армагеддон…",
        category: "ИСТОРИЧЕСКИЙ РОМАН",
        showMore: false
    }
]

export default dataBooks;