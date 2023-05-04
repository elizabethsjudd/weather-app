# Project road map

## MVP

- [x] Setup React project
- [x] Linting
  - [x] ESLint
  - [x] StyleLint
- [x] Setup Storybook
- [x] Application without input
- [x] Application with input
- [x] Styling + Responsive
- [x] Error handling & form validation
- [x] Testing
  - [x] Accessibility
  - [x] Functional
- [x] Deployment of application

## Additional features as time allows

- [x] **Dark theme** - easy win to provide value to the end user
- [x] **Storybook Deployment** - easy win to provide value to internal users, especially non-technical
- [x] **Additional linting** - easy win to provide more consistency and reduce future technical debt that often leads to merge conflicts
  - [x] JSON
  - [x] Markdown
  - [x] Import order rule
- [x] **Allow the ability to change units in the app** - easy win to allow the user additional configurations on how the data is presented
- [x] **Provide more details from API via a modal** - allow the user more detailed information and provide value with in the application
- [ ] **Additional component testing** - now that we have a status quo getting more testing will help prevent regression
  - [ ] Functional tests
  - [ ] VRT
  - [ ] **HTML validation** - Storybook 7 env doesn't support the addon and Playwright doesn't have a OOTB plugin which means a more intensive approach with a manifest [builder] and node plugin would be required similar to approaches takin at IBM and Mural
- [ ] **Dynamically open/close sections** - better UX and accessibility to guide them through he workflow with out being overwhelmed
- [ ] **Deploy branch previous of Storybook** - allows non-technical people to review features they control in isolation
- [ ] **Empty/Loading states** - more polished UX
- [ ] Documented component requirements - help prevent misuse and provide better estimation for future work
- [ ] **Multiple address matches** - allow for potential error correction
- [ ] Additional application testing for full coverage
    - [ ] Accessibility scans to cover the combination of components
    - [ ] VRT - ensure layouts don't break
    - [ ] HTML validation scans
- [ ] Automated technical documentation 
- [ ] Location API working in SB
