import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { IonicModule } from 'ionic-angular';
import { GooglePlacesAutocompleteComponent } from './components/google-places-autocomplete';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    GooglePlacesAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    //IonicModule.forChild(GooglePlacesAutocompleteComponent)
  ],
  exports: [
    GooglePlacesAutocompleteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GooglePlacesAutocompleteComponentModule {}
