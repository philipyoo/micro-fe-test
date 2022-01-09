# CustomLibrary

This is an Angular library to be built and used within some host Angular application.

This project was scaffolded using Angular's cli.

```
$ ng generate library my-lib
```

The library will simply display a component on the host application. A request to the backend API will be made from this library component. Also, the environment variables from the host application will be passed down to this library to be used to figure out the domain of the backend API.

## Build and Publish

When publishing a package, if the name defined in `custom-library/projects/my-lib/package.json` is shared with another package saved on npm, you will get a 403 Forbidden. Make sure that the package name is unique when publishing. If publishing to a private directory, you can disregard the name conflict issue.

For each incremental update, make sure to bump the version defined in the `custom-library/projects/my-lib/package.json` file.

```
# Make sure to login with npm before attempting to publish a package
$ npm login

# Run the build command in the project root directory `custom-library`
# Name of the library is defined in `angular.json` under "projects"
$ ng build my-lib
$ cd dist/my-lib
$ npm publish
```

If publishing to a private directory, you just need to copy over the `dist/my-lib` contents to the targeted directory.

## Consume

To consume the custom library, if you published to npm, simply `$ npm i philz-my-lib`, updated to whatever your module is named. In this case, I created a `philz-my-lib` to create a unique module name.

To consume the custom library from a private directory, add the dependency like so:
```
{
    "name": "myapp",
    "dependencies": {
        "my-lib": "git+ssh://git@github.com:someaccount/privaterepo.git#v0.0.1",
    }
}
```

