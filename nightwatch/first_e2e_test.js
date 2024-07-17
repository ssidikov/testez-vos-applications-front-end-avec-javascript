module.exports = {
  test: (client) => {
    client
      .url("http://127.0.0.1:5500/")
      .waitForElementVisible(".main-title", 10 * 1000)
      .assert.visible("input[type=email]")
      .setValue("input[type=email]", "thomas@facadia.com")
      .assert.visible("input[type=password]")
      .setValue("input[type=password]", "azerty")
      .assert.visible("button[type=submit]")
      .click("button[type=submit]")
      .waitForElementVisible(".section-title", 10 * 1000)
      .assert.containsText(".section-title", "Vos capteurs")
      .assert.visible(".sensor-info-btn")
      .click(".sensor-info-btn")
      .waitForElementVisible(".section-title", 10 * 1000)
      .assert.containsText(".section-title", "Détails du capteur #7")
      .end();
  },
};
