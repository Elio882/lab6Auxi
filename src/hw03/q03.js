function changeDestinationLinks() {
    let link = document.getElementById('root').getElementsByClassName('root__enlace');

    for (let i = 0; i < link.length; i++) {
        link[i].href = 'https://keybr.com';
    }
}

changeDestinationLinks();

const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  let listOfComponents = document.getElementById('root');
  let listUl = document.createElement('ul');

  for (let elemento of buyList) {
    let listLi = document.createElement('li');
  
    listLi.textContent = `${elemento}`;
  
    listUl.appendChild(listLi);
  }

  listOfComponents.appendChild(listUl);