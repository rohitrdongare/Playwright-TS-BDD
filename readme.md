# BDD Important
# #run command
npx cucumber-js 

# # multiple test execution command
npx cucumber-js src/test/features/demoLogin.feature src/test/features/login.feature

# #executing specific scenario
npx cucumber-js --tags=@DemoLoginFailure OR
npx cucumber-js --tags="@DemoLoginFailure"

# #for proper execution of feature and step file link
# #give ctrl , then search for cucumber features and enter folloing
 ```typescript
    "cucumber.features": [
        

        "src/test/features/*.feature"
    ],
    "cucumber.glue": [
        "src/test/steps/*.ts"
    ],


# #To Add Only Recently Modified Files (excluding new files):
git add -u

# #To Add Only New Files (excluding modified ones):
git add --all

