import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef, QueryList, ComponentFactoryResolver } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { ButtonComponent } from './inputcomponents/button/button.component';
import { TextBoxComponent } from './inputcomponents/text-box/text-box.component';
import { SpinnerComponent } from './inputcomponents/spinner/spinner.component';
import { DividerComponent } from './inputcomponents/divider/divider.component';
import { TableComponent } from './inputcomponents/table/table.component';
import { TimeComponent } from './inputcomponents/time/time.component';
import { HeaderControlComponent } from './inputcomponents/header-control/header-control.component';
import { FooterControlComponent } from './inputcomponents/footer-control/footer-control.component';


@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {


  interval: any;

  @ViewChildren('test', { read: ViewContainerRef }) public containers: QueryList<ViewContainerRef>;


  defaultComponentList = [
    { name: HeaderControlComponent, displayName: 'Header' },
    { name: FooterControlComponent, displayName: 'Footer' },
    { name: DividerComponent, displayName: 'Divider' },
    { name: ButtonComponent, displayName: 'Button' },
    { name: TextBoxComponent, displayName: 'TextBox' },
    { name: SpinnerComponent, displayName: 'Spinner' },
    { name: TableComponent, displayName: 'Table' },
    { name: TimeComponent, displayName: 'Time' }
  ]

  defaultComponents = [];
  components = [];
  lastItem: any;
  lastIndex: number;
  isSorted: boolean = false;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    this.resetList();
  }

  dropIt(event: CdkDragDrop<string[]>) {
    this.isSorted = false;
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      let componentCopy = { ...this.components[event.currentIndex] };
      this.components[event.currentIndex] = componentCopy;
      this.lastItem = componentCopy;
      this.lastIndex = event.currentIndex;
      this.resetList();
    } else if (event.previousIndex !== event.currentIndex) {
      if (event.previousContainer === event.container) {
        this.isSorted = true;
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      }
    }
  }

  resetList() {
    this.defaultComponents = [];
    setTimeout(() => {
      this.defaultComponents = this.defaultComponentList.slice();
    }, 0);
  }
  loadComponent(conf, index): void {
    if (this.containers !== null && this.containers !== undefined) {
      const component = conf.name;
      if (component) {
        const target = this.containers.toArray()[index];
        const widgetComponent = this.componentFactoryResolver.resolveComponentFactory(this.components[index].name);
        const cmpRef: any = target.createComponent(widgetComponent);
      }
    }
  }
  ngAfterViewInit() {
    this.containers.changes.subscribe(ql => {
      if (!this.isSorted) {
        this.loadComponent(this.lastItem, this.lastIndex);
      }
    });
  }
}




