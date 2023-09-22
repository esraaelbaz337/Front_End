import React from 'react';

const MustSignUpPage = () => {
    return (
        <div className="container">
  <h1>Create an Account</h1>
  <form action="/signup" method="post">
    <input type="text" name="name" placeholder="Your Name" required="" />
    <input type="email" name="email" placeholder="Your Email" required="" />
    <input type="password" name="password" placeholder="Password" required="" />
    <input type="submit" defaultValue="Sign Up" />
  </form>
</div>

    );
}

export default MustSignUpPage;
