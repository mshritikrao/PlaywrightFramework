🎭 PlaywrightFramework

UI and API automation framework built using Playwright with TypeScript, following the Page Object Model (POM) design pattern. This project integrates logging, reporting, and CI/CD for robust test execution and visibility.


🧰 Technologies Used

TypeScript
Playwright
PostgreSQL
Excel Automation
Git / CI-CD / Docker
Winston Logger
Allure Reports


🚀 Features

✅ UI test automation using Playwright
✅ API automation using Playwright
✅ CI/CD integration for test deployment
✅ Logging with Winston and timezone support
✅ Allure reporting for test results


📁 Project Structure

├── UI
│   ├── Browser/        # Browser setup and configuration
│   ├── Core/           # Base classes and utilities
│   ├── pages/          # Page Object Models
│   └── utils/          # Helper functions
├── API
│   ├── requests/       # API request definitions
│   ├── validations/    # Response validations
├── config/             # Configuration files
├── docs/               # Documentation
├── README.md
└── package.json        # Project dependencies and scripts


⚙️ Setup Instructions
Prerequisites

Node.js
VS Code
Playwright extension for VS Code
Winston Logger
Allure CLI
yaml file 


📦 Installation

# Clone the repository
git clone https://github.com/mshritikrao/PlaywrightFramework.git

# Initialize Playwright
npm init playwright@latest

# Install Winston logger and timezone support
npm install winston moment-timezone

# Install Allure reporting tools
npm i -D @playwright/test allure-playwright
npm i allure-commandline

# Initialize Yaml file
npm install js-yaml

🧪 Running Tests

# Run Playwright tests
npx playwright test

# View Playwright HTML reports
npx playwright show-report

# Generate Allure report
npx allure generate allure-results --clean

# Open Allure report
npx allure open allure-report


📊 Data Flow Diagram (Optional)

(You can add a diagram here showing how UI/API tests flow through the framework, including logging and reporting.)


📌 TODOs

 Add database validation layer for PostgreSQL
 Integrate Excel-based test data automation
 Add Docker support for containerized test execution
 Enhance API response schema validation


🙋‍♂️ Author
Nanda Kishore M
Senior QA Automation Analyst
LinkedIn | Email