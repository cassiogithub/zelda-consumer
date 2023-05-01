import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models';
import { ZeldaAvatarsServiceService } from 'src/app/services/zelda-avatars-service.service';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
    public characters: Array<Character> = new Array<Character>();

    constructor(private zeldaService: ZeldaAvatarsServiceService) {}

    ngOnInit(): void {
        this.listCharacters();
    }

    public listCharacters(): void {
        this.zeldaService.listCharacters('10').subscribe((res) => (this.characters = res.data));
    }
}
