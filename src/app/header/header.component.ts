import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    
    @Output() dataSelected = new EventEmitter<string>();

    onSelect(data: string) {
        this.dataSelected.emit(data);
    }

}