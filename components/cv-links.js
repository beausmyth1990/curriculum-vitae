customElements.define('cv-links', class extends HTMLElement{
  constructor(){
    super();
    this.shadow = this.attachShadow({mode:'open'});
  }

  connectedCallback(){
    this.linkedInUrl = this.getAttribute('linkedin-url');
    this.githubUrl = this.getAttribute('github-url');
    this.websiteUrl = this.getAttribute('website-url');
    this.emailAddress = this.getAttribute('email-address');
    this.shadow.innerHTML = `
      <div style='display: flex; flex-direction: row-reverse;'>
         ${this.linkedInUrl && `<a target='_blank' href='${this.linkedInUrl}' style='background-image:url(imgs/linkedin_link.png)'></a>` || ''}
         ${this.githubUrl && `<a target='_blank' href='${this.githubUrl}' style='background-image:url(imgs/github_link.png)'></a>` || ''}
         ${this.websiteUrl && `<a target='_blank' href='${this.websiteUrl}' style='background-image:url(imgs/website_link.png)'></a>` || ''}
         ${this.emailAddress && `<a target='_blank' href='mailto:${this.emailAddress}' style='background-image:url(imgs/email_link.png)'></a>` || ''}
      </div>
      <style>
          a{
            display: inline-block;
            width: 48px;
            height: 48px;
            background-size: contain;
            transition: transform 0.3s ease-out;
          }

          a:hover{
            transform: scale(1.1);
            cursor: pointer;
          }
      </style>
    `;
  }
})
