import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDisneyComponent } from './page-disney/page-disney.component';
import { RouterModule } from '@angular/router';
import { SelectedCharacterComponent } from './components/selected-character/selected-character.component';

@NgModule({
  declarations: [
    PageDisneyComponent,
    SelectedCharacterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PageDisneyComponent }
    ]),
  ]
})
export class DisneyModule { }
