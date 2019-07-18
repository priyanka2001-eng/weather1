$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/openweather/map/Feature.feature");
formatter.feature({
  "name": "To verify all important information is present on the page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "Verification.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to ApplicationURL",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verification of fields on the page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Firstage"
    }
  ]
});
formatter.step({
  "name": "The field with locatorName should be present",
  "keyword": "Then "
});
formatter.match({
  "location": "Verification.fieldPresent(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Total number of links present",
  "keyword": "Then "
});
formatter.match({
  "location": "Verification.linksverify()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});