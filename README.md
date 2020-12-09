![Linting](https://github.com/james-jenkinson/example-ci-integration-tests/workflows/Linting/badge.svg)
![Integration tests](https://github.com/james-jenkinson/example-ci-integration-tests/workflows/Integration-tests/badge.svg)

# Running dockerised integration tests in Github Actions

This project show an example of setting up a dockerised API to run integration tests against, allowing your integration tests to be run in every commit / pull request, and optionally to disable merging of pull requests when integration tests are failing.

# Why would you want to do this?

## Aren't unit tests sufficient?

Unit tests are valuable for testing isolated business logic, however, depending on the application (for example a CRUD API), a large proportion, or even the majority, of breaking issues may have nothing to do with business logic, issues such as:

* Incorrect client credentials
* Changes to database entities affecting response request validation
* Services being incorrectly hooked up

Unit tests alone may give a false sense of security when releasing. Integration tests however test a whole application "black box", thus checking the entire system end to end.

# Why not run integration tests against a live running server, e.g. staging

This is a valid option, however there are a couple of recurring issues with this.

* The server database will become bloated with tests data from tests that write data
  * You may be able to fix this by having tests clean themselves up, or having a script that cleans up such test data, however this adds further complexity
* Tests often fail for reasons that have nothing to do with the integrity of the application
  * The database, or other connection, is temporarily down
  * Test data may have been accidentally moved or deleted
* Test failures may be inconsistent, for example the server may be responding slowly, causing tests to time out, making issues harder to identify
* Running tests on a per-pull-request basis is difficult, as the changes need to be hosted somewhere to run tests against them. Often the simplest answer is to run integration tests only against master (or another branch), meaning issues in a pull request may only be noticed after it has been merged

# How does this solution work

The application that needs to be tested against is build into a docker image, and run in a continuos integration environment (in this example we're using Github Actions, but can be used in any continuous integration environment).

Services that can be run from an image stored in a registry (for example here, mongo and redis) can be run as services within the same network as the application.

Services that are not pushed to an image registry or perhaps stand in front of a 3rd party data source that you don't want to write to (for example billing or email) may be mocked with a simple rest API. This decreases somewhat the reliability of the tests, but may simplify the maintenance of them.
