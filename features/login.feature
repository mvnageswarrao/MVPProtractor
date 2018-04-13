#features/login.feature
Feature: Login Page Verification
    As a user
    I should be able to login with valid credentials
    So that I can see Dash board page

    Scenario: Provide Blank Credentials      
        When I Provide Blank Credentials
        Then Continue Button should be in Disable mode

    Scenario: Provide InValid Credentials      
        When I Provide InValid Credentials
        Then Should display Error Message

    Scenario: Provide Valid Credentials      
        When I Provide Valid Credentials
        Then Should display Dash Board Page

