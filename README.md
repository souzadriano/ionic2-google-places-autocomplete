# Ionic 2.2+ Google Places Autocomplete

Ionic 2.2+ Google Places Autocomplete.

## Install

 `npm install --save ionic2-google-places-autocomplete`

## Usage

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    GooglePlacesAutocompleteComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

```html
<google-places-autocomplete (callback)="detail($event[0])" key="GOOGLE_PLACES_API_KEY"></google-places-autocomplete>
```

All list of parameters and result can be viewed in: https://developers.google.com/places/web-service/autocomplete
