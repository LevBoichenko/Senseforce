import mainPage from "../pages/main.page";

const red = "rgb(255, 0, 0)";
const green = "rgb(0, 128, 0)";
const blue = "rgb(0, 0, 255)";
const yellow = "rgb(255, 255, 0)";
const brown = "rgb(165, 42, 42)";

fixture`Theme Fixture`
  .page(`../senseforce/senseforce.html`);

test('As a user I can change the theme of the page', async t => {
  await mainPage.changeColorNavBarTo(mainPage.redColor);
  await t
    .expect(mainPage.content.getStyleProperty("background-color")).eql(red);
  await mainPage.changeColorNavBarTo(mainPage.greenColor);
  await t
    .expect(mainPage.content.getStyleProperty("background-color")).eql(green);
  await mainPage.changeColorNavBarTo(mainPage.blueColor);
  await t
    .expect(mainPage.content.getStyleProperty("background-color")).eql(blue);
  await mainPage.changeColorNavBarTo(mainPage.yellowColor);
  await t
    .expect(mainPage.content.getStyleProperty("background-color")).eql(yellow);
  await mainPage.changeColorNavBarTo(mainPage.brownColor);
  await t
    .expect(mainPage.content.getStyleProperty("background-color")).eql(brown);
});
