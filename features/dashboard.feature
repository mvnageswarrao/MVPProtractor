#features/dashboard.feature
Feature: Dash board Page Verification
    As a user
    I should be able to view Dash Board Page
    So that I can View Docs 
    And DownLoad the Travel Docs

    Scenario: Verify the Num of Docs Avaialable      
        When I Provideed Valid Credentials and Opened Dash Board Page
        Then Proper Num of Docs Should display

    Scenario: Verify the DownLoad Functionality      
        When I click DownLoad Button
        Then Respective Doc should be downloaded 



