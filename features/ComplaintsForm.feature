#features/ComplaintsForm.feature

Feature: Complaints Form Page Verification
    As a user
    I Should Be Able To Login With Valid Credentials
    So That I Can Go To Complaints Form

    Scenario: Verify with Blank deatils.
        When I Provide Blank Details And Click On Submit Button
        Then It Should Display Error Message