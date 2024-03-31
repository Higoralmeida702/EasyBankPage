import './PrincipalContent.css'

const PrincipalContent = () => {
    return (
        <div>
        <div className='principalContent'>
            <div className='nextGenerationContent'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button id="RequestInviteBtn">Request Invite</button>
            </div>
            <img className="imgCelulares" src="./images/image-mockups.png" alt="Imagem celulares" />
        </div>
        <div className='whyEasyBank'>
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your finalcial hub. <br/>Control your finances like never before.</p>
        <section className="benefits">
            <div className='benefitsContent'>
                <img src="./images/icon-online.svg" alt="" />
                <h1>Online Banking</h1>
                <p>Our modern web and mobile application allow you to keep track of your finances wherever you are in the world.</p>
            </div>
            <div className='bennefitsContent  '>
               <img src="./images/icon-budgeting.svg" alt="" />
                <h1>Simple Budgeting</h1>
                <p>see exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
            </div>
            <div className='benefitsContent'>
                <img src="./images/icon-onboarding.svg" alt="" />
                <h1>Fast Onboarding</h1>
                <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
            </div>
            <div className='benefitsContent'>
                <img src="./images/icon-api.svg" alt="" />
                <h1>Open API</h1>
                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
            </div>
        </section>
        </div>
        </div>
    )
}

export default PrincipalContent;