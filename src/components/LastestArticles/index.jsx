import './LastestArticles.css'

const LastestArticles = () => {
    return (
        <div className='latestArticlesStructure'>
            <h1>Lastest Articles</h1>
            <section className='latestArticles'>
                <div className='latestArticlesContent'>
                    <img src="./images/image-currency.jpg" alt="" />
                    <p3>By claire Robinson</p3>
                    <h2>Receive money in any currency with no fees</h2>
                    <p2>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p2>
                </div>
                <div className='latestArticlesContent'>
                    <img src="./images/image-restaurant.jpg" alt="" />
                    <p3>By Wilson Hutton</p3>
                    <h2>Treat yourself without worrying about money</h2>
                    <p2>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...</p2>
                </div>
                <div className='latestArticlesContent'>
                    <img src="./images/image-plane.jpg" alt="" />
                    <p3>By Wilson Hutton</p3>
                    <h2>Take your Easybank card wherever you go</h2>
                    <p2>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p2>
                </div>
                <div className='latestArticlesContent'>
                    <img src="./images/image-confetti.jpg" alt="" />
                    <p3>By Claire Robinson</p3>
                    <h2>Our invite-only Beta accounts are now live!</h2>
                    <p2>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p2>
                </div>
            </section>
        </div>
    )
}

export default LastestArticles