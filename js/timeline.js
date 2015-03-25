// var work = [
//   {
//     title: "Design Technologist",
//     time: "April 2012 to present",
//     company: "New York Magazine",
//     skill: "HTML5, CSS3, javascript, jQuery, node.js, wordpress",
//     detail:[
//       "Responsive Website, Desktop, Mobile, Tablet",
//       "Sites: nymag, vulture, thecut, bedford+bowery, science of us",
//       "Working closely with sr. developers, designers, product owners to create components from PSD.",
//       "Agile environment, github as version control, node.js"
//     ]
//   },
//   {
//     title: "Freelance: HTML developer",
//     time: "March 2011 – April 2012",
//     company: "Clients: Standard & Poors, AKA NYC, Manhattan Marketing Ensemble, Tag Worldwide, Exposure New York, Mundocom",
//     skill: "HTML, CSS, flash animation",
//     detail: "HTML / CSS development, Flash ad banner, Business to Business Newsletter templates, Email campaign and landing pages"
//   },
//   {
//     title: "Web Content Administration",
//     time: "February 2009 to February 2011",
//     company: "Evolution Store",
//     skill: "HTML, CSS",
//     detail: "HTML web page development, Email campaign and landing page"
//   }
// ]
//
//
//
// for(var i = 0; i<work.length; i++){
//
//   var doc = document;
//   var div = doc.createElement('div');
//   var header = doc.createElement('h2');
//   var p = doc.createElement('p');
//
//   // create header with title
//   var title = doc.createTextNode(work[i].title);
//   header.appendChild(title);
//   div.appendChild(header);
//
//   // create p and add information
//   var content = [
//     doc.createTextNode(work[i].time),
//     doc.createTextNode(work[i].company),
//     doc.createTextNode(work[i].skill),
//     doc.createTextNode(work[i].detail)
//   ];
//   var classNames = ['time','company','skill', 'detail'];
//   var p=[];
//   var workDetail = work[i].detail;
//
//     for(var j=0; j<classNames.length; j++){
//       p[j] = doc.createElement('p');
//       p[j].appendChild(content[j]);
//       p[j].classList.add(classNames[j]);
//       div.appendChild(p[j]);
//     }
//
//   // If there are more than one details
//   if (typeof(workDetail) == 'object'){
//     for(var k=0; k<workDetail.length; k++){
//       p[k] = doc.createElement('p');
//       p[k].innerHTML = workDetail[k];
//       p[k].classList.add('detail');
//       div.appendChild(p[k]);
//     }
//   }
//
//   doc.querySelectorAll('.experience')[0].appendChild(div);
// }
