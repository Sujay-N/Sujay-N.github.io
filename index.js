//Import Mixpanel SDK
import mixpanel from 'mixpanel-browser';
 
// Near entry of your product, init Mixpanel
mixpanel.init('4dc7b611a3b9f809a398afa860da3f50', {debug: true, track_pageview: true, persistence: 'localStorage'});
mixpanel.init('4dc7b611a3b9f809a398afa860da3f50', {track_pageview: "https://sujay-n.github.io/"});
mixpanel.track_pageview();

mixpanel.identify('12345')
 
mixpanel.people.set({ '$name': 'Jane Doe',
                      '$email': 'jane.doe@example.com',
                      'plan' : 'Premium'
                      // Add anything else about the user here
                      });


ScrollReveal().reveal('.reveal1',{
    origin:'top',
    distance : "20px",
    delay:500,
    scale :0.5,
});
ScrollReveal().reveal('.reveal2',{delay: 1000 });
ScrollReveal().reveal('.reveal3',{
     delay: 1000,
     origin:'left',
     distance : "20px",
     scale :0.5, });

ScrollReveal().reveal('.reveal4',{
     delay: 1200,
     origin:'right',
     distance : "20px",
     scale :0.4, });

ScrollReveal().reveal('.reveal5',{
    origin:"top",
    scale:0.5,
    distance : "30px",
    delay: 1000 });

// ScrollReveal().reveal(".card",{
//     duration:1000,
//     delay:1000
// },50)
ScrollReveal().reveal('.reveal6',{ delay: 1000 });

ScrollReveal().reveal('.reveal7',{
    origin:'bottom',
    distance : "20px",
    delay:1000,
    scale :0.5, });
