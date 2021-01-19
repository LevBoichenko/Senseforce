import mainPage from "../pages/main.page";

fixture`Theme Fixture`
  .page(`../senseforce/senseforce.html`);

test('As a user I can `like` the Senseforce page', async t => {
  await t
    .expect(mainPage.likeSensefore.exists).ok()
    .click(mainPage.likeSensefore)
    .expect(mainPage.likeSensefore.innerText).notContains("Like us?");
});
