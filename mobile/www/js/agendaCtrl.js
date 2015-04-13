angular.module('lsm')

.controller('AgendaCtrl', function($scope) {
        var totalEvents = [[ //DAY 1
            {
                name : 'Se abren las puertas. Cena de bienvenida',
                type: 'food',
                from: '18:30',
                to: '19:30',
                timeString: '18:30 a 19:30'
            },
            {
                name : 'Apertura de Lean Startup Machine Montevideo',
                type: '',
                from: '19:30',
                to: '20:00',
                timeString: '19:30 a 20:00'
            },
            {
                name : 'Tiempo para el Pitch!',
                type: '',
                from: '20:00',
                to: '20:45',
                timeString: '20:00 a 20:45'
            },
            {
                name : 'Votación y armado de equipos',
                type: '',
                from: '20:45',
                to: '21:00',
                timeString: '20:45 a 21:00'
            },
            {
                name : 'Speaker - Gabriel Camargo',
                type: 'keynote',
                from: '21:00',
                to: '21:30',
                timeString: '21:00 a 21:30'
            },
            {
                name : 'Workshop I: Introducción al tablero de experimentación (Experiment Board)',
                type: 'workshop',
                from: '21:30',
                to: '22:15',
                timeString: '21:30 a 22:15'
            },
            {
                name : 'Trabajo en equipo',
                type: 'team',
                from: '22:15',
                to: '00:00',
                timeString: '22:15 a 00:00'
            },
            {
                name : 'Nos vamos a casa a descansar!',
                type: '',
                from: '00:00',
                to: '',
                timeString: '00:00'
            }
        ],[ //DAY 2
            {
                name : 'Abrimos las puertas!',
                type: 'food',
                from: '09:00',
                to: '09:30',
                timeString: '09:00 a 09:30'
            },
            {
                name : 'Workshop II: Mejores prácticas para Entrevistas con Clientes',
                type: 'workshop',
                from: '9:30',
                to: '10:15',
                timeString: '9:30 a 10:15'
            },
            {
                name : 'Trabajo en equipo',
                type: 'team',
                from: '10:15',
                to: '10:45',
                timeString: '10:15 a 10:45'
            },
            {
                name : 'Salimos del Edificio!',
                type: '',
                from: '10:45',
                to: '13:30',
                timeString: '10:45 a 13:30'
            },
            {
                name : 'Workshop III: Mejores prácticas para Validar Soluciones',
                type: 'workshop',
                from: '13:30',
                to: '14:00',
                timeString: '13:30 a 14:00'
            },
            {
                name : 'Trabajo en equipo',
                type: 'team',
                from: '14:00',
                to: '15:30',
                timeString: '14:00 a 15:30'
            },
            {
                name : 'Salimos del Edificio!',
                type: '',
                from: '15:30',
                to: '17:30',
                timeString: '15:30 a 17:30'
            },
            {
                name : 'Break',
                type: '',
                from: '17:30',
                to: '17:45',
                timeString: '17:30 a 17:45'
            },
            {
                name : 'Workshop IV: Concierge MVP',
                type: 'workshop',
                from: '17:45',
                to: '18:30',
                timeString: '17:45 a 18:30'
            },
            {
                name : 'Speaker - Silvio Raij',
                type: 'keynote',
                from: '18:30',
                to: '19:15',
                timeString: '18:30 a 19:15'
            },
            {
                name : 'Trabajo en equipo',
                type: 'team',
                from: '19:15',
                to: '21:00',
                timeString: '19:15 a 21:00'
            },
            {
                name : 'Cena',
                type: 'food',
                from: '21:00',
                to: '22:00',
                timeString: '21:00 a 22:00'
            },
            {
                name : 'Nos vamos a casa a descansar!',
                type: '',
                from: '22:00',
                to: '',
                timeString: '22:00'
            }
        ],
            [ //DAY 3
                {
                    name : 'Abrimos las puertas!',
                    type: 'food',
                    from: '09:00',
                    to: '09:30',
                    timeString: '09:00 a 09:30'
                },
                {
                    name : 'Speaker Sergio Delgado',
                    type: 'keynote',
                    from: '9:30',
                    to: '10:15',
                    timeString: '9:30 a 10:15'
                },
                {
                    name : 'Salimos del Edificio!',
                    type: 'team',
                    from: '10:15',
                    to: '12:45',
                    timeString: '10:15 a 12:45'
                },
                {
                    name : 'Presentación de BlueMix y Softlayer',
                    type: '',
                    from: '12:45',
                    to: '13:00',
                    timeString: '12:45 a 13:00'
                },
                {
                    name : 'Almuerzo',
                    type: 'food',
                    from: '13:00',
                    to: '14:00',
                    timeString: '13:00 a 14:00'
                },
                {
                    name : 'Speaker - Pablo Brenner',
                    type: 'keynote',
                    from: '14:00',
                    to: '14:45',
                    timeString: '14:00 a 14:45'
                },
                {
                    name : 'Trabajo en equipo',
                    type: 'team',
                    from: '14:45',
                    to: '16:10',
                    timeString: '14:45 a 16:10'
                },
                {
                    name : 'Vence plazo para subir presentaciones online',
                    type: '',
                    from: '16:10',
                    to: '16:15',
                    timeString: '16:10 a 16:15'
                },
                {
                    name : 'Break',
                    type: '',
                    from: '16:15',
                    to: '16:30',
                    timeString: '16:15 a 16:30'
                },
                {
                    name : 'Presentaciones finales',
                    type: '',
                    from: '16:30',
                    to: '19:00',
                    timeString: '16:30 a 19:00'
                },
                {
                    name : 'Definición de los ganadores',
                    type: '',
                    from: '19:00',
                    to: '19:30',
                    timeString: '19:00 a 19:30'
                },
                {
                    name : 'Anuncio de los ganadores y cierre del evento',
                    type: '',
                    from: '19:30',
                    to: '20:00',
                    timeString: '19:30 a 20:00'
                },
                {
                    name : 'Brindis de despedida gentileza de BlueMix y Softlayer (IBM)',
                    type: 'beer',
                    from: '20:00',
                    to: '',
                    timeString: '20:00'
                }
            ]
        ];

        $scope.day = 0;
        $scope.events = totalEvents[0];

        $scope.selectDay = function(day){
            $scope.events = totalEvents[day];
            $scope.day = day;
        }

});
