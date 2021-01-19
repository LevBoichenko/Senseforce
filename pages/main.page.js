import { Selector, t } from 'testcafe';

class MainPage {
  constructor() {
    this.navigationBar = Selector('[data-test-id="navbar"]');
    this.recomendations = Selector('[data-test-id="recommendations"]');
    this.dashboardingContent = Selector('[data-test-id="dashboarding_content"]');
    this.dashboardingContentText = Selector('[id="rec_dashboarding_content"]');
    this.automationContent = Selector('[data-test-id="automation_content"]');
    this.automationContentText = Selector('[id="rec_automation_content"]');
    this.optimizationContent = Selector('[data-test-id="optimization_content"]');
    this.optimizationContentText = Selector('[id="rec_optimization_content"]');
    this.redColor = Selector('[data-test-id="red"]');
    this.blueColor = Selector('[data-test-id="blue"]');
    this.yellowColor = Selector('[data-test-id="yellow"]');
    this.greenColor = Selector('[data-test-id="green"]');
    this.brownColor = Selector('[data-test-id="brown"]');
    this.content = Selector('[data-test-id="content"]');
    this.likeSensefore = Selector('[id="thumbText"]');
  }

  async changeColorNavBarTo(navbarColor) {
    await t
      .click(navbarColor);
  }

  async changeRecomendation(recomendation) {
    await t
      .click(recomendation);
  }
}

export default new MainPage();
