# Angular Email Obfuscation

Email Address Obfuscation helps to prevent spam by hiding your email addresses in your angular application from email crawlers, bots and harvesters while remaining visible to your site visitors.

### Demo

https://stackblitz.com/edit/ngx-email-obfuscation

### Installation

##### Install the npm package

`npm install ngx-email-obfuscation`

##### Import `NgxEmailObfuscationModule`

```typescript
import { NgxEmailObfuscationModule } from 'ngx-email-obfuscation';

@NgModule({
 imports: [
   ...
   NgxEmailObfuscationModule
 ]
})
```

### Usage

Add `emailObfuscation` directive to the parent element of the email address.

```html
Contact us at <span emailObfuscation>support@example.com</span>
```

### Issues

Please report bugs and issues [here](https://github.com/joejordanbrown/ngx-email-obfuscation/issues).

### License

MIT © [Joe Jordan Brown](https://github.com/joejordanbrown)