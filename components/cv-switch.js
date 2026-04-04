customElements.define('cv-switch', class extends HTMLElement{
  constructor(){
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    this.shadow.innerHTML = `
      <div style='width: 50px;height: 50px; background: var(--cv-background-color)'>
        <div state='off' id='switcher' style='width:10px;height:10px; border-radius: 50%;'></div>
      </div>
      <style>
         :host{
           display: inline-block;
         }
         #switch::hover{
           cursor: pointer;
         }

         #switcher[state='off']{
           background-color: black; 
         }
         #switcher[state='on']{
           background-color: darkcyan; 
         }
      </style>
    `;

    this.addEventListener('click', this);
  }

  handleEvent(evt){

    const html = document.querySelector('html');
    const switcher = this.shadow.querySelector("div[id='switcher']");

    switch(evt.type){
      case 'click':
        switcher.getAttribute('state') === 'off' 
          ? switcher.setAttribute('state', 'on') 
          : switcher.setAttribute('state', 'off');
      break;
    }

    switch(switcher.getAttribute('state')){
      case 'on':
        html.setAttribute('theme', 'night')
      break;
      case 'off':
        html.setAttribute('theme', 'day')
      break;
    }

  }
})
