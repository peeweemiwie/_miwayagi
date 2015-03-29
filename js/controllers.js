var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
    $scope.works = [{
        'title': 'Design Technologist / Front-end Developer',
        'time': {
            'start': 'April 2012',
            'end': 'Present'
        },
        'company': 'New York Magazine',
        'skill': 'HTML5, CSS3, javascript, jQuery, node.js, wordpress',
        'detail': [
          'Brands: ​New York Magazine, Vulture, The Cut, Bedford + Bowery, Science of Us',
          'Creating components from Photoshop wireframes using HTML, CSS and JavaScript in a Node.js environment',
          'Testing cross­browser compatibility in Chrome, Firefox, Safari, and IE 9,10 and 11',
          'Working in an agile environment, communicating closely with designers and product managers',
          'Working both independently on small projects, as well as in a team of large­scale projects, such as the:',
        ],
        'more': [
          'original release for The Cut in 2012, creating numerous responsive design components and prototypes, which drew attention as an early adopter of mobile­-first strategy.',
          'prototype and page layout for a pop­up page which displayed Oscar real time results.',
          'utilization of Optimizely as an A/B testing tool, creating randomized experiments with multiple variants.',
          'creation of a child theme in WordPress for an NYU collaboration blog, Bedford + Bowery.'
        ]
    }, {
        'title': 'Freelance: HTML Developer',
        'time': {
            'start': 'March 2011',
            'end': 'April 2012'
        },
        'company': 'Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom - Publicis',
        'skill': 'HTML, CSS, Flash animation',
        'detail': [
           'Email campaigns and microsites for newly released electric appliances.',
           'Flash ad banners.',
           'Email campaigns and landing pages for an American global hospitality company to track promotions responses.',
           'Internal site for a global leader in the beverage industry to provide their corporate guidelines.',
           'Business­to­business newsletter templates for Microsoft Outlook, which are easily altered depending on users’ preference in subscription.'
        ]
    }, {
        'title': 'Web Content Administration',
        'time': {
            'start': 'February 2009',
            'end': 'February 2011'
        },
        'company': 'Evolution Store',
        'skill': 'HTML, CSS',
        'detail': [
          'HTML/CSS web­page development.',
          'Developed splash web pages in HTML and CSS for e­commerce site.',
          'Coded, sent and tracked email campaigns using StreamSend.'
        ]
    }];
    $scope.education = [{
        'course': 'Certificate in Web Development',
        'school': 'New York University',
        'subjects': 'JavaScript, Information Architecture, HTML5'
    }, {
        'course': 'Certificate in Web Digital Design',
        'school': 'Baruch College',
        'subjects': 'Illustrator, Photoshop, InDesign, Dreamweaver, Flash Animation, ActionScript 2, Fireworks,HTML, CSS, JavaScript'
    }]
});
