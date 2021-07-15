import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'pb-chip',
  styleUrl: 'pb-chip.css',
  shadow: true,
})
export class PbChipComponent  {
  @Prop() clickable: boolean = false;

  @Prop() disabled: boolean = false;

  render() {
    return <div class={ 'chip ' + 
    (this.clickable ? 'clickable ' : '') +
    (this.disabled ? 'disabled ' : '')
    }>
      <div class="chip-content">
        <slot />
        <slot name="icon" />
      </div>
    </div>;
  }
}
