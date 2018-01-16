import { FormioComponents } from '../Components';
export class PanelComponent extends FormioComponents {
  build() {
    let panelClass = `card bg-${this.component.theme} `;
    panelClass += `panel panel-${this.component.theme} `;
    panelClass += this.component.customClass;
    this.element = this.ce('div', {
      class: panelClass
    });
    if (this.component.title) {
      let heading = this.ce('div', {
        class: 'card-header panel-heading'
      });
      let title = this.ce('h3', {
        class: 'card-title panel-title'
      });
      title.appendChild(this.text(this.component.title));
      this.createTooltip(title);
      heading.appendChild(title);
      this.element.appendChild(heading);
    }
    let body = this.ce('div', {
      class: 'card-body panel-body'
    });
    this.addComponents(body);
    this.element.appendChild(body);
  }
}
