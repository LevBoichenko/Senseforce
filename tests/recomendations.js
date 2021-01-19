import mainPage from "../pages/main.page";

const optimizationText = "Analyze the technical and organizational availability of your machines in order to optimally design manufacturing and production processes.";
const automationText = "In digital tests, processes are run through virtually and thus conclusions for the production process are obtained.";
const dashboardingText = "With our dashboarding tool you can generate data from all your machines and systems and visualize it in a uniform overview.";

fixture`Theme Fixture`
  .page(`../senseforce/senseforce.html`);

test('As a user I can see different recommendation options', async t => {
  await t
    .expect(mainPage.content.exists).ok()
  await mainPage.changeRecomendation(mainPage.optimizationContent);
  await t
    .expect(mainPage.optimizationContentText.innerText).eql(optimizationText);
  await mainPage.changeRecomendation(mainPage.automationContent);
  await t
    .expect(mainPage.automationContentText.innerText).eql(automationText);
  await mainPage.changeRecomendation(mainPage.dashboardingContent);
  await t
    .expect(mainPage.dashboardingContentText.innerText).eql(dashboardingText);
});
