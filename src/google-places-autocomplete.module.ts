import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GooglePlacesAutocompleteComponent } from './components/google-places-autocomplete';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    GooglePlacesAutocompleteComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    GooglePlacesAutocompleteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class GooglePlacesAutocompleteComponentModule {}
