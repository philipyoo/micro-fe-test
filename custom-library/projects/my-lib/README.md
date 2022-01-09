# MyLib

This is the actual Angular library project within this workspace. You can also create another application within this workspace to quickly consume and serve up locally for a quicker way to validate the work done in the library.

Also, you can run tests against the served demo application within this workspace CI if you wish to separate out your tests between the library and the host application.

## Passing Input/Output to Library Component

A simple example to show a way to communicate with the Library component using Angular's native `@Input` and `@Output` decorators.

## Shared Environment Variables

To share the host application environment variables with this library, environment variables are passed to `MyLibModule` as an argument. I can then use the same environment variables from my host application within my library files.

See [my-lib.module.ts](./src/lib/my-lib.module.ts) from this Angular library.
See [app.module.ts](../../../host-angular/src/app/app.module.ts) from the host application.

## API Requests

See the [host-angular](../../../host-angular/README.md) project README.
