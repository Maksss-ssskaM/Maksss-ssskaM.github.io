export type Language = "ru" | "en";

type RoadMapItemMessages = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type UniversityBlockMessages = {
  imageAlt: string;
  educationFocus: string;
  focusItems: string[];
  internships: string;
  internshipCompany: string;
  internshipDescription: string;
};

type CompanyBlockMessages = {
  company: string;
  contributions: string[];
};

type OxygenBlockMessages = CompanyBlockMessages & {
  services: string[];
};

export type Messages = {
  common: {
    language: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    ru: string;
    en: string;
  };
  aboutMe: {
    role: string;
    name: string;
    imageAlt: string;
    description: string;
  };
  hardSkills: {
    title: string;
    coreLanguages: string;
    frontendDevelopment: string;
    backendDevelopment: string;
    tools: string;
  };
  roadMap: {
    items: {
      university: RoadMapItemMessages;
      oxygen: RoadMapItemMessages;
      evercode: RoadMapItemMessages;
      nodeProvider: RoadMapItemMessages;
      cryptoWallet: RoadMapItemMessages;
      treasuryPlatform: RoadMapItemMessages;
    };
    blocks: {
      headings: {
        company: string;
        contribution: string;
      };
      university: UniversityBlockMessages;
      oxygen: OxygenBlockMessages;
      evercode: CompanyBlockMessages;
      ndaPurple: CompanyBlockMessages;
      ndaBlack: CompanyBlockMessages;
      ndaBlue: CompanyBlockMessages;
    };
  };
  softSkills: {
    title: string;
    items: {
      label: string;
      text: string;
    }[];
  };
};

const ru: Messages = {
  common: {
    language: "Язык",
  },
  languageSwitcher: {
    ariaLabel: "Переключить язык сайта",
    ru: "RU",
    en: "EN",
  },
  aboutMe: {
    role: "Fullstack Developer",
    name: "Шеин Максим Андреевич",
    imageAlt: "Фото Шеина Максима Андреевича",
    description:
      "Разработчик с опытом создания надёжных, масштабируемых и поддерживаемых веб-приложений - от быстрых MVP и внутренних инструментов до высоконагруженных веб приложений с тысячами активных пользователей. Имею опыт работы как с монолитной, так и с микросервисной архитектурой. Быстро погружаюсь в предметную область, уверенно работаю с существующей кодовой базой, помогаю улучшать архитектуру, производительность и стабильность продукта.",
  },
  hardSkills: {
    title: "Hard Skills",
    coreLanguages: "Core Languages:",
    frontendDevelopment: "Frontend Development:",
    backendDevelopment: "Backend Development:",
    tools: "Tools:",
  },
  roadMap: {
    items: {
      university: {
        eyebrow: "Образование",
        title:
          "Национальный исследовательский университет ИТМО, Санкт‑Петербург",
        subtitle:
          "Информационные системы и технологии, Бакалавр (2020–2024 г.)",
      },
      oxygen: {
        eyebrow: "Fullstack Developer",
        title: "Oxygen Cloud Platform",
        subtitle:
          "Разработка и развитие клиентского и внутреннего порталов для управления облачной инфраструктурой",
      },
      evercode: {
        eyebrow: "Frontend Developer",
        title: "Evercode Lab",
        subtitle: "Разработка и развитие HR-портала",
      },
      nodeProvider: {
        eyebrow: "Fullstack Developer",
        title: "NDA, Провайдер блокчейн-нод и RPC/API-инфраструктуры",
        subtitle:
          "Разработка и развитие веб-портала и пользовательского аккаунта платформы. (Контур Evercode Lab)",
      },
      cryptoWallet: {
        eyebrow: "Frontend Developer",
        title: "NDA, Некастодиальный криптокошелёк",
        subtitle:
          "Разработка пользовательского интерфейса и новых функций для веб-платформы (Контур Evercode Lab)",
      },
      treasuryPlatform: {
        eyebrow: "Frontend Developer",
        title:
          "NDA, Платформа внутригруппового финансирования и корпоративного казначейства",
        subtitle:
          "Разработка пользовательского интерфейса и новых функций для веб-платформы (Контур Evercode Lab)",
      },
    },
    blocks: {
      headings: {
        company: "О компании:",
        contribution: "Вклад:",
      },
      university: {
        imageAlt: "Университет ИТМО",
        educationFocus: "Фокус обучения:",
        focusItems: [
          "Веб-разработка и клиент-серверная архитектура;",
          "Backend-разработка и проектирование API;",
          "Базы данных и SQL;",
          "Алгоритмы и структуры данных;",
          "Командная разработка",
        ],
        internships: "Стажировки:",
        internshipCompany: "ООО «Газпромнефть - ЦР», Backend developer",
        internshipDescription:
          "Разработка и поддержка REST API корпоративного веб-приложения",
      },
      oxygen: {
        company:
          "OXYGEN - облачная платформа и оператор дата-центров, входящий в топ-5 по России и предоставляющий масштабируемые облачные и инфраструктурные решения.",
        contributions: [
          "Помог в запуске MVP и расширении продукта, что стало частью перехода компании от чистой B2B-модели к смешанной B2B+B2C. Это обеспечило поток новых клиентов и повысило удобство работы для текущей клиентской базы.",
          "Спроектировал и внедрил систему уведомлений и обращений для клиентского портала, что улучшило качество взаимодействия с пользователями.",
          "Реализовал адаптивные интерфейсы для клиентского и внутреннего порталов в рамках редизайна.",
          "Участвовал в разработке калькуляторов облачных ресурсов.",
          "Разработал и внедрил ряд микросервисов:",
        ],
        services: [
          "хранение и выдача файлов (MinIO)",
          "генерация документов по шаблонам (коммерческие предложения, счета)",
          "рассылка (email, SMS, Telegram)",
          "интеграция с 1С для синхронизации контрактов и счетов",
          "интеграция калькуляторов главного веб-сайта с внутренней экосистемой",
          "мониторинг и оповещения о статусах микросервисов",
        ],
      },
      evercode: {
        company:
          "Evercode Lab - технологический холдинг в сфере FinTech и Web3, развивающий экосистему white-label и инфраструктурных продуктов для работы с цифровыми активами. В продуктовый контур холдинга входят брендируемые криптокошельки, exchange-решения, hot/warm wallet-продукты и т.д.",
        contributions: [
          "Разработал и внедрил UI-компоненты в рамках новой дизайн-системы, унифицировал типографику и цветовую палитру, обеспечив единый визуальный стиль интерфейса.",
          "Оптимизировал глобальные стили проекта, удалил legacy-переменные, сократил global.css на 90% и устранил стилевые расхождения во всем интерфейсе.",
          "Обновил проект до Next.js 16, проверил совместимость зависимостей и опубликовал необходимые версии пакетов во внутренний Nexus.",
          "Переработал и внедрил новую логику фильтрации, улучшив обработку параметров, синхронизацию состояния интерфейса и предсказуемость пользовательского поиска.",
          "Разрабатывал функциональность HR-портала и административной панели на Strapi, улучшая пользовательские сценарии, интерфейсные модули и процессы управления контентом.",
        ],
      },
      ndaPurple: {
        company:
          "Провайдер blockchain-инфраструктуры, предоставляющий API-доступ к нодам и explorer-сервисам для 100+ блокчейн-сетей. Решения компании позволяют Web3-проектам, кошелькам, биржам и FinTech-продуктам получать on-chain данные, отправлять транзакции и масштабировать криптоинфраструктуру без самостоятельного развёртывания и обслуживания нод.",
        contributions: [
          "Мигрировал личный кабинет с Next.js 12 на Next.js 15, закрыв накопленный технический долг, обновив архитектуру и зависимости, оптимизировав страницы и устранив десятки production-багов. Это повысило стабильность продукта и снизило сложность дальнейшей разработки.",
          "Реализовал более 80% интерфейсов: Dashboard, API Keys, Settings, 2FA, Webhooks, Payments, информационные лендинги и другие разделы",
          "Создал и унифицировал около 60% компонентной базы, включая модальные окна, типографику и переиспользуемые UI-компоненты. Разработал ключевые layout-обертки и инфраструктурные UI-элементы: Sidebar, Header, Footer, Layouts.",
          "Внедрил новую дизайн-систему и адаптировал существующие интерфейсы под единый визуальный и компонентный подход.",
          "Актуализировал устаревший внутренний проект, восстановил его работоспособность и подготовил к стабильному запуску в production-среде. Это позволило вернуть сервис в эксплуатацию и использовать его в рабочем контуре компании.",
          "Интегрировал внешние платежные провайдеры в личный кабинет.",
          "Разработал сервис генерации PDF-инвойсов, включая обработчик данных, маппер и шаблоны для генерации документов.",
          "Внедрил систему уведомлений во все frontend-репозитории и реализовал управление уведомлениями в административной панели.",
          "Переработал логику авторизации и управления сессией. Это повысило стабильность пользовательского опыта и снизило количество проблем, связанных с повторной авторизацией.",
        ],
      },
      ndaBlack: {
        company:
          "Некастодиальный мультивалютный криптокошелёк, предоставляющий пользователям единый интерфейс для хранения, покупки, обмена, стейкинга и перевода цифровых активов. Продукт поддерживает 70+ блокчейн-сетей и 1M+ токенов, обеспечивая самостоятельный контроль приватных ключей без передачи активов стороннему кастодиану.",
        contributions: [
          "Разработал основную навигацию личного кабинета: Sidebar, связанные dropdown-меню и модальные окна, что упростило пользователям доступ к ключевым разделам продукта.",
          "Реализовал новые Header, Footer и layout-структуру приложения.",
          "Разработал Welcome Page для первого входа пользователя в систему, что помогло новым пользователям быстрее разобраться с продуктом и начать работу.",
          "Разработал Dashboard - центральный экран личного кабинета, объединив ключевые пользовательские функции",
          "Внедрил глобальный step-by-step onboarding-гайд с подсветкой ключевых зон интерфейса, что снизило порог входа для новых пользователей и улучшило первичное знакомство с продуктом.",
        ],
      },
      ndaBlue: {
        company:
          "Внутренняя платформа внутригруппового финансирования и корпоративного казначейства, предназначенная для централизованного управления ликвидностью, займами, расчётами и финансовыми потоками между компаниями холдинга.",
        contributions: [
          "Реализовал и поддерживал ключевые транзакционные сценарии: whitelist, отправку и подтверждение транзакций, отображение истории операций и связанные пользовательские состояния.",
          "Выполнил серию багфиксов и UX-улучшений: стабилизировал работу форм, таблиц, фильтров, уведомлений и транзакционных сценариев, повысив общую надежность пользовательского интерфейса.",
        ],
      },
    },
  },
  softSkills: {
    title: "Soft Skills",
    items: [
      {
        label: "Коммуникабельность",
        text: "Умею эффективно взаимодействовать с командой: поддерживаю прозрачность в рабочих процессах, понимаю зоны ответственности каждого участника и открыто делюсь контекстом. Всегда готов помочь коллегам - созвониться, обсудить задачу, предложить варианты решений и вместе найти оптимальный подход. Такой стиль работы ускоряет процессы, повышает качество итогового результата и помогает избежать ошибок благодаря свежему взгляду со стороны.",
      },
      {
        label: "Развитие",
        text: "IT развивается стремительно, поэтому я регулярно изучаю новые технологии. Быстро ориентируюсь в новых условиях, осваиваю нужные подходы и применяю их в реальных задачах, чтобы повысить эффективность своей работы.",
      },
      {
        label: "Креативность",
        text: "Нередко сталкивался с ситуациями, когда макеты ещё не были готовы полностью. В таких случаях согласовывал и создавал временные решения, визуально и содержательно соответствующие дизайн системе. Это позволяло команде не останавливаться на промежуточных этапах и продолжать разработку без потери темпа.",
      },
      {
        label: "Гибкость",
        text: "Работал в командах с инициативными коллегами, где важно быстро реагировать на новые вводные и поддерживать высокий ритм. При необходимости могу подключиться к обсуждению или звонку в любое время и из любой точки.",
      },
    ],
  },
};

const en: Messages = {
  common: {
    language: "Language",
  },
  languageSwitcher: {
    ariaLabel: "Switch site language",
    ru: "RU",
    en: "EN",
  },
  aboutMe: {
    role: "Fullstack Developer",
    name: "Maksim Andreevich Shein",
    imageAlt: "Photo of Maksim Andreevich Shein",
    description:
      "Developer with experience building reliable, scalable, and maintainable web applications - from fast MVPs and internal tools to high-load web applications with thousands of active users. I have experience working with both monolithic and microservice architectures. I quickly dive into the domain, confidently work with existing codebases, and help improve product architecture, performance, and stability.",
  },
  hardSkills: {
    title: "Hard Skills",
    coreLanguages: "Core Languages:",
    frontendDevelopment: "Frontend Development:",
    backendDevelopment: "Backend Development:",
    tools: "Tools:",
  },
  roadMap: {
    items: {
      university: {
        eyebrow: "Education",
        title: "ITMO National Research University, Saint Petersburg",
        subtitle:
          "Information Systems and Technologies, Bachelor's degree (2020–2024)",
      },
      oxygen: {
        eyebrow: "Fullstack Developer",
        title: "Oxygen Cloud Platform",
        subtitle:
          "Development and enhancement of customer and internal portals for cloud infrastructure management",
      },
      evercode: {
        eyebrow: "Frontend Developer",
        title: "Evercode Lab",
        subtitle: "Development and enhancement of an HR portal",
      },
      nodeProvider: {
        eyebrow: "Fullstack Developer",
        title: "NDA, blockchain node and RPC/API infrastructure provider",
        subtitle:
          "Development and enhancement of the platform's web portal and user account. Within the Evercode Lab scope.",
      },
      cryptoWallet: {
        eyebrow: "Frontend Developer",
        title: "NDA, non-custodial crypto wallet",
        subtitle:
          "Development of the user interface and new features for a web platform. Within the Evercode Lab scope.",
      },
      treasuryPlatform: {
        eyebrow: "Frontend Developer",
        title: "NDA, intra-group financing and corporate treasury platform",
        subtitle:
          "Development of the user interface and new features for a web platform. Within the Evercode Lab scope.",
      },
    },
    blocks: {
      headings: {
        company: "About the company:",
        contribution: "Contribution:",
      },
      university: {
        imageAlt: "ITMO University",
        educationFocus: "Study focus:",
        focusItems: [
          "Web development and client-server architecture;",
          "Backend development and API design;",
          "Databases and SQL;",
          "Algorithms and data structures;",
          "Team development",
        ],
        internships: "Internships:",
        internshipCompany: "Gazpromneft-CR LLC, Backend Developer",
        internshipDescription:
          "Development and maintenance of REST APIs for a corporate web application",
      },
      oxygen: {
        company:
          "OXYGEN is a cloud platform and data center operator ranked among the top 5 in Russia, providing scalable cloud and infrastructure solutions.",
        contributions: [
          "Helped launch the MVP and expand the product, which became part of the company's transition from a pure B2B model to a mixed B2B+B2C model. This ensured a flow of new customers and improved convenience for the existing client base.",
          "Designed and implemented a notification and support request system for the customer portal, which improved the quality of user interaction.",
          "Implemented responsive interfaces for the customer and internal portals as part of a redesign.",
          "Participated in the development of cloud resource calculators.",
          "Developed and implemented a number of microservices:",
        ],
        services: [
          "file storage and serving (MinIO)",
          "document generation from templates (commercial proposals, invoices)",
          "message sending (email, SMS, Telegram)",
          "1C integration for synchronizing contracts and invoices",
          "integration of the main website calculators with the internal ecosystem",
          "monitoring and alerts for microservice statuses",
        ],
      },
      evercode: {
        company:
          "Evercode Lab is a technology holding company in FinTech and Web3 that develops an ecosystem of white-label and infrastructure products for working with digital assets. The holding's product scope includes brandable crypto wallets, exchange solutions, hot/warm wallet products, and more.",
        contributions: [
          "Developed and implemented UI components as part of a new design system, unified typography and the color palette, ensuring a consistent visual style across the interface.",
          "Optimized the project's global styles, removed legacy variables, reduced global.css by 90%, and eliminated style inconsistencies across the entire interface.",
          "Updated the project to Next.js 16, checked dependency compatibility, and published the required package versions to the internal Nexus.",
          "Redesigned and implemented new filtering logic, improving parameter handling, UI state synchronization, and the predictability of user search.",
          "Developed functionality for the HR portal and the Strapi administrative panel, improving user scenarios, interface modules, and content management processes.",
        ],
      },
      ndaPurple: {
        company:
          "A blockchain infrastructure provider that provides API access to nodes and explorer services for 100+ blockchain networks. The company's solutions allow Web3 projects, wallets, exchanges, and FinTech products to receive on-chain data, send transactions, and scale crypto infrastructure without independently deploying and maintaining nodes.",
        contributions: [
          "Migrated the user account from Next.js 12 to Next.js 15, eliminating accumulated technical debt, updating the architecture and dependencies, optimizing pages, and fixing dozens of production bugs. This improved product stability and reduced the complexity of further development.",
          "Implemented more than 80% of the interfaces: Dashboard, API Keys, Settings, 2FA, Webhooks, Payments, informational landing pages, and other sections.",
          "Created and unified around 60% of the component base, including modal windows, typography, and reusable UI components. Developed key layout wrappers and infrastructure UI elements: Sidebar, Header, Footer, and Layouts.",
          "Introduced a new design system and adapted existing interfaces to a unified visual and component-based approach.",
          "Updated an outdated internal project, restored its functionality, and prepared it for a stable launch in the production environment. This made it possible to return the service to operation and use it within the company's working scope.",
          "Integrated external payment providers into the user account.",
          "Developed a PDF invoice generation service, including a data handler, mapper, and templates for generating documents.",
          "Implemented a notification system across all frontend repositories and implemented notification management in the administrative panel.",
          "Redesigned the authorization and session management logic. This improved the stability of the user experience and reduced the number of issues related to repeated authorization.",
        ],
      },
      ndaBlack: {
        company:
          "A non-custodial multi-currency crypto wallet that provides users with a single interface for storing, buying, swapping, staking, and transferring digital assets. The product supports 70+ blockchain networks and 1M+ tokens, ensuring independent control of private keys without transferring assets to a third-party custodian.",
        contributions: [
          "Developed the main navigation of the user account: Sidebar, related dropdown menus, and modal windows, which made it easier for users to access key product sections.",
          "Implemented new Header, Footer, and application layout structure.",
          "Developed a Welcome Page for the user's first login, which helped new users understand the product faster and get started.",
          "Developed the Dashboard - the central screen of the user account, combining key user functions.",
          "Implemented a global step-by-step onboarding guide with highlights for key interface areas, which lowered the entry barrier for new users and improved their first introduction to the product.",
        ],
      },
      ndaBlue: {
        company:
          "An internal intra-group financing and corporate treasury platform designed for centralized management of liquidity, loans, settlements, and financial flows between companies within the holding.",
        contributions: [
          "Implemented and maintained key transaction scenarios: whitelist, sending and confirming transactions, displaying transaction history, and related user states.",
          "Completed a series of bug fixes and UX improvements: stabilized forms, tables, filters, notifications, and transaction scenarios, increasing the overall reliability of the user interface.",
        ],
      },
    },
  },
  softSkills: {
    title: "Soft Skills",
    items: [
      {
        label: "Communication",
        text: "I can effectively interact with a team: I maintain transparency in workflows, understand each team member's area of responsibility, and openly share context. I am always ready to help colleagues - join a call, discuss a task, suggest possible solutions, and work together to find the best approach. This way of working speeds up processes, improves the quality of the final result, and helps avoid mistakes thanks to a fresh outside perspective.",
      },
      {
        label: "Growth",
        text: "IT is developing rapidly, so I regularly study new technologies. I quickly navigate new conditions, learn the required approaches, and apply them to real tasks in order to improve the efficiency of my work.",
      },
      {
        label: "Creativity",
        text: "I have often faced situations where design mockups were not yet fully ready. In such cases, I coordinated and created temporary solutions that visually and conceptually matched the design system. This allowed the team not to stop at intermediate stages and to continue development without losing pace.",
      },
      {
        label: "Flexibility",
        text: "I have worked in teams with proactive colleagues, where it is important to quickly respond to new inputs and maintain a high pace. When necessary, I can join a discussion or call at any time and from anywhere.",
      },
    ],
  },
};

export const translations: Record<Language, Messages> = {
  ru,
  en,
};
