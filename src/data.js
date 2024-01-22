const data = {
    "header": {
        "name": "Белоусов Дмитрий Анатольевич",
        "location": "Москва, Россия",
        "socials": {
            "github": {
                "label": "GitHub",
                "link": "https://github.com/beldmian"
            },
            "telegram": {
                "label": "Telegram",
                "link": "https://t.me/beldmian"
            },
            "linkedin": {
                "label": "LinkedIn",
                "link": "https://www.linkedin.com/in/dmitriy-belousov-93710929b"
            },
            "email": {
                "label": "beldmian@gmail.com",
                "link": "mailto:beldmian@gmail.com"
            },
            "phone": {
                "label": "+7 (919) 501-03-90",
                "link": "tel:+79195010390"
            }
        },
        "photo": "/static/me.jpeg"
    },
    "about": {
        "text": "Интересуюсь разработкой сложных, высоконагруженных систем, в частности разбираюсь в концепциях архитектуры ПО. В основном работаю с языком Go, однако также знаю Python, C и Java. Вне IT также разбираюсь в математике, что помогает мне и в разработке.",
        "key_points": {
            "strong": [
                "Go",
                "Python",
                "C"
            ],
            "additional": [
                "HTTP",
                "Linux",
                "Git",
                "SQL",
                "REST",
                "Docker"
            ],
            "other": [
                "Математика",
                "Английский язык (B2-C1)"
            ]
        }
    },
    "education": [
        {
            "type": "Высшее, Бакалавр",
            "name": "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)",
            "profile": "Бизнес-информатика",
            "description": "",
            "startDate": 2023,
            "endDate": 2027
        }
    ],
    "work_experience": [
        {
            "position": "Специалист центра программных разработок (Golang)",
            "company": "АО НПО \"Эшелон\"",
            "startDate": "Декабрь 2023",
            "endDate": "Настоящее время",
            "tasks": [
                "Участие в разработке программных продуктов в области информационной и компьютерной безопасности на языке программирования Go"
            ]
        },
        {
            "position": "Помощник преподавателя",
            "company": "Центр олимпиадной подготовки \"Шмель\"",
            "startDate": "Сентябрь 2021",
            "endDate": "Апрель 2022",
            "tasks": [
                "Помощь в проведении занятий по олимпиадной математике",
                "Помощь с проверкой заданий по олимпиадной математике"
            ]
        },
    ],
    "projects": [
        {
            "name": "yastation",
            "description": "Небольшой CLI-клиент для управления устройствами воспроизведения музыки от Яндкес.",
            "links": [
                {
                    "name": "Статья о проекте на habr",
                    "href": "https://habr.com/ru/articles/657657/"
                },
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/yastation"
                }
            ],
            "tags": [
                "Python",
                "API"
            ]
        },
        {
            "name": "colorblinder",
            "description": "Сервис фильтрации mpeg-dash стримов и VoD контента для людей с особенностями зрения.",
            "links": [
                {
                    "name": "Статья о проекте на habr",
                    "href": "https://habr.com/ru/articles/757240/"
                },
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/colorblinder"
                }
            ],
            "tags": [
                "Golang",
                "Next.js",
                "API",
                "Highload",
                "Accessibility",
                "Обработка видео"
            ]
        },
        {
            "name": "invest_dashboard",
            "description": "Сервис для мониторинга инвестиционного портфолио",
            "links": [
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/invest_dashboard"
                }
            ],
            "tags": [
                "Golang",
                "Prometheus",
                "Grafana",
                "API"
            ]
        },
        {
            "name": "light",
            "description": "Легкая event-система для golang",
            "links": [
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/light"
                }
            ],
            "tags": [
                "Golang"
            ]
        },
        {
            "name": "avanpost-fingers",
            "description": "Сервис распознавания отпечатков пальцев",
            "links": [
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/avanpost-fingers"
                }
            ],
            "tags": [
                "Golang",
                "API",
                "Highload",
                "C"
            ]
        },
        {
            "name": "esgrs",
            "description": "Система расчета и визуализации единого ESG-рейтинга компаний",
            "links": [
                {
                    "name": "Репозиторий на github",
                    "href": "https://github.com/beldmian/esgrs"
                }
            ],
            "tags": [
                "Golang",
                "API",
                "Svelte"
            ]
        }
    ],
    "achievements": {
        "academic": {
            "2021": [
                {
                    "title": "Spb AI Champ 2021 (Открытый чемпионат Санкт-Петербурга по искусственному интеллекту)",
                    "achievement": {
                        "name": "Финалист (4 место)",
                        "link": ""
                    }
                }
            ],
            "2022": [
                {
                    "title": "Объединенная межвузовская математическая олимпиада",
                    "achievement": {
                        "name": "Призер",
                        "link": "/static/diploma/ommo.pdf"
                    }
                },
                {
                    "title": "Всероссийский конкурс научно-технологических проектов \"Большие вызовы\" 2022",
                    "additional_data": {
                        "Проект": "Система регулируемых отношений в распределенной энергетической сети"
                    },
                    "achievement": {
                        "name": "Призер заключительного этапа в треке \"Энергетика\", участник проектной смены",
                        "link": ""
                    }
                },
                {
                    "title": "Национальная технологическая олимпиада 2021/2022",
                    "achievement": {
                        "name": "Финалист треков \"Программная инженерия финансовых технологий\" и \"Интеллектуальные энергетические системы\"",
                        "link": "/static/diploma/nto-ol.pdf"
                    }
                },
                {
                    "title": "Конкурс цифровых портфолио \"Талант НТО\" 2021/2022",
                    "achievement": {
                        "name": "Победитель треков \"Решение комплексных инженерных задач\" и \"Программирование на Python\"",
                        "link": "/static/diploma/nto-2022.pdf"
                    }
                },
                {
                    "title": "Международный форум \"Российская энергетическая неделя\" 2022",
                    "achievement": {
                        "name": "Участник молодежного дня",
                        "link": "/static/diploma/rew-2022.pdf"
                    }
                }
            ],
            "2023": [
                {
                    "title": "Всероссийский конкурс научно-технологических проектов \"Большие вызовы\" 2023",
                    "additional_data": {
                        "Проект": "Система расчета и визуализации единого ESG-рейтинга компаний"
                    },
                    "achievement": {
                        "name": "Участник регионального этапа в треке \"Большие данные, искусственный интеллект, финансовые технологии и машинное обучение\"",
                        "link": ""
                    }
                },
                {
                    "title": "Конкурс цифровых портфолио \"Талант НТО\" 2022/2023",
                    "achievement": {
                        "name": "Победитель треков \"Проектная деятельность\", \"Решение комплексных инженерных задач\" и \"Программирование на Python\"",
                        "link": "/static/diploma/nto-2023.pdf"
                    }
                },
                {
                    "title": "15th International research school (2023)",
                    "additional_data": {
                        "Проект": "Chemistry in silico: design and prediction of pharmacological and pharmacokinetic properties of new compounds"
                    },
                    "achievement": {
                        "name": "Участник",
                        "link": ""
                    }
                },
                {
                    "title": "Международный форум \"Российская энергетическая неделя\" 2023",
                    "achievement": {
                        "name": "Участник молодежного дня",
                        "link": ""
                    }
                }
            ]
        },
        "practical": {
            "2021": [
                {
                    "title": "Энергетическая проектная смена 2021 (ПАО \"Россети\")",
                    "additional_data": {
                        "Проект": "Система управления коммерческими отношениями в активных энергетических комплексах",
                        "Задачи": "Разработка мультиагентной системы взаимодействия (Java JADE), Разработка локальной blockchain-системы (Go), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "1 место",
                        "link": ""
                    }
                },
                {
                    "title": "Хакатон Hack the rail 2021 (ОАО \"РЖД\")",
                    "additional_data": {
                        "Проект": "Анализ пассажиров и рекомендация вагонов поезда",
                        "Задачи": "Разработка frontend-сервиса (React JS), Участие в разработке математического алгоритма рекомендательной системы (Python), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "1 место",
                        "link": "/static/diploma/htr.jpg"
                    },
                    "img": "/static/img/htr.jpg"
                },
                {
                    "title": "Хакатон Volga iron hack 2021 (ОАО \"РЖД\")",
                    "additional_data": {
                        "Проект": "Рассвет Каспийского лотоса",
                        "Задачи": "Разработка frontend-сервиса (React JS), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "Финалист",
                        "link": ""
                    }
                }
            ],
            "2022": [
                {
                    "title": "Хакатон Agro Code Hack 2022 (АО \"Российский сельскохозяйственный банк\")",
                    "additional_data": {
                        "Проект": "Перспективные земли для виноградников",
                        "Задачи": "Разработка регрессионно-классификационной модели (Python), Разработка отказоустойчивого backend-сервиса (Python), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "Финалист",
                        "link": "/static/diploma/agro2022.pdf"
                    }
                },
                {
                    "title": "Энергетическая проектная смена 2022 (ПАО \"Россети\")",
                    "additional_data": {
                        "Проект": "Цифровые двойники электосетевого оборудования",
                        "Задачи": "Разработка математической модели сложного физического оборудования (Python), Разработка модели предсказания временных рядов (Python), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "2 место",
                        "link": ""
                    },
                    "img": "/static/img/eps2022.jpg"
                },
                {
                    "title": "Хакатон VTB API hackathon 2022 (ПАО \"Банк ВТБ\")",
                    "additional_data": {
                        "Проект": "Инструмент для обеспечения динамического форматно-логического контроля взаимодействия между системами с использованием протокола SOAP",
                        "Задачи": "Разработка технологического решения (Go + C), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "1 место",
                        "link": "/static/diploma/vtb2022.pdf"
                    },
                    "img": "/static/img/vtb2022.jpg"
                }
            ],
            "2023": [
                {
                    "title": "Хакатон Avanpost challenge (ООО \"Аванпост\")",
                    "additional_data": {
                        "Проект": "Распознавание отпечатков пальцев",
                        "Задачи": "Разработка backend-сервиса (Go + C), Управление сетевой инфраструктурой проекта (Docker + K8s)"
                    },
                    "achievement": {
                        "name": "Финалист",
                        "link": "/static/diploma/avanpost.pdf"
                    }
                },
                {
                    "title": "Хакатон True Tech Hack (ПАО \"Мобильные ТелеСистемы\")",
                    "additional_data": {
                        "Проект": "Адаптация фильмов для людей с особыми потребностями",
                        "Задачи": "Разработка технологического решения (Go + C + ffmpeg), Управление сетевой инфраструктурой проекта (Docker + K8s)"
                    },
                    "achievement": {
                        "name": "Финалист",
                        "link": "/static/diploma/tth.pdf"
                    },
                    "img": "/static/img/tth.png"
                },
                {
                    "title": "Хакатон Optimize & Organize Challenge",
                    "additional_data": {
                        "Проект": "Разработка цифрового помощника по учету объектов недвижимости",
                        "Задачи": "Разработка backend-сервиса (Go), Управление сетевой инфраструктурой проекта (Docker + K8s)"
                    },
                    "achievement": {
                        "name": "Участник (16 место)",
                        "link": "/static/diploma/ooc.pdf"
                    }
                },
                {
                    "title": "Хакатон VTB API Hackathon 2023",
                    "additional_data": {
                        "Проект": "Создание отказоустойчивого слоя репликации данных между кластерами CEPH",
                        "Задачи": "Разработка backend-сервиса (Go), Управление сетевой инфраструктурой проекта (Docker)"
                    },
                    "achievement": {
                        "name": "Финалист (6 место)",
                        "link": "/static/diploma/vtb2023.pdf"
                    },
                    "img": "/static/img/vtb2023.jpg"
                },
                {
                    "title": "Олимпиада True Tech Champ",
                    "additional_data": {
                        "Задача": "Алгоритм для оптимизации потребления облачные ресурсов"
                    },
                    "achievement": {
                        "name": "Финалист",
                        "link": "/static/diploma/ttc.pdf"
                    },
                    "img": "/static/img/tto.jpg"
                }
            ]
        }
    }
};

export default data;