angular.module('lsm')

    .controller('SponsorsCtrl', function($scope, $log) {

        function loadSponsors(){
            $scope.sponsors = [
                {
                    name: '3M',
                    image: '3m.jpg'
                },
                {
                    name: 'ANII',
                    image: 'anii.jpg'
                },
                {
                    name: 'IBM',
                    image: 'bluemix.png'
                },
                {
                    name: 'CanalUY',
                    image: 'CanalLA.png'
                },
                {
                    name: 'CDU',
                    image: 'cdu.jpg'
                },
                {
                    name: 'Centro de Innovación y Emprendimientos',
                    image: 'cie.jpg'
                },
                {
                    name: 'Mondelez',
                    image: 'clubSocial.jpg'
                },
                {
                    name: 'CodigoDelSur',
                    image: 'codigosur.gif'
                },
                {
                    name: 'CUTI',
                    image: 'cuti.jpg'
                },
                {
                    name: 'Fundación daVinci',
                    image: 'davinci.png'
                },
                {
                    name: 'Emprenur',
                    image: 'emprenur.jpg'
                },
                {
                    name: 'Más Emprendedoras',
                    image: 'endeavor.png'
                },
                {
                    name: 'Evolución Ágil',
                    image: 'evolucion.png'
                },
                {
                    name: 'Gool Tecnología',
                    image: 'gool.png'
                },
                {
                    name: 'Ingenious Softworks',
                    image: 'ingsw.png'
                },
                {
                    name: 'ISEDE',
                    image: 'isede.png'
                },
                {
                    name: 'Fundación Julio Ricaldoni',
                    image: 'Logo-FJR.jpg'
                },
                {
                    name: 'Facultad de Ingeniería - UM',
                    image: 'logo-generalum.jpg'
                },
                {
                    name: 'Ingenio',
                    image: 'LOGO-INGENIO.jpg'
                },
                {
                    name: 'Facultad de Ciencias Empresariales - NEXO',
                    image: 'nexo.jpg'
                },
                {
                    name: 'El Observador',
                    image: 'observador.png'
                },
                {
                    name: 'PIMOD',
                    image: 'pimod.png'
                },
                {
                    name: 'Portones Shopping',
                    image: 'portones.jpg'
                },
                {
                    name: 'Sabre',
                    image: 'sabre.png'
                },
                {
                    name: 'RAFE',
                    image: 'rafe.png'
                },
                {
                    name: 'techMeetup',
                    image: 'techmeetup.png'
                },
                {
                    name: 'Universidad de la República',
                    image: 'udelar.png'
                }
            ];
        }

        loadSponsors();

    });
