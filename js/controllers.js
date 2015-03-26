var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.works =   [
    {
      'title': 'Design Technologist / Front-end Developer',
      'time': {
        'start': 'April 2012',
        'end': 'Present'
      },
      'company': 'New York Magazine',
      'skill': 'HTML5, CSS3, javascript, jQuery, node.js, wordpress',
      'detail':[
            'Responsive Website, Desktop, Mobile, Tablet',
            'Sites: nymag, vulture, thecut, bedford+bowery, science of us',
            'Working closely with sr. developers, designers, product owners to create components from PSD.',
            'Agile environment, github as version control, node.js'
          ]
    },
    {
      'title': 'Freelance: HTML Developer',
      'time': {
        'start': 'March 2011',
        'end': 'April 2012'
      },
      'company': 'Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom',
      'skill': 'HTML, CSS, flash animation',
      'detail': ['HTML / CSS development, Flash ad banner, Business to Business Newsletter templates, Email campaign and landing pages']
    },
    {
      'title': 'Web Content Administration',
      'time': {
        'start': 'February 2009',
        'end': 'February 2011'
      },
      'company': 'Evolution Store',
      'skill': 'HTML, CSS',
      'detail': ['HTML web page development, Email campaign and landing page']
    }
  ]
});
