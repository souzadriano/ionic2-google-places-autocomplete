# Ionic 2+ Google Places Autocomplete

Autocomplete to Google Places.

# IN DEVELOPMENT

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
<google-place-autocomplete (callback)="detail($event[0])" key="GOOGLE_PLACES_API_KEY"></google-place-autocomplete>
```
