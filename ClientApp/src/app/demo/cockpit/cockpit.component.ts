import { Component, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html"
})
export class CockpitComponent {
  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output()
  blueprintCreated = new EventEmitter();

  newServerElements = [];
  @ViewChild('serverContentInput') newServerContent: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }
}
