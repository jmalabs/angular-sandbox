import { Component } from "@angular/core";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html"
})
export class DemoComponent {
  serverElements = [
    { type: "server", name: "testName", content: "testContent" }
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
}
