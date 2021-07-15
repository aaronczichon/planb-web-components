import { Component, h } from '@stencil/core';

@Component({
  tag: 'pb-chips',
  styleUrl: 'pb-chips.css',
  shadow: true,
})
export class PbChipsComponent  {

  render() {
    return (
      <div class="container">
      <slot />
    </div>);
  }
}
