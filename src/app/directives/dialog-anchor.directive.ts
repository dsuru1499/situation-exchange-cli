import {
  Directive, EventEmitter,
  ViewContainerRef, ComponentFactoryResolver, ComponentRef
} from '@angular/core';
import { Element } from '@angular/compiler';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Directive({
  selector: '[dialog-anchor]'
})
export class DialogAnchorDirective {

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  create(view , data?: any): ComponentRef<any> {
    this.container.clear();
    let factory = this.resolver.resolveComponentFactory(view);
    let component :ComponentRef<any> = this.container.createComponent(factory);
    component.instance.action = data;
    component.instance.close.subscribe(() => {
      component.destroy();
    });

    return component;
  }
}

export class Modal {

  action: any;

  private _close: EventEmitter<any>;

  constructor() {
    this._close = new EventEmitter<any>();
  }

  get close(): EventEmitter<any> {
    return this._close;
  }

  public modal(child: ElementRef, options: any): void {
    let element: any = $(child.nativeElement);
    element.modal(options);
    let self = this;
    element.on('hidden.bs.modal', function (e) {
      self.close.emit('event');
    });
  }
}
