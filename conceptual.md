### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
REpresentational State Transfer, is a structured way to creates routes. It's an industry standard

- What is a resource?
What the route renders.

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
  Potential for having the form submitted twice

- What does idempotent mean? Which HTTP verbs are idempotent?
- PATCH and PUT are idempotent.     Mean it will always return the same result.
  

- What is the difference between PUT and PATCH?
- PATCH = modify / update content. PUT = replace an entire content.

- What is one way encryption?
- You cannot guess/figure out the password given the encryption result.

- What is the purpose of a `salt` when hashing a password?
- Adds random data to the password so that every password hash result is unique, even though multiple passwords could be the same 

- What is the purpose of the Bcrypt module?
- Hasing and salting

- What is the difference between authorization and authentication?
- Authorized to access certain parts (ex if you are a mod vs a normal user), authenticated to access a certain account (make sure you are who you claim you are)
