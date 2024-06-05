import React from 'react';

export const en = {
  navigation: {
    navLinks: [
      { name: 'About me', color: 'red', sectionId: 'about' },
      { name: 'Skills', color: 'orange', sectionId: 'skills' },
      { name: 'Projects', color: 'yellow', sectionId: 'projects' },
      { name: 'Contacts', color: 'green', sectionId: 'contacts' },
    ],

    cv: {
      name: 'CV',
      color: 'blue',
      pdf: '/cv/CV-OlesiaPryhun-JuniorFrontEnd(EN_ver).pdf',
    },
  },

  about: {
    name: 'Olesia Pryhun',
    qualities: {
      header: 'Personal qualities:',
      qualitiesList: [
        { name: 'Team player', icon: '/pokemon-icons/squirtle-icon.png' },
        { name: 'Responsible', icon: '/pokemon-icons/bulbasaur-icon.png' },
        { name: 'Good-tempered', icon: '/pokemon-icons/charmander-icon.png' },
        { name: 'Quick learner', icon: '/pokemon-icons/meowth-icon.png' },
        { name: 'Likes order', icon: '/pokemon-icons/pidgey-icon.png' },
      ],
    },
    background: {
      header: 'Background:',
      text: () => (
        <>
          I had <strong>worked as a teacher</strong> for a few years before
          getting into web development. I am still good at explaining things :)
        </>
      ),
    },
    studies: {
      header: 'My studying journey:',
      text: () => (
        <>
          I finished a front-end course, then I continued my studies with{' '}
          <strong> a mentor</strong> (experienced web developer). He provided me
          with support and guidance throughout the whole process.
        </>
      ),
    },

    learning: {
      header: ' How did I learn?',
      text: () => (
        <>
          {' '}
          I learned through <strong> building projects,</strong> making{' '}
          <strong> mistakes</strong> and <strong> fixing them</strong>. I used
          all tools possible: from docs and forums to YouTube and ChatGPT.
        </>
      ),
    },
  },

  skills: {
    header: 'Skills',
    comment: () => (
      <>
        In the fast-paced and ever-evolving world of web development, I believe
        that <strong> adaptability </strong> is a key. I am{' '}
        <strong> ready to learn new and old ways </strong> - whatever it takes
        to create a competitive product!
      </>
    ),
    frontSkills: [
      { icon: '/empty.png ', name: ' ', iconStyle: 'empty' },
      {
        icon: '/skills-icons/ts-icon.png',
        name: 'TypeScript',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/redux-icon.svg',
        name: 'Redux',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs-icon.png',
        name: 'Next.js',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/react-icon.png',
        name: 'React',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/sass-icon.png',
        name: 'Sass/Scss',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/js-icon.png',
        name: 'JavaScript',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/css-icon.png',
        name: 'CSS',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/html-icon.png',
        name: 'HTML',
        iconStyle: 'circled',
      },
    ],

    backSkills: [
      { icon: '/empty.png ', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },

      {
        icon: '/skills-icons/mongodb-icon.png',
        name: 'MongoDB',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs2-icon.png',
        name: 'Next.js API',
        iconStyle: 'circled',
      },
    ],
    otherSkills: [
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      {
        icon: '/empty.png',
        name: ' ',
        iconStyle: 'empty',
      },
      {
        icon: '/skills-icons/graphql-icon.png',
        name: 'GraphQL',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/chakraui-icon.jpg',
        name: 'Chakra UI',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/postman-icon.png',
        name: 'Postman',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/git-icon.png',
        name: 'Git + Bash',
        iconStyle: 'circled',
      },
    ],

    frontSkillsMobile: [
      {
        icon: '/skills-icons/ts-icon.png',
        name: 'TypeScript',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/redux-icon.svg',
        name: 'Redux',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs-icon.png',
        name: 'Next.js',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/react-icon.png',
        name: 'React',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/sass-icon.png',
        name: 'Sass/Scss',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/js-icon.png',
        name: 'JavaScript',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/css-icon.png',
        name: 'CSS',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/html-icon.png',
        name: 'HTML',
        iconStyle: 'circled',
      },
    ],

    backSkillsMobile: [
      {
        icon: '/skills-icons/mongodb-icon.png',
        name: 'MongoDB',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs2-icon.png',
        name: 'Next.js API',
        iconStyle: 'circled',
      },
    ],

    otherSkillsMobile: [
      {
        icon: '/skills-icons/graphql-icon.png',
        name: 'GraphQL',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/chakraui-icon.jpg',
        name: 'Chakra UI',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/postman-icon.png',
        name: 'Postman',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/git-icon.png',
        name: 'Git + Bash',
        iconStyle: 'circled',
      },
    ],
  },

  projects: {
    projectsSectionHeader: {
      header: 'Projects',
      text: 'Pokemons evolve... so do developers!',
    },
    projectsArray: [
      {
        color1: 'yellow',
        color2: 'orange',
        btn1: 'CODE',
        btn2: 'SITE',
        pokemonImg: '/pokeball.png',
        pokemonImgSize: 'sizeS',
        tv: 'project1',
        screenshot: {
          link: 'https://weather-app-developer-pryhun.netlify.app/',
          screenshotImg:
            '/projects-screenshots/weather-project-screenshot-small.jpg',
        },
        level: 'Level 1: Pokeball',
        title: 'Project: Weather-App',
        skills: [
          {
            icon: '/skills-icons/react-icon.png',
            name: 'React',
          },

          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
        ],
        description: [
          'You have to start somewhere! My first React project - simple, stylish... well, merely useful... but working!',
        ],

        learned: {
          title: 'What did I learn?',
          list: [
            'Making independent and reusable components;',
            'Using external API;',
            'Making HTTP requests using Axios;',
            'Using SCSS and CSS modules;',
            'Creating responsive layouts;',
            'Using libraries (e.g. "classnames", "react-animated-weather")',
          ],
        },
        features: {
          title: 'Features',
          list: [
            "Type a city name to check today's weather and the weather forecast for 6 days;",
            'You can switch between Fahrenheit and Celsius;',
            'Error pop-up shows if the city is typed wrong;',
            'Submit button is disabled if input field is empty.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/weather-react',
        siteLink: 'https://weather-app-developer-pryhun.netlify.app/',
      },

      {
        color1: 'green',
        color2: 'blue',
        btn1: 'CODE',
        btn2: 'SITE',
        pokemonImg: '/pichu.png',
        pokemonImgSize: 'sizeS',
        tv: 'project2',
        screenshot: {
          link: 'https://rozetka-homepage-visual-copy.netlify.app/',
          screenshotImg:
            '/projects-screenshots/rozetka-project-screenshot-small.png',
        },
        level: 'Level 2: Pichu',
        title: 'Project: Visual "Rozetka" homepage copy',
        skills: [
          {
            icon: '/skills-icons/nextjs-icon.png',
            name: 'Next.js',
          },

          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/redux-icon.svg',
            name: 'Redux',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
        ],
        description: [
          'Rozetka.com.ua is a famous Ukrainian online shopping website.',
          'I used its homepage as a template for practicing reproducing a VISUAL layout as close to the original as possible.',
          'Original “Rozetka” website is often updated and has design changes. This project was made some time ago, so it can look a bit different from the original now.',
        ],

        learned: {
          title: 'What did I learn?',
          list: [
            'Building complex adaptive layouts (for devices ranging from smartphones to large desktop screens);',
            'Implementing "hamburger" menu navigation;',
            'Providing  cross-browser compatibility;',
            'Using advanced React features, like HOCs and custom hooks;',
            'Creating pop-ups;',
            'Using Redux for global state management.',
          ],
        },
        features: {
          title: 'Features',
          list: [
            'It is a VISUAL copy! But I added some functionality as an opportunity to practise;',
            'You can add products to the cart using “buy” button under the product picture;',
            'You can increase or decrease the amount of products in the cart;',
            'You can delete products from the cart;',
            'Note: This website has the Ukrainian language version only.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/rozetka',
        siteLink: 'https://rozetka-homepage-visual-copy.netlify.app/',
      },

      {
        color1: 'purple',
        color2: 'red',
        btn1: 'CODE',
        btn2: 'SITE',
        pokemonImg: '/pikachu.png',
        pokemonImgSize: 'sizeM',
        tv: 'project3',
        screenshot: {
          link: 'https://fake-shop-developer-pryhun.netlify.app/',
          screenshotImg:
            '/projects-screenshots/screenshot-project-fake-shop-small.png',
        },
        level: 'Level 3: Pikachu',
        title: 'Project: Fake online shop',
        skills: [
          {
            icon: '/skills-icons/nextjs-icon.png',
            name: 'Next.js',
          },
          {
            icon: '/skills-icons/nextjs2-icon.png',
            name: 'Next.js API',
          },
          {
            icon: '/skills-icons/mongodb-icon.png',
            name: 'MongoDB',
          },
          {
            icon: '/skills-icons/postman-icon.png',
            name: 'Postman',
          },
          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/redux-icon.svg',
            name: 'Redux',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
          {
            icon: '/skills-icons/eslint-icon.png',
            name: 'ESLint',
          },
        ],
        description: [
          'This fake shop imitates real online shopping experience. You don’t pay, and you will never get your order, but all other things look and function quite the way they are supposed to.',
          'Products objects are received from the external API. Cart and order logic is implemented using a custom-built local Next.js API, that is connected to Mongo Database.',
        ],

        learned: {
          title: 'What did I learn?',
          list: [
            'Comprehensive processing of external API data;',
            'Building a local Next.js API, that is connected to MongoDB;',
            'Organizing the data exchange between the app and the database;',
            'Using Redux Toolkit for queries and data management;',
            'Implementing a simple search engine;',
            'Creating and managing URL hierarchy using Next Router;',
            'Implementing query-based catalog filtering;',
            'Building input forms with thorough validation;',
            'Configuring ESlint ruleset;',
            'Implementing ‘Husky’ pre-commit check;',
            'Using cookies.',
          ],
        },
        features: {
          title: 'Features',
          list: [
            'Navigate the catalog using filters (category, name, limit) or type the product’s name in the “search” field;',
            'Click on a product to read the full description;',
            'Add products to the cart. In the cart you can delete them, increase or decrease the amount (the final cost will be calculated accordingly);',
            'Click “Go to checkout”, fill in the delivery information and submit the order;',
            'The project has responsive layout (available for devices ranging from smartphones to large desktop screens);',
            'All UI components are custom-made.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/fake-shop',
        siteLink: 'https://fake-shop-developer-pryhun.netlify.app//',
      },
    ],
  },

  footer: {
    link: 'This portfolio description and code →',
    caption:
      'Visual design was created by me as well. Many nerve cells were hurt.',

    quotes: [
      'There is always one more bug to fix.',
      'If debugging is the process of removing bugs, then programming must be the process of putting them in.',
      'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.',
      'If, at first, you do not succeed, call it version 1.0.',
      'Programmer: A machine that turns coffee into code.',
      'When I wrote this code, only God and I understood what I did. Now only God knows.',
      'Software and cathedrals are much the same — first we build them, then we pray.',
      'Programming is the art of telling another human being what one wants the computer to do.',
      'It’s not a bug; it’s an undocumented feature.',
      'A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!',
      'Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.',
      'How many programmers does it take to change a light bulb? None, that’s a hardware problem.',
      'You never finish a program, you just stop working on it.',
      'I don`t care if it works on your machine! We are not shipping your machine!.',
      'There is only one thing more painful than learning from experience and that is not learning from experience.',
      'If the code doesn`t bother you, don`t bother it.',
    ],
  },

  contancts: {
    header: 'Contacts',
  },
};

export const ua = {
  navigation: {
    navLinks: [
      { name: 'Про мене', color: 'red', sectionId: 'about' },
      { name: 'Навички', color: 'orange', sectionId: 'skills' },
      { name: 'Проєкти', color: 'yellow', sectionId: 'projects' },
      { name: 'Контакти', color: 'green', sectionId: 'contacts' },
    ],

    cv: {
      name: 'Резюме',
      color: 'blue',
      pdf: '/cv/CV-OlesiaPryhun-JuniorFrontEnd(UA_ver).pdf',
    },
  },

  about: {
    name: 'Олеся Пригун',
    qualities: {
      header: 'Особисті якості:',
      qualitiesList: [
        { name: 'Командний гравець', icon: '/pokemon-icons/squirtle-icon.png' },
        { name: 'Відповідальна', icon: '/pokemon-icons/bulbasaur-icon.png' },
        { name: 'Дружня', icon: '/pokemon-icons/charmander-icon.png' },
        { name: 'Швидко вчусь', icon: '/pokemon-icons/meowth-icon.png' },
        { name: 'Люблю порядок', icon: '/pokemon-icons/pidgey-icon.png' },
      ],
    },
    background: {
      header: 'Про мене:',
      text: () => (
        <>
          {' '}
          Перед тим як потрапити у веб девелопмент, я кілька років{' '}
          <strong>працювала вчителем</strong>. Я все ще досить гарно можу щось
          пояснити :)
        </>
      ),
    },
    studies: {
      header: 'Мій шлях навчання:',
      text: () => (
        <>
          Я закінчила фронт-енд курси, після цього я продовжила навчання з{' '}
          <strong> ментором</strong> (досвіченим веб-розробником). Він
          підтримував мене та допомагав з навчанням протягом усього процесу.
        </>
      ),
    },

    learning: {
      header: 'Як я вчилась?',
      text: () => (
        <>
          Я навчалась за допомогою <strong> написання проєктів,</strong>{' '}
          допускання <strong> помилок</strong> та{' '}
          <strong> їх виправлення</strong>. Я використала всі можливі
          інструменти: від документації та форумів до YouTube та ChatGPT.
        </>
      ),
    },
  },

  skills: {
    header: 'Навички',
    comment: () => (
      <>
        У швидкоплинному світі веб-розробки, який постійно розвивається, я вірю,
        що <strong> здатність пристосовуватися</strong> є ключовою. Я{' '}
        <strong> готова вивчати класичні та нові методології</strong> - будь-що,
        щоб створити конкурентоспроможний продукт!
      </>
    ),
    frontSkills: [
      { icon: '/empty.png ', name: ' ', iconStyle: 'empty' },
      {
        icon: '/skills-icons/ts-icon.png',
        name: 'TypeScript',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/redux-icon.svg',
        name: 'Redux',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs-icon.png',
        name: 'Next.js',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/react-icon.png',
        name: 'React',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/sass-icon.png',
        name: 'Sass/Scss',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/js-icon.png',
        name: 'JavaScript',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/css-icon.png',
        name: 'CSS',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/html-icon.png',
        name: 'HTML',
        iconStyle: 'circled',
      },
    ],

    backSkills: [
      { icon: '/empty.png ', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },

      {
        icon: '/skills-icons/mongodb-icon.png',
        name: 'MongoDB',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs2-icon.png',
        name: 'Next.js API',
        iconStyle: 'circled',
      },
    ],
    otherSkills: [
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      { icon: '/empty.png', name: ' ', iconStyle: 'empty' },
      {
        icon: '/empty.png',
        name: ' ',
        iconStyle: 'empty',
      },
      {
        icon: '/skills-icons/graphql-icon.png',
        name: 'GraphQL',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/chakraui-icon.jpg',
        name: 'Chakra UI',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/postman-icon.png',
        name: 'Postman',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/git-icon.png',
        name: 'Git + Bash',
        iconStyle: 'circled',
      },
    ],

    frontSkillsMobile: [
      {
        icon: '/skills-icons/ts-icon.png',
        name: 'TypeScript',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/redux-icon.svg',
        name: 'Redux',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs-icon.png',
        name: 'Next.js',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/react-icon.png',
        name: 'React',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/sass-icon.png',
        name: 'Sass/Scss',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/js-icon.png',
        name: 'JavaScript',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/css-icon.png',
        name: 'CSS',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/html-icon.png',
        name: 'HTML',
        iconStyle: 'circled',
      },
    ],

    backSkillsMobile: [
      {
        icon: '/skills-icons/mongodb-icon.png',
        name: 'MongoDB',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/nextjs2-icon.png',
        name: 'Next.js API',
        iconStyle: 'circled',
      },
    ],

    otherSkillsMobile: [
      {
        icon: '/skills-icons/graphql-icon.png',
        name: 'GraphQL',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/chakraui-icon.jpg',
        name: 'Chakra UI',
        iconStyle: 'circled',
      },
      {
        icon: '/skills-icons/postman-icon.png',
        name: 'Postman',
        iconStyle: 'circled',
      },

      {
        icon: '/skills-icons/git-icon.png',
        name: 'Git + Bash',
        iconStyle: 'circled',
      },
    ],
  },

  projects: {
    projectsSectionHeader: {
      header: 'Проєкти',
      text: 'Покемони еволюціонують... як і розробники!',
    },
    projectsArray: [
      {
        color1: 'yellow',
        color2: 'orange',
        btn1: 'КОД',
        btn2: 'САЙТ',
        pokemonImg: '/pokeball.png',
        pokemonImgSize: 'sizeS',
        tv: 'project1',
        screenshot: {
          link: 'https://weather-app-developer-pryhun.netlify.app/',
          screenshotImg:
            '/projects-screenshots/weather-project-screenshot-small.jpg',
        },
        level: 'Рівень 1: Покебол',
        title: 'Проєкт: Погода',
        skills: [
          {
            icon: '/skills-icons/react-icon.png',
            name: 'React',
          },

          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
        ],
        description: [
          'З чогось треба починати! Мій перший React проєкт - простий, стильний... не дуже корисний... але працює!',
        ],

        learned: {
          title: 'Чого я навчилась?',
          list: [
            'Створювати незалежні компоненти багаторазового використання;',
            'Використовувати зовнішній API;',
            'Робити HTTP запити використовуючи Axios;',
            'Використовувати SCSS та CSS модулі;',
            'Реалізовувати адаптивні дизайни;',
            'Використовувати бібліотеки (напр. "classnames", "react-animated-weather")',
          ],
        },
        features: {
          title: 'Функціонал',
          list: [
            'Введіть назву міста, щоб перевірити сьогоднішню погоду та прогноз погоди на 6 днів;',
            'Ви можете перемикатися між Фаренгейтом та Цельсієм;',
            'Якщо місто введено невірно, спливає вікно з повідомленням про помилку;',
            'Кнопка пошуку не активна, якщо поле введення порожнє.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/weather-react',
        siteLink: 'https://weather-app-developer-pryhun.netlify.app/',
      },

      {
        color1: 'green',
        color2: 'blue',
        btn1: 'КОД',
        btn2: 'САЙТ',
        pokemonImg: '/pichu.png',
        pokemonImgSize: 'sizeS',
        tv: 'project2',
        screenshot: {
          link: 'https://rozetka-homepage-visual-copy.netlify.app/',
          screenshotImg:
            '/projects-screenshots/rozetka-project-screenshot-small.png',
        },
        level: 'Рівень 2: Пічу',
        title: 'Проєкт: Візуальна копія "Розетки"',
        skills: [
          {
            icon: '/skills-icons/nextjs-icon.png',
            name: 'Next.js',
          },

          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/redux-icon.svg',
            name: 'Redux',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
        ],
        description: [
          'Rozetka.com.ua — це відомий український сайт для покупок онлайн.',
          'Я використала його ДОМАШНЮ СТОРІНКУ як шаблон для практики відтворення ВІЗУАЛЬНОГО дизайну, намагаючись отримати результат максимально ідентичний оригіналу.',
          'Оригінальний сайт "Розетка" часто оновлюється та змінює свій дизайн. Цей проєкт було створено деякий час тому, і зараз він може виглядати трохи інакше, ніж оригінал.',
        ],
        learned: {
          title: 'Чого я навчилась?',
          list: [
            'Реалізація комплексних адаптивних дизайнів (для пристроїв від смартфонів до великих моніторів);',
            'Створення меню навігацї по типу "hamburger";',
            'Забезпечення кросбраузерної сумісності;',
            'Використання просунутих засобів React, таких як HOC та custom hooks;',
            'Створення спливаючих вікон;',
            'Використання Redux для глобального менеджменту стейтів.',
          ],
        },
        features: {
          title: 'Функціонал',
          list: [
            'Це ВІЗУАЛЬНА копія! Але я додала деякий функціонал, щоб скористатися можливістю потренуватися;',
            'Ви можете додати товари в кошик, натиснувши кнопку «купити» під зображенням продукту;',
            'Ви можете збільшити або зменшити кількість продуктів у кошику;',
            'Ви можете видалити продукти з кошика;',
            'Примітка: Цей сайт має лише україномовну версію.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/rozetka',
        siteLink: 'https://rozetka-homepage-visual-copy.netlify.app/',
      },

      {
        color1: 'purple',
        color2: 'red',
        btn1: 'КОД',
        btn2: 'САЙТ',
        pokemonImg: '/pikachu.png',
        pokemonImgSize: 'sizeM',
        tv: 'project3',
        screenshot: {
          link: 'https://fake-shop-developer-pryhun.netlify.app/',
          screenshotImg:
            '/projects-screenshots/screenshot-project-fake-shop-small.png',
        },
        level: 'Рівень 3: Пікачу',
        title: 'Проєкт: Імітація інтернет-магазину',
        skills: [
          {
            icon: '/skills-icons/nextjs-icon.png',
            name: 'Next.js',
          },
          {
            icon: '/skills-icons/nextjs2-icon.png',
            name: 'Next.js API',
          },
          {
            icon: '/skills-icons/mongodb-icon.png',
            name: 'MongoDB',
          },
          {
            icon: '/skills-icons/postman-icon.png',
            name: 'Postman',
          },
          {
            icon: '/skills-icons/sass-icon.png',
            name: 'Sass/Scss',
          },
          {
            icon: '/skills-icons/redux-icon.svg',
            name: 'Redux',
          },
          {
            icon: '/skills-icons/git-icon.png',
            name: 'Git + Bash',
          },
          {
            icon: '/skills-icons/eslint-icon.png',
            name: 'ESLint',
          },
        ],
        description: [
          'Цей штучний магазин імітує справжній досвід онлайн-покупок. Ви не платите і ніколи не отримаєте своє замовлення, але все інше виглядає та працює цілком так, як повинно.',
          'Об’єкти продуктів отримуються із зовнішнього API. Логіка кошика та замовлення реалізована за допомогою написаного мною локального Next.js API, під’єднаного до бази даних MongoDB.',
        ],

        learned: {
          title: 'Чого я навчилась?',
          list: [
            'Комплексної обробки даних, отриманих із зовнішнього API;',
            'Створення локального Next.js API, під’єднаного до MongoDB;',
            'Організації обміну даними між додатком та базою даних;',
            'Використання RTK Query для запитів та керування даними;',
            'Реалізація простої пошукової системи;',
            'Створення ієрархії URL-адрес і керування нею за допомогою Next Router;',
            'Реалізація query-based фільтрації каталогу;',
            'Створення input forms з ретельною валідацією;',
            'Налаштування правил ESlint;',
            'Реалізація ‘Husky’ pre-commit check;',
            'Використання кукі.',
          ],
        },
        features: {
          title: 'Функціонал',
          list: [
            'Для підбору продуктів скористуйтесь фільтрами у каталозі (категорія, алфавіт, ліміт) або введіть назву продукту в полі "пошук;"',
            'Натисніть на продукт, щоб прочитати повний опис;',
            'Додайте продукти в кошик. У кошику їх можна видалити, збільшити або зменшити кількість (кінцева вартість буде розрахована відповідно);',
            'Натисніть  “Go to checkout”, заповніть інформацію про доставку та підтвердіть замовлення;',
            'Проєкт має адаптивний дизайн (доступний для пристроїв від смартфонів до великих моніторів);',
            'Усі UI компоненти інтерфейсу створено самостійно.',
          ],
        },
        codeLink: 'https://github.com/Olesia-P/fake-shop',
        siteLink: 'https://fake-shop-developer-pryhun.netlify.app/',
      },
    ],
  },

  footer: {
    link: 'Опис та код цього портфоліо →',
    caption:
      'Візуальний дизайн також створено мною. Багато нервових клітин постраждало.',
    quotes: [
      'Завжди є ще одна помилка, яку потрібно виправити.',
      'Якщо дебагінг — це процес усунення помилок, то програмування мабуть процес їх впровадження.',
      'Іноді варто проспати понеділок, аби не витрачати решту тижня на виправлення коду, написаного у понеділок.',
      'Якщо з першого разу у вас все зламалось, назвіть це версія 1.0.',
      'Програміст: машина, яка перетворює каву на код.',
      'Коли я писав цей код, тільки Бог і я розуміли, що я робив. Тепер знає тільки Бог.',
      'Програмне забезпечення та собори майже однакові: спочатку ми їх створюємо, а потім молимося.',
      'Програмування — це мистецтво пояснити іншій людині, що ти хочеш, щоб комп’ютер зробив.',
      'Це не помилка; це незадокументована функція.',
      'Син запитав свого батька (програміста), чому сонце сходить на сході, а заходить на заході. Його відповідь? Працює, не чіпай!',
      'Завжди кодуйте так, ніби людина, яка зрештою буде підтримувати ваш код - жорстокий психопат, який знає, де ви живете.',
      'Скільки програмістів потрібно, щоб поміняти лампочку? - Жодного. Проблема в залізі.',
      'Ви ніколи не завершуєте програму, ви просто припиняєте працювати над нею.',
      'Мені байдуже, чи це працює на вашій машині! Ми не відправимо користувачам вашу машину!',
      'Є лише одна річ, більш болюча, ніж навчання на досвіді, і це не навчання на досвіді.',
      'Якщо код вас не турбує, не турбуйте його.',
    ],
  },
  contancts: {
    header: 'Контакти',
  },
};

export const content = {
  en,
  ua,
};
