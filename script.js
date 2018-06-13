$(document).ready(function () {
    $('header').load('header.html',() => {
        $('.sidenav').sidenav();
        $('a[href="/portfolio/'+getPage()+'"]').hide();
        $('.fixed-action-btn').floatingActionButton();
    });
    $('footer').load('footer.html');
    $('.tooltipped').tooltip();
});

function getPage() {
    return location.href.split('/').pop();
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $interval) {
    $scope.projects = [
        {'title':'Deternet Social','descr':'A completely decentralised social network to enable direct communication between users without servers.','tags':['Android','Java', 'Web', 'NodeJS'],'shots':['shot64.jpg'],'extras':[''],'level':101},
        {'title':'Audio Recorder','descr':'A simple tool to record user\'s audio on Android.','tags':['Android','Java'],'shots':['shot0.jpg'],'extras':['https://drive.google.com/open?id=1HPTh8n80ajnQ5_bqBjkmGemK9Mspmt3E'],'level':0},
        {'title':'Audio Share','descr':'A simple tool to download and share audio files on Android.','tags':['Android','Java','PHP','MySQL'],'shots':['shot1.jpg'],'extras':['https://drive.google.com/open?id=1SwHXNrORO6OhSdcU4kvIzhdVbH_ATHxS'],'level':0},
        {'title':'Bollywood Dialogues','descr':'Fun app to view bollywood dialogues by famous actors.','tags':['Android','Java'],'shots':['shot2.jpg','shot3.jpg'],'extras':['https://drive.google.com/open?id=1e_13BzF9P1Nxax34FEXmyTI5ifw6JFfU'],'level':0},
        {'title':'Super Mario Clone','descr':'A clone of the classic video game Super Mario.','tags':['Games','Java'],'shots':['shot6.jpg','shot7.jpg'],'extras':['https://drive.google.com/open?id=1v_uMdM8_8uPfiai_JUapLjOPsi77uyEP'],'level':20},
        {'title':'Call Flash','descr':'Flashlight on incoming calls on Android.','tags':['Android','Java'],'shots':['shot8.jpg'],'extras':['https://drive.google.com/open?id=14D-_vNM3LLhXnq2R5Rc4P7pyGhF5r67H'],'level':0},
        {'title':'Check Mate','descr':'Simple 2D chess game.','tags':['Games','Java'],'shots':['shot9.jpg','shot10.jpg'],'extras':['https://drive.google.com/open?id=1j-VB7TBo8E_KpO8wFXkbcy1x7dSatzKP'],'level':20},
        {'title':'Bomber Man Clone','descr':'A clone of the classic video game Bomber Man.','tags':['Games','Java'],'shots':['shot4.jpg','shot5.jpg'],'extras':['https://drive.google.com/open?id=1NNAEiWVkfCt_CXpMhrLkfKZBxvH1omNO'],'level':20},
        {'title':'CSV Maker','descr':'Advanced CSV maker for graphic designers.','tags':['Windows','C#'],'shots':['shot11.jpg'],'extras':['https://drive.google.com/open?id=1pDlRsJ_n-va550Pjg3SjjVuhluouK6Mg'],'level':0},
        {'title':'DevPad','descr':'Text editor with formatting options written in Java.','tags':['Windows','Java'],'shots':['shot12.jpg','shot13.jpg','shot14.jpg'],'extras':['https://drive.google.com/file/d/1_SKUkgOgiCUJIqOLJs9mKyfBK8gCDKVO/view'],'level':0},
        {'title':'Dukaans','descr':'An E-Commerce platform where the customers can order products from nearby stores.','tags':['NodeJS','MongoDB','Angular','Web','Android'],'shots':['shot15.jpg','shot16.jpg','shot17.jpg','shot18.jpg'],'extras':[''],'level':99},
        {'title':'Notify','descr':'A realtime notification delivery system for schools and colleges.','tags':['NodeJS','MongoDB','Angular','Web'],'shots':['shot19.jpg','shot20.jpg','shot21.jpg','shot22.jpg','shot23.jpg'],'extras':[''],'level':100},
        {'title':'Fish Defender','descr':'Help Moli and her friends escape from various difficulties they face in the sea.','tags':['Games','Android','Java'],'shots':['shot27.webp','shot28.webp'],'extras':['https://play.google.com/store/apps/details?id=com.desipixels.fishdefender'],'level':95},
        {'title':'Files Renamer','descr':'A simple tool to rename all files in numeric order.','tags':['Windows','C#'],'shots':['shot26.jpg'],'extras':['https://drive.google.com/open?id=1gCnbr13nxYESCe7oxqcj1cziPCJzGCH3'],'level':0},
        {'title':'Facebook Chats Downloader','descr':'A simple tool to download user\'s Facebook chats.','tags':['Android','Java'],'shots':['shot24.png','shot25.png'],'extras':['https://drive.google.com/open?id=1rllQX745FkOzRKJOA-ZerREbMcYBIGfr'],'level':0},
        {'title':'Password Rescue','descr':'A simple tool to backup passwords, PINs and pattern locks to Google Drive.','tags':['Android','Java'],'shots':['shot29.webp','shot30.webp','shot31.webp'],'extras':['https://play.google.com/store/apps/details?id=com.desipixels.passwordrescue'],'level':94},
        {'title':'Flash Light','descr':'A simple utility to toggle android flash light.','tags':['Android','Java'],'shots':['shot32.jpg','shot33.jpg'],'extras':['https://drive.google.com/open?id=1YjOr6Bm3deqAwMoli5f2rqlVM-_PpWuI'],'level':0},
        {'title':'Greetings','descr':'Android app to create and share greetings.','tags':['Android','Java'],'shots':['shot34.jpg','shot35.jpg','shot36.jpg'],'extras':['https://drive.google.com/open?id=1HDlW3xK6mcbA_7qhbi5s8JDO9L_gm3JY'],'level':90},
        {'title':'Hindi Quotes','descr':'Android app to read and share quotes in both Hindi & English.','tags':['Android','Java'],'shots':['shot37.jpg','shot38.jpg'],'extras':['https://drive.google.com/open?id=1Cozwwkt_gLogxbhl1o4V_LZjHvIt7as9'],'level':90},
        {'title':'Image Meta Seta','descr':'Simple tool to view and edit meta data of image files in Windows.','tags':['Windows','C#'],'shots':['shot39.jpg'],'extras':['https://drive.google.com/open?id=1r126BkkutmV5NKd7pHnR6bErAc6cU-hL'],'level':0},
        {'title':'Laundary','descr':'A set of two apps. One for placing laundary orders and another one for getting alerts of orders.','tags':['Android','Java','NodeJS','MySQL','Web'],'shots':['shot40.jpg','shot41.png','shot42.png'],'extras':[''],'level':0},
        {'title':'MIN Browser','descr':'A browser for Windows based on the super-fast Chromium engine.','tags':['Windows','C#'],'shots':['shot43.jpg','shot44.jpg'],'extras':['https://drive.google.com/open?id=1yeMR2STp5WOAPHTHotTdzAo3uTUe_4iM'],'level':98},
        {'title':'MyFreePPT','descr':'Free Powerpoint presentations for school projects.','tags':['Wordpress','PHP','MySQL','Web'],'shots':['shot45.jpg','shot46.jpg'],'extras':['http://myfreeppt.com'],'level':93},
        {'title':'Pool Tool','descr':'A simple hack for the 8 Ball Pool android game.','tags':['Games','NodeJS','Android'],'shots':['shot47.png'],'extras':['https://drive.google.com/open?id=1gN7047DxGlbtpk1YKMX11OvdstFv7RQ6'],'level':0},
        {'title':'Advanced PPT Generator','descr':'Generate multiple powerpoint presentations at once.','tags':['Java'],'shots':['shot48.jpg'],'extras':['https://drive.google.com/open?id=1oos-MkNQ8Qis67JQJuKsRv5anqFIOkV0'],'level':0},
        {'title':'PPT to Images','descr':'A simple tool to extract image shots from powerpoint slides.','tags':['Windows','C#'],'shots':['shot49.jpg'],'extras':['https://drive.google.com/open?id=1zuMxCfuuMXNuwXbUQEEjZSzWRGSRF1B0'],'level':0},
        {'title':'Sabke Notes','descr':'Download handwritten notes and upload your own notes.','tags':['PHP','MySQL','Web'],'shots':['shot50.png','shot51.png'],'extras':[''],'level':0},
        {'title':'Save Chandu','descr':'Help Chandulal, an Indian soldier on his escape from Pakistan.','tags':['Games','Java','Android'],'shots':['shot52.jpg','shot53.jpg','shot54.jpg'],'extras':['https://drive.google.com/open?id=1mUWRGJf3afZUyL5FaUNMWxIwjicJdHpT'],'level':96},
        {'title':'School CMS','descr':'School Management software for schools and colleges.','tags':['PHP','MySQL','NodeJS','Angular','Web'],'shots':['shot55.jpg','shot56.jpg','shot57.jpg'],'extras':[''],'level':97},
        {'title':'Tappy Bird','descr':'A clone of the famous game Flappy Bird.','tags':['Games','Java','Android'],'shots':['shot58.jpg','shot59.jpg'],'extras':['https://drive.google.com/open?id=1SglG9dWjz7GItt0rN_tL-Euw5cgPjAw4'],'level':0},
        {'title':'Thumbs Generator','descr':'A simple tool to generate highly-compressed thumbnails.','tags':['Java','Windows'],'shots':['shot60.jpg'],'extras':['https://drive.google.com/open?id=1cXCVuu8a2w7qYcA-8ZvXZJx5w_fIsJ7p'],'level':0},
        {'title':'Wordpress CSV Import','descr':'A simple plugin to make multiple Wordpress posts using CSV files.','tags':['Java','Windows','Wordpress','PHP','MySQL','Web'],'shots':['shot61.jpg'],'extras':[''],'level':0},
        {'title':'Wordpress Whatsapp Plugin','descr':'A simple plugin to share text from Wordpress posts to Whatsapp.','tags':['Wordpress','PHP','MySQL','Web'],'shots':['shot62.jpg','shot63.jpg'],'extras':[''],'level':0}
    ];

    let keyword = '';

    switch (getPage()) {
        case 'android.html':
            keyword = 'Android';
            break;

        case 'web.html':
            keyword = 'Web';
            break;

        case 'games.html':
            keyword = 'Games';
            break;

        case 'windows.html':
            keyword = 'Windows';
            break;
    }

    if (keyword !== '') {
        $scope.projects = $scope.projects.filter((project) => {
            return project.tags.indexOf(keyword) >= 0;
        });
    }

    $scope.projects.sort( (a, b) => { return b.level - a.level; } );

    $interval(() => {
        for (let j = 0; j < $scope.projects.length; j++) {
            const current = $scope.projects[j].current;
            const next = $scope.projects[j].shots.length > current + 1 ? current + 1 : 0;
            $scope.projects[j].current = next;
        }
    }, 1500);

    $('.wfl').removeClass('wfl');
});
