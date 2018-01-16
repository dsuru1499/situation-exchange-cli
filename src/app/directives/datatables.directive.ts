import { Directive, ElementRef, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

declare var $: any;

@Directive({
  selector: '[datatable]'
})
export class DataTablesDirective implements OnDestroy, OnInit {

  @Input()
  settings: DataTables.Settings;

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  public instance: DataTables.Api

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.initialize();
  }

  ngOnDestroy(): void {
    this.dispose();
  }

  private initialize(): void {
    const self = this;
    Observable.of(this.settings).subscribe(t => {
      this.instance = $(this.element.nativeElement).DataTable(t);

      this.instance.columns().every(function () {
        $("#input", this.footer()).on('keyup change', function () {
          if (self.instance.search() !== this['value']) {
            self.instance.search(this['value']).draw();
          }
        });
      });

      $(self.element.nativeElement).on('click', 'button', function (e) {
        var data = self.instance.row($(this).parents('tr')).data();
        let value = Object.assign({}, {
          id: e.currentTarget.id,
          data: data
        })
        self.change.emit(value);
      });
    });
  }

  private dispose(): void {
    this.instance.destroy(true);
  }

}