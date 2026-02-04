// New Game Data with Mini-Games
const gameData = {
    eras: [
        {
            id: 'ancient-carthage',
            name: 'Ancient Carthage',
            unlocked: true,
            sites: [
                {
                    id: 'carthage-ruins',
                    name: 'Carthage Ruins',
                    lat: 36.8529,
                    lng: 10.3220,
                    discovered: false,
                    description: 'The ruins of the ancient Phoenician city-state of Carthage, a major power of the ancient Mediterranean.',
                    image: 'images/carthage-ruins.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Carthage: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Carthage was originally a Phoenician colony.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The famous general Hannibal crossed the Alps with war elephants.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Who was the primary rival of Carthage for control of the Mediterranean?',
                                    options: ['Rome', 'Greece', 'Egypt', 'Persia'],
                                    correct: 0
                                },
                                {
                                    question: 'What was the final Punic War?',
                                    options: ['First', 'Second', 'Third', 'Fourth'],
                                    correct: 2
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'byrsa-hill',
                    name: 'Byrsa Hill',
                    lat: 36.8536,
                    lng: 10.3236,
                    discovered: false,
                    description: 'The citadel of ancient Carthage, now home to the Carthage National Museum.',
                    image: 'images/byrsa.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Byrsa Hill: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Byrsa Hill was the main military citadel of Carthage.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The name "Byrsa" is Greek for "oxhide".',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Which museum is currently located on Byrsa Hill?',
                                    options: ['Carthage National Museum', 'The Bardo Museum', 'Sousse Museum', 'Kairouan Museum'],
                                    correct: 0
                                },
                                {
                                    question: 'According to legend, who founded Byrsa Hill?',
                                    options: ['Queen Dido', 'Hannibal', 'King Hanno', 'Augustus Caesar'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'tophet',
                    name: 'Tophet of Carthage',
                    lat: 36.8498,
                    lng: 10.3265,
                    discovered: false,
                    description: 'A sacred area with ancient graves and stelae, possibly dedicated to child sacrifice.',
                    image: 'images/trophet.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Tophet: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Ancient sources claim the Tophet was used for child sacrifice.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: All modern archaeologists agree on the Tophet\'s function.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'What were the stone monuments found in the Tophet called?',
                                    options: ['Stelae', 'Obelisks', 'Sphinxes', 'Menhirs'],
                                    correct: 0
                                },
                                {
                                    question: 'Which deity was most closely associated with the Tophet?',
                                    options: ['Ba\'al Hammon', 'Tanit', 'Eshmun', 'Melqart'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                }
            ]
        },
        {
            id: 'roman-tunisia',
            name: 'Roman Tunisia',
            unlocked: false,
            sites: [
                {
                    id: 'amphitheatre-el-jem',
                    name: 'Amphitheatre of El Jem',
                    lat: 35.6781,
                    lng: 10.7063,
                    discovered: false,
                    description: 'One of the best-preserved Roman stone ruins in the world, this massive amphitheater could hold up to 35,000 spectators.',
                    image: 'images/eljem.jpg',
                    miniGames: {
                        quiz: {
                            title: 'El Jem: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The El Jem Amphitheatre is larger than the Colosseum in Rome.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'True or False: The amphitheatre was built entirely of local limestone.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'What was the primary purpose of the amphitheatre?',
                                    options: ['Public entertainment', 'Government meetings', 'Religious ceremonies', 'Military training'],
                                    correct: 0
                                },
                                {
                                    question: 'Which Roman emperor is credited with commissioning the El Jem Amphitheatre?',
                                    options: ['Augustus', 'Trajan', 'Gordian III', 'Constantine'],
                                    correct: 2
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'bulla-regia',
                    name: 'Bulla Regia',
                    lat: 36.5634,
                    lng: 8.7363,
                    discovered: false,
                    description: 'A remarkable Roman archaeological site famous for its unique semi-subterranean villas designed to escape the summer heat.',
                    image: 'images/bulla.png',
                    miniGames: {
                        quiz: {
                            title: 'Bulla Regia: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Bulla Regia is famous for its underground villas.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The underground level was used primarily for storage.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'What was the main reason for building houses underground at Bulla Regia?',
                                    options: ['To escape the summer heat', 'To protect from invaders', 'To store grain', 'To mine for minerals'],
                                    correct: 0
                                },
                                {
                                    question: 'In which modern-day Tunisian region is Bulla Regia located?',
                                    options: ['Jendouba', 'Sfax', 'Sousse', 'Kairouan'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'dougga',
                    name: 'Dougga',
                    lat: 36.4234,
                    lng: 9.2190,
                    discovered: false,
                    description: 'A well-preserved Roman town in northern Tunisia, often called the "best-preserved Roman small town in North Africa."',
                    image: 'images/dougga.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Dougga: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Dougga was a major Roman military fortress.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'True or False: The theatre at Dougga could hold over 3,000 spectators.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Which of these structures is a prominent feature at Dougga?',
                                    options: ['A Capitol', 'A Hippodrome', 'An Aqueduct', 'A Triumphal Arch'],
                                    correct: 0
                                },
                                {
                                    question: 'What was the indigenous name of Dougga before the Romans arrived?',
                                    options: ['Thugga', 'Carthago Nova', 'Hippo Regius', 'Lambaesis'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                }
            ]
        },
        {
            id: 'islamic-dynasties',
            name: 'Islamic Dynasties',
            unlocked: false,
            sites: [
                {
                    id: 'great-mosque-kairouan',
                    name: 'Great Mosque of Kairouan',
                    lat: 35.6781,
                    lng: 10.0963,
                    discovered: false,
                    description: 'One of the oldest places of worship in the Islamic world and a masterpiece of Islamic architecture.',
                    image: 'images/mosque.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Great Mosque of Kairouan: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The Great Mosque of Kairouan is located in modern-day Algeria.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'True or False: The mosque\'s minaret is square in shape, a model for many North African mosques.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Who is credited with founding the city of Kairouan in 670 AD?',
                                    options: ['Uqba ibn Nafi', 'Saladin', ' Tariq ibn Ziyad', 'Harun al-Rashid'],
                                    correct: 0
                                },
                                {
                                    question: 'Which dynasty was responsible for the major expansion of the mosque in the 9th century?',
                                    options: ['Aghlabids', 'Fatimids', 'Hafsids', 'Almoravids'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'ribat-sousse',
                    name: 'Ribat of Sousse',
                    lat: 35.8256,
                    lng: 10.6369,
                    discovered: false,
                    description: 'A fortified Islamic monastery and watchtower that played a crucial role in coastal defense against Byzantine attacks.',
                    image: 'images/sousse.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Ribat of Sousse: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: A ribat was a type of Islamic religious and military fortress.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The primary threat that the ribats were built to defend against was inland Bedouin tribes.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'What kind of people lived in and defended the ribats?',
                                    options: ['Warrior-monks', 'Soldiers', 'Merchants', 'Farmers'],
                                    correct: 0
                                },
                                {
                                    question: 'The Ribat of Sousse is part of a chain of fortresses along which coast?',
                                    options: ['North African', 'Levantine', 'Persian Gulf', 'Red Sea'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'zaytuna-mosque',
                    name: 'Zaytuna Mosque',
                    lat: 36.7998,
                    lng: 10.1703,
                    discovered: false,
                    description: 'Located in Tunis, this mosque is home to one of the oldest universities in the Islamic world.',
                    image: 'images/zaytuna.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Zaytuna Mosque: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The Zaytuna Mosque is located in the city of Kairouan.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'True or False: The University of Zaytuna taught only religious subjects.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'What does "Zaytuna" mean in Arabic?',
                                    options: ['Olive Tree', 'Light', 'Knowledge', 'Prayer'],
                                    correct: 0
                                },
                                {
                                    question: 'Which famous historian and scholar is associated with the University of Zaytuna?',
                                    options: ['Ibn Khaldun', 'Al-Ghazali', 'Ibn Rushd', 'Al-Biruni'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                }
            ]
        },
        {
            id: 'ottoman-period',
            name: 'Ottoman Period',
            unlocked: false,
            sites: [
                {
                    id: 'bardo-palace',
                    name: 'Bardo Palace',
                    lat: 36.8093,
                    lng: 10.1344,
                    discovered: false,
                    description: 'Originally a Hafsid palace, it became the residence of the Ottoman Beys and now houses the National Museum of Bardo.',
                    image: 'images/bardo.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Bardo Palace: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The Bardo Museum is famous for its collection of Roman mosaics.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The palace was originally built as a French colonial residence.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'Before becoming an Ottoman residence, the Bardo was a palace for which dynasty?',
                                    options: ['Hafsids', 'Aghlabids', 'Fatimids', 'Almoravids'],
                                    correct: 0
                                },
                                {
                                    question: 'In what century was the Bardo Museum officially established?',
                                    options: ['19th century', '18th century', '20th century', '17th century'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'sidi-bou-said',
                    name: 'Sidi Bou Said',
                    lat: 36.8732,
                    lng: 10.3399,
                    discovered: false,
                    description: 'A picturesque town known for its distinctive blue and white architecture, named after a 13th-century Sufi saint.',
                    image: 'images/sidibou.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Sidi Bou Said: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The town is named after a 13th-century Sufi saint.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The distinctive blue and white color scheme was mandated by a French baron.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Who was the French baron who popularized the blue and white color scheme?',
                                    options: ['Baron d\'Erlanger', 'Baron de Rothschild', 'Baron de Vaux', 'Baron de Coubertin'],
                                    correct: 0
                                },
                                {
                                    question: 'The town\'s architecture was heavily influenced by refugees from which region?',
                                    options: ['Andalusia', 'Ottoman Empire', 'Sicily', 'Levant'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'testour',
                    name: 'Testour',
                    lat: 36.8975,
                    lng: 9.5994,
                    discovered: false,
                    description: 'A town founded by Andalusian Muslims expelled from Spain, featuring unique architectural styles blending Andalusian and Ottoman elements.',
                    image: 'images/testour.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Testour: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Testour was founded by Moriscos (Muslims expelled from Spain).',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The architecture of Testour is a blend of Andalusian and Ottoman styles.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'What event in 1492 led to the eventual founding of towns like Testour?',
                                    options: ['The Fall of Granada', 'The Battle of Lepanto', 'The Discovery of America', 'The Siege of Vienna'],
                                    correct: 0
                                },
                                {
                                    question: 'What is a distinctive feature of the Great Mosque of Testour?',
                                    options: ['Its octagonal minaret', 'Its twin domes', 'Its large courtyard', 'Its wooden roof'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                }
            ]
        },
        {
            id: 'modern-tunisia',
            name: 'Modern Tunisia',
            unlocked: false,
            sites: [
                {
                    id: 'habib-bourguiba-avenue',
                    name: 'Habib Bourguiba Avenue',
                    lat: 36.8019,
                    lng: 10.1802,
                    discovered: false,
                    description: 'The main thoroughfare of Tunis, often called the "Champs-Élysées of Tunis," featuring French colonial architecture.',
                    image: 'images/bourg.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Habib Bourguiba Avenue: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: Habib Bourguiba was the first President of independent Tunisia.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The avenue is known for its modern skyscrapers.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'In what year did Tunisia gain independence from France?',
                                    options: ['1956', '1962', '1974', '1987'],
                                    correct: 0
                                },
                                {
                                    question: 'What is the common nickname for this avenue?',
                                    options: ['The Champs-Élysées of Tunis', 'The Broadway of Tunis', 'The Mall of Tunis', 'The Grand Canal of Tunis'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'municipal-theatre',
                    name: 'Municipal Theatre of Tunis',
                    lat: 36.8028,
                    lng: 10.1817,
                    discovered: false,
                    description: 'An iconic Art Nouveau theatre located on Avenue Habib Bourguiba, hosting plays, concerts, operas, and major cultural events in modern Tunisia.',
                    image: 'images/municipal_theatre.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Municipal Theatre of Tunis: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The Municipal Theatre of Tunis was first opened to the public in 1902.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The Municipal Theatre is built in the Art Nouveau architectural style.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'Where is the Municipal Theatre of Tunis located?',
                                    options: ['Avenue Habib Bourguiba', 'Byrsa Hill', 'Kasbah Square', 'Lake of Tunis'],
                                    correct: 0
                                },
                                {
                                    question: 'Which type of event is commonly held at the Municipal Theatre?',
                                    options: ['Operas and theatre plays', 'Football matches', 'Scientific experiments', 'Car exhibitions'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                },
                {
                    id: 'medina-of-tunis',
                    name: 'Medina of Tunis',
                    lat: 36.8028,
                    lng: 10.1817,
                    discovered: false,
                    description: 'A UNESCO World Heritage site, this historic quarter features narrow alleyways, traditional markets, and stunning Islamic architecture.',
                    image: 'images/medina.jpg',
                    miniGames: {
                        quiz: {
                            title: 'Medina of Tunis: True or False & Multiple Choice',
                            questions: [
                                {
                                    question: 'True or False: The Medina of Tunis was designated as a UNESCO World Heritage site in 1979.',
                                    options: ['True', 'False'],
                                    correct: 0
                                },
                                {
                                    question: 'True or False: The Medina\'s layout is a grid pattern with wide, straight streets.',
                                    options: ['True', 'False'],
                                    correct: 1
                                },
                                {
                                    question: 'What is at the historical heart of the Medina?',
                                    options: ['The Zaytuna Mosque', 'The Bardo Palace', 'The French Cathedral', 'The Presidential Palace'],
                                    correct: 0
                                },
                                {
                                    question: 'The Medina\'s covered markets are known as what?',
                                    options: ['Souks', 'Bazaars', 'Medinas', 'Kasbahs'],
                                    correct: 0
                                }
                            ],
                        }
                    }
                }
            ]
        }
    ],
    playerStats: {
        points: 0,
        rank: 'Novice',
        badges: 0,
        discoveredSites: []
    },
    ranks: [
        { name: 'Novice', minPoints: 0 },
        { name: 'Explorer', minPoints: 500 },
        { name: 'Scholar', minPoints: 1000 },
        { name: 'Historian', minPoints: 2000 },
        { name: 'Master', minPoints: 3500 },
        { name: 'Legend', minPoints: 5000 }
    ]
};
// User data structure (add this to the existing gameData object if needed)
// Note: This is handled by the auth system in localStorage