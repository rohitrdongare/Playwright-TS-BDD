@DemoLoginTests
Feature: Login into sauce website

  Background:
    When User navigate to the application
  
  @DemoLoginSuccess
  Scenario:Login should be success
    When user Enters the userName as "standard_user"
    And user Enters password  as "secret_sauce"
    And User click on Login Button
    Then Webpag should open

  @DemoLoginFailure
  Scenario:Login should not be success
    When user Enters the userName as "standard_userssssss"
    And user Enters password  as "secret_saucesss"
    And User click on Login Button
    Then Error message should show 


