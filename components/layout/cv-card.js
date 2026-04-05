customElements.define('cv-card', class extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});
    shadow.innerHTML = `
       <div>
         <div style='display:flex'>
             <slot name='logo'></slot>
           <div style='padding-left: 1rem; white-space: nowrap;'>
             <slot name='title'></slot>
           </div> 
         </div>
       </div>
       <slot name='body'></slot>
       <slot name='footer'></slot>

       <style>
          :host{
              color: var(--cv-color-secondary);
              flex-grow: 1;
              padding: 1rem;
              margin: 1rem;
              box-shadow: 0px 0px 5px lightgray;
              border-radius: 10px;
          }
       </style>
    `;
  }
})
