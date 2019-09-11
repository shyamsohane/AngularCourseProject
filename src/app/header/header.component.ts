import {Component, Output, EventEmitter} from "@angular/core";
@Component ({
selector:'app-header',
templateUrl:'./header.component.html'
})
export class HeaderComponent{
collaspsed = true;
@Output() featureSelected = new EventEmitter<string>();

OnMenuClick(feature : string)
{
    this.featureSelected.emit(feature);
}

}