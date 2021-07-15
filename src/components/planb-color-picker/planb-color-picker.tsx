import { Component, Prop, h, EventEmitter, Event, State } from '@stencil/core';
import { shadeColor } from '../../utils/utils';

@Component({
  tag: 'planb-color-picker',
  styleUrl: 'planb-color-picker.css',
  shadow: true,
})
export class PlanBButtonComponent  {
  @Prop() customColorCode: string;

  @Prop() customColorName: string;

  @Prop() size: string;

  @Prop() dark: boolean = false;

  @Prop() disabled: boolean = false;

  @Event() colorSelected: EventEmitter<{code: string, name: string}>;

  @State() selectedColorCode: string;

  private onSelected(color: {code: string, name: string}) {
    this.colorSelected.emit(color);
    this.selectedColorCode = color.code;
  }

  private colors: {code: string, name: string}[] = [
    {
      code: '#4287f5',
      name: 'light-blue'
    },
    {
      code: '#42e9f5',
      name: 'cyan'
    },
    {
      code: '#42f551',
      name: 'light-green'
    },
    {
      code: '#ecf542',
      name: 'zitrone'
    },
    {
      code: '#f54242',
      name: 'red'
    },
    {
      code: '#4248f5',
      name: 'blue'
    },
  ];

  render() {
    if (this.customColorCode && this.customColorName) {
      this.colors.push({
        code: this.customColorCode,
        name: this.customColorName
      });
    }
    return <div class="container">
      {
        this.colors.map(c =>
          <div part="item" class={this.getStyles(c)} style={{
            'background-color': this.dark ?  shadeColor(c.code, -50) : c.code
          }} onClick={() => this.onSelected(c)}></div>
        )
      }
    </div>;
  }

  private getStyles(c: {code: string, name: string}): string {
    console.log('rerender')
    const list = ['color-item'];
    if (this.size === 'small')
      list.push('small');
    if (this.disabled)
      list.push('disabled');
    if (c.code === this.selectedColorCode)
      list.push('selected');

    return list.join(' ');
  }
}
