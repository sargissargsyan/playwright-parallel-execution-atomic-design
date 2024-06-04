# Playwright Framework: Atomic Design with Parallel Execution

# Overview
This repository contains a Java-based framework for UI testing, showcasing dynamic test data generation techniques.
Designed for efficiency and clarity in automated testing, it incorporates key principles like faster execution,
higher stability, easier maintenance, test isolation, and enhanced reusability.


# Framework Details
- **Programming Language:** Typescript
- **Design Pattern:** Page Object Model & Atomic Tests

# Getting Started
1. Clone the repo using below URL

```sh
git clone https://github.com/sargissargsyan/playwright-parallel-execution-atomic-design.git
```

2. Navigate to folder:

```sh
cd playwright-parallel-execution-atomic-design
```

3. Build the project
```sh
npm install
```

4. Run tests
```sh
npx playwright test
```

5. Run the tests in parallel against Selenium Grid
```sh
SELENIUM_REMOTE_URL=http://localhost:4444/wd/hub npx playwright test
```

Go to [repo](https://github.com/sargissargsyan/workshop-env-setup) to setup an application under the test and Selenium Grid to run this suite against it
