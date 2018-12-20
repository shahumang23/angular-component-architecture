# `Angular Component Architecture POC: Make A Transaction`:- Angular version 7.1.1.

## Requirements

### Transfer Money

As a User I should be able to:

1. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form. 
    - Assume that the "FROM ACCOUNT" field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. 
    - When transfer is pressed the new transfer should appear at the top of the transactions list, and the balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer.

### Transaction History

As a User I should be able to view recent transactions in an ordered list.

As a User I should be able to search my recent transactions by typing a keyword in the search field.

As a User I should be able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

***

## Getting Started

To get you started you can simply clone the `angular-component-architecture` repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-component-architecture` repository.

### Clone `angular-component-architecture`

Clone the `angular-component-architecture` repository using git:

```
git clone https://github.com/shahumang23/angular-component-architecture.git
cd angular-component-architecture
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the Node package manager.

```
npm install
```

After that, you should find out that you have
below new folders in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
ng serve
```

Now browse to the app at [`http://localhost:4200/`].

***

## Components based architecture

Created components based architecture so in future we can use same components to another application or same application

Here i created 4 components

- Header
- Payment Screen
- Preview Screen
- Tranascation list

And that components used into app.component.html

***

## Useful links

[angular]: https://angular.io/
[httpclient]: https://angular.io/guide/http
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[typescript]: https://www.typescriptlang.org/
[typescript]: https://www.typescriptlang.org/
[webpack]: https://webpack.js.org/
[bootstrap]: https://getbootstrap.com/
[RxJS]: https://angular.io/guide/rx-library
