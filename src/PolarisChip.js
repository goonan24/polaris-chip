import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String},
      active: {Type: Boolean, reflect: true}
    };
  }

static get styles() {
  return css`
    :host {
      display: inline-block;
      margin: 0 16px 16px 0;
    }

    .link {
      font-weight: bold;
      text-decoration: none;
      padding: 8px 4px;
      border: 2px solid black;
      color: black;
      font-size: 14px;
    }

    :host([active]) .link:hover {
      background-color: gray;
      border: 2px solid black;
      border-radius: 2px;
      color: #005fa9;
      cursor: pointer;
    }
  `;
}
constructor() {
  super();
  this.name = '';
  this.link = "https://www.psu.edu/research/";
}

render() {
  return html`<a class="link" href=${this.link}><slot>${this.name}</slot></a>`;
}
}
