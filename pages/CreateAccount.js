

const CreateAccount = () => {
    return (
        <>
            <div className="main-log-div">
                <div className="div_1-log">
                    <h3>SIGN UP</h3>
                    <div>
                        <div>
                            <a href="#">
                                <img src="sign-in_1.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src="sign-in_2.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <form action="">
                    <input type="text" name="" id="" placeholder="First Name" />
                    <input type="text" name="" id="" placeholder="Last Name" />
                    <input type="email" name="" id="" placeholder="Email" />
                    <input type="text" name="" id="" placeholder="Phone Numper" />
                    <input type="password" name="" id="" placeholder="password" />
                    <input type="password" name="" id="" placeholder="Confirm password" />
                    <div className="div_check-log">
                        <input type="checkbox" name="" id="" /> Sign Up for Newsletter
                    </div>
                    <input type="submit" defaultValue="CREATE AN ACCOUNT" />
                </form>
            </div>

        </>
    )
}

export default CreateAccount

